import React, { useState } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";


const TalkToNathan = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askNathan = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("/ask-nathan", { question });
      setResponse(res.data.answer);
    } catch (error) {
      setResponse("Sorry, something went wrong.");
      console.error("TalkToNathan error:", error);
    } finally {
      setLoading(false);
      setQuestion(""); // ✨ clear the textarea
    }
  };

  return (
    <div className="talkBox">
      <div className="talkTitle">Interview Me</div>

      <div className="talkInputGroup">
        <textarea
          placeholder="Ask me about my work, projects, experience..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={1}
        />
        <button onClick={askNathan} disabled={loading}>
          {loading ? "..." : "Go"}
        </button>
      </div>

      <div className="talkResponse">{response}</div>
    </div>
  );

};

export default TalkToNathan;