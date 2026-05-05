const byId = (id) => document.getElementById(id);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const listItems = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

const loadProfile = async () => {
  const response = await fetch("/content/profile.json");
  if (!response.ok) throw new Error("Could not load profile content");
  return response.json();
};

const parseStreamEvent = (eventBlock) => {
  const event = { event: "message", data: "" };

  for (const line of eventBlock.split("\n")) {
    if (line.startsWith("event:")) event.event = line.slice(6).trim();
    if (line.startsWith("data:")) event.data += line.slice(5).trimStart();
  }

  return {
    event: event.event,
    data: event.data ? JSON.parse(event.data) : {}
  };
};

const readEventStream = async (response, onEvent) => {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });

    const events = buffer.split(/\n\n/);
    buffer = events.pop() || "";

    for (const eventBlock of events) {
      if (eventBlock.trim()) onEvent(parseStreamEvent(eventBlock));
    }

    if (done) break;
  }

  if (buffer.trim()) onEvent(parseStreamEvent(buffer));
};

const renderProfile = (profile) => {
  document.title = profile.name;
  byId("hero-role").textContent = `${profile.role} · ${profile.location}`;
  byId("hero-title").textContent = profile.headline;
  byId("hero-summary").textContent = profile.summary;
  byId("portrait").src = profile.portrait;
  byId("portrait").alt = profile.name;
  byId("email-link").href = `mailto:${profile.email}`;
  byId("email-link").textContent = profile.email;
  byId("phone-link").href = `tel:${profile.phone.replaceAll(/\D/g, "")}`;
  byId("phone-link").textContent = profile.phone;

  byId("hero-links").innerHTML = [
    `<a class="button" href="#interview">Let's talk</a>`,
    ...profile.links.map((link) => (
      `<a class="button secondary" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
    ))
  ].join("");

  byId("strengths").innerHTML = profile.strengths
    .map((strength) => `<div class="strength-item">${escapeHtml(strength)}</div>`)
    .join("");

  byId("skills").innerHTML = profile.skills.map((skillGroup) => `
    <article class="skill-card">
      <h3>${escapeHtml(skillGroup.group)}</h3>
      <p>${skillGroup.items.map(escapeHtml).join(" · ")}</p>
    </article>
  `).join("");

  byId("experience").innerHTML = profile.experience.map((job) => `
    <article class="timeline-item">
      <p class="timeline-meta">${escapeHtml(job.period)} · ${escapeHtml(job.location)}</p>
      <h3>${escapeHtml(job.title)} · ${escapeHtml(job.company)}</h3>
      <ul>${listItems(job.bullets)}</ul>
    </article>
  `).join("");

  byId("project-list").innerHTML = profile.projects.map((project) => `
    <article class="project-card">
      <p class="project-type">${escapeHtml(project.type)}</p>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      ${project.period ? `<p class="project-period">${escapeHtml(project.period)}</p>` : ""}
      <div class="tags">${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <ul>${listItems(project.bullets)}</ul>
      ${project.href ? `<a class="project-link" href="${escapeHtml(project.href)}" target="_blank" rel="noreferrer">View project</a>` : ""}
    </article>
  `).join("");

  byId("certifications").innerHTML = listItems(profile.certifications);
  byId("education").innerHTML = profile.education
    .map((item) => `<li><strong>${escapeHtml(item.school)}</strong><br>${escapeHtml(item.details)}</li>`)
    .join("");
  byId("interests").innerHTML = listItems(profile.interests);
};

const setupInterview = () => {
  const form = byId("ask-form");
  const question = byId("question");
  const answer = byId("answer");
  const button = form.querySelector("button");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const value = question.value.trim();
    if (!value) return;

    button.disabled = true;
    button.textContent = "Sending";
    answer.textContent = "Thinking...";

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Accept": "text/event-stream",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: value, stream: true })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Request failed");
      }

      if (!response.body || !response.headers.get("Content-Type")?.includes("text/event-stream")) {
        const data = await response.json();
        answer.textContent = data.answer;
        question.value = "";
        return;
      }

      let streamedAnswer = "";

      await readEventStream(response, ({ event, data }) => {
        if (event === "delta") {
          streamedAnswer += data.text || "";
          answer.textContent = streamedAnswer;
        }

        if (event === "error") {
          throw new Error(data.error || "Interview assistant failed");
        }
      });

      question.value = "";
    } catch (error) {
      answer.textContent = `I could not answer that yet. ${error.message}`;
      console.error(error);
    } finally {
      button.disabled = false;
      button.textContent = "Send";
    }
  });
};

loadProfile()
  .then(renderProfile)
  .catch((error) => {
    console.error(error);
    byId("hero-summary").textContent = "Profile content is temporarily unavailable.";
  });

setupInterview();
