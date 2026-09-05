export const memories = [
  {
    "id": "positioning",
    "title": "Professional positioning",
    "text": "Nathan A. Lucy is a GenAI Systems Developer in Austin, Texas. He works full-time at Prolego and is also Founder and AI Engineer at MoonRock Instruments. He builds production-grade AI systems: agent architecture, structured tool use for production AI systems, custom retrieval, evaluation loops, vector-native applications, forecasting systems, custom model APIs, and data products. He is strongest where machine learning, data infrastructure, evaluation, and human-centered product thinking meet."
  },
  {
    "id": "contact",
    "title": "Contact and public links",
    "text": "Nathan can be reached at nathanalucy@gmail.com or +1 970 749 1721. His site is nathanlucy.tech, his GitHub is github.com/cosmocoder1, and his writing is at medium.com/@cosmocoder1."
  },
  {
    "id": "technical-skills",
    "title": "Technical skills",
    "text": "Nathan works with Python, JavaScript ES5 and ES6, Ruby, React, React Native, Redux, Vue.js, Django, AWS, Azure, Kubernetes, Okta agent auth, MySQL, PostgreSQL, MongoDB, BigQuery, Docker, Snowflake, Sigma BI, PyTorch, Sklearn, SARIMA, LSTM, Seq2Seq, ChromaDB, pgvector, embedding search, hybrid search, BM25, custom retrieval, context engineering, authenticated agent systems, structured tool use, function calling, model routing, evaluation harnesses, safety constraints, human-in-the-loop review, custom tuning, NGINX, Gunicorn, CI/CD, Jest, Mocha, K6, and Loader.io."
  },
  {
    "id": "prolego",
    "title": "Prolego",
    "text": "Nathan works full-time at Prolego as a GenAI Systems Developer from June 2025 to present, based in Austin, Texas and remote. He builds custom LLM tools and context-aware systems for enterprise clients, focused on shipping generative AI applications that are scalable, safe, and effective. Prolego's public approach is Performance-Driven Development: capture representative data and tasks, optimize the LLM solution, build a performance evaluation framework, and report progress with metrics such as task performance, confidence, latency, cost, robustness, and risk. Nathan's Prolego positioning is strongest around agent architecture, structured tool use for production AI systems, custom retrieval, context architecture, model-facing tools, evaluation loops, safety constraints, and making AI behavior transparent enough for business stakeholders to trust."
  },
  {
    "id": "background",
    "title": "Background and point of view",
    "text": "Nathan's background includes psychology, premedical biochemistry, health science, cognition, and software engineering. That mix informs his engineering taste: he wants technically serious systems that are still legible, useful, and designed around how people actually think and work."
  },
  {
    "id": "moonrock-work",
    "title": "MoonRock Instruments work",
    "text": "Nathan is Founder and AI Engineer at MoonRock Instruments from June 2023 to present. He developed MarketMaven, a private machine-learning research platform for financial market behavior and disciplined model workflows. He developed Noetic Search, a post-retrieval reconciliation layer that improves evidence selection after broad hybrid search without exposing internal implementation details. He built LLM-supported public sentiment analysis qualified against deep embedding-space context and historical signal similarity. He also supported a University of Texas Neurology long-COVID IVIG therapy study with reproducible cytokine analysis and publication-oriented figure generation."
  },
  {
    "id": "avenue",
    "title": "Avenue i Media",
    "text": "At Avenue i Media from September 2022 to April 2025, Nathan worked as a Software Engineer in AI/ML Ops. He developed and deployed custom AI/ML APIs for training, inference, and autonomous insights. He built full-stack data pipelines from backend services through AWS to Snowflake, Sigma dashboards, and custom UI. He also modernized platforms by integrating Vue.js with Django templates."
  },
  {
    "id": "galvanize",
    "title": "Galvanize",
    "text": "At Galvanize from May 2022 to September 2022, Nathan provided debugging and architectural review for student and internal projects across unfamiliar codebases. He also Dockerized internal tooling and implemented caching layers using the Google Sheets API."
  },
  {
    "id": "writing",
    "title": "Software engineering writing",
    "text": "From March 2022 to March 2023, Nathan wrote programming articles for JavaScript in Plain English, an online publication with more than 2 million monthly views."
  },
  {
    "id": "cortica",
    "title": "Cortica",
    "text": "Cortica is Nathan's proprietary longitudinal LLM state layer. Public descriptions should stay high level: retrieval alone is not memory; durable memory is maintained, consolidated, archived, and reconnected to evidence over time; provenance keeps prior conclusions inspectable; and later questions can depend on accumulated structure rather than only nearest-neighbor retrieval. It is not a transcript store. Implementation details, internal architecture, storage mechanics, algorithms, prompts, and source code are private."
  },
  {
    "id": "marketmaven",
    "title": "MarketMaven",
    "text": "MarketMaven is Nathan's private machine-learning research platform for financial market behavior from 2023 to present. It supports market data management, model experimentation, opportunity screening, repeatable review, research automation, and operational reporting. Public-facing descriptions can mention DNN, LSTM, and XGBoost-style modeling approaches, but the production code, research logic, proprietary indicators, data ingestion logic, configurations, backtesting internals, trading logic, and order-generation workflows are private. Public overview: https://github.com/NLucy/MarketMaven-Public."
  },
  {
    "id": "moonrock-instruments",
    "title": "MoonRock Instruments",
    "text": "MoonRock Instruments is Nathan's consulting practice for applied and research-oriented AI, statistical modeling, and infrastructure in domains where precision matters. Its missions include context-aware LLM systems, agent architecture, structured tool use, evaluable model behavior, custom retrieval, vector-native applications, post-retrieval evidence selection, forecasting, signal evaluation, separability metrics, confidence scoring, and reproducible clinical research analytics workflows for diagnostic research and publication-oriented figures. Website: https://www.moonrockinstruments.com/."
  },
  {
    "id": "noetic-search",
    "title": "Noetic Search",
    "text": "Noetic Search is Nathan's post-retrieval reconciliation system for hybrid search. It does not replace vector search, lexical search, rerankers, or LLM reasoning. Instead, it operates after broad candidate retrieval to select a coherent evidence surface before the LLM sees the prompt. It adds a multihop-style evidence step, selecting connected support instead of isolated nearest neighbors. At a high level, it uses local graph reconciliation to detect stronger evidence regions, reduce repetitive or shallow nearest-neighbor results, and expose uncertainty for inspection. On benchmarks (HotpotQA, 2WikiMultiHopQA, MuSiQue, and clinical evidence retrieval), Noetic improved mean recall from 0.738 to 0.783 across @5/@10: a 4.5 percentage-point absolute gain, or 6.1% relative improvement over standard hybrid search. The detailed mechanics are private. The code is available at https://github.com/NLucy/noetic-search."
  },
  {
    "id": "ut-ivig-study",
    "title": "UT IVIG Therapy Study",
    "text": "Nathan supported a University of Texas Neurology collaboration focused on long-COVID IVIG therapy. The work analyzed early versus late IVIG treatment responders by linking patient questionnaire response timing with multiplex cytokine measurements. The cleaned analysis handled 11 validated patients, 36 total cytokine measurements, 7 early responders, 4 late responders, and 48 cytokines used in PCA and heatmap analyses. Nathan prepared reproducible Python analysis code and publication-oriented figures including patient-level PCA scatter plots, PDGF-AA measurement-level plots, PC2 cytokine loading charts, and patient-level cytokine heatmaps."
  },
  {
    "id": "workstyle",
    "title": "Work style",
    "text": "Nathan is curious, calm, positive, sharp, data-driven, eager to learn, and a strong team contributor. He communicates clearly, enjoys practical systems, can debug unfamiliar codebases, and cares about making complex tools usable."
  },
  {
    "id": "certifications",
    "title": "Certifications",
    "text": "Nathan's certifications include SnowPro Core, AWS Cloud Practitioner with Solutions Architect in progress, Google Data Analytics, Triplebyte Certified, CITI Program Biomedical Research Ethics, and Avalanche Rescue Training."
  },
  {
    "id": "education",
    "title": "Education",
    "text": "Nathan completed the Hack Reactor Advanced Software Engineering Immersive in 2021-2022. He attended Fort Lewis College from July 2011 to May 2014 for a B.A. in Psychology and a Premedical Biochemistry major. He attended Texas State University from January 2017 to January 2018 as a Biochemistry major."
  },
  {
    "id": "interests",
    "title": "Interests",
    "text": "Nathan's interests include music production, digital art, writing, health science, and cognitive systems."
  }
];
