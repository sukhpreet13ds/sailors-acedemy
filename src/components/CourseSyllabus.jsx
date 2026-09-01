import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const syllabusModules = [
  {
    id: "mod-1",
    moduleNumber: "Module 1",
    title: "AI Fundamentals & LLM Architectures",
    duration: "Week 1 - 2",
    lessonsCount: "6 Lessons",
    overview: "Build a rock-solid foundation in Generative AI systems. Learn how Large Language Models work under the hood, tokenization mechanisms, context limits, and model capabilities.",
    outcomes: [
      "Understanding LLMs (GPT-4, Claude, Gemini) and transformer architecture.",
      "Tokenization, temperature parameters, and context window mechanics.",
      "Zero-shot, single-shot, and multi-shot prompting strategies.",
      "Avoiding model hallucinations and managing AI output bias."
    ],
    tools: ["ChatGPT", "Claude 3.5 Sonnet", "Google Gemini"]
  },
  {
    id: "mod-2",
    moduleNumber: "Module 2",
    title: "Advanced Prompt Engineering Tactics",
    duration: "Week 3 - 4",
    lessonsCount: "6 Lessons",
    overview: "Master production-grade prompt frameworks. Learn system prompting, role-play Persona patterns, tree-of-thought reasoning, and structured JSON output generation.",
    outcomes: [
      "System prompt design & instruction hierarchy optimization.",
      "Chain-of-Thought (CoT) and Tree-of-Thoughts (ToT) reasoning methods.",
      "Enforcing strict JSON, XML, and Markdown format schemas.",
      "Automating complex document summarization and data extraction."
    ],
    tools: ["OpenAI Playground", "Anthropic Console", "PromptBase"]
  },
  {
    id: "mod-3",
    moduleNumber: "Module 3",
    title: "Generative Image & Multimodal AI",
    duration: "Week 5",
    lessonsCount: "4 Lessons",
    overview: "Explore visual generative AI. Master text-to-image prompt styling, aspect ratios, seed control, and multimodal vision analysis for branding and marketing assets.",
    outcomes: [
      "Midjourney parameters (--v 6, --aspect, --stylize, --seed).",
      "DALL-E 3 & Stable Diffusion WebUI parameter tuning.",
      "Multimodal image analysis & OCR data extraction.",
      "Creating professional marketing visuals and UI mockups."
    ],
    tools: ["Midjourney v6", "DALL-E 3", "Stable Diffusion"]
  },
  {
    id: "mod-4",
    moduleNumber: "Module 4",
    title: "Autonomous AI Agents & Workflows",
    duration: "Week 6",
    lessonsCount: "4 Lessons",
    overview: "Transition from manual prompts to automated AI agent pipelines. Build multi-step automated workflows that handle email generation, web research, and database updates autonomously.",
    outcomes: [
      "Building multi-agent workflows with tools like Make & Zapier.",
      "Agentic loops: Goal setting, planning, execution, and self-correction.",
      "Web scraping & real-time search synthesis with perplexity models.",
      "Automating repetitive office tasks with custom GPTs."
    ],
    tools: ["Make.com", "Zapier AI", "Custom GPTs", "Perplexity"]
  },
  {
    id: "mod-5",
    moduleNumber: "Module 5",
    title: "Enterprise Custom Knowledge & API Integration",
    duration: "Week 7",
    lessonsCount: "4 Lessons",
    overview: "Learn how to feed enterprise documents (PDFs, docs, databases) into AI models securely using Retrieval-Augmented Generation (RAG) and vector embeddings.",
    outcomes: [
      "Retrieval-Augmented Generation (RAG) concepts and vector databases.",
      "Connecting OpenAI & Claude APIs to custom web applications.",
      "Data privacy, encryption, and enterprise AI compliance.",
      "Cost optimization for API token usage in production."
    ],
    tools: ["Pinecone", "LangChain", "OpenAI API", "Python"]
  },
  {
    id: "mod-6",
    moduleNumber: "Module 6",
    title: "Capstone Project & Agency Briefs",
    duration: "Week 8",
    lessonsCount: "Capstone Week",
    overview: "Apply everything you've learned to build a fully functional AI automation system for a real agency client brief. Present your portfolio to mentors and industry recruiters.",
    outcomes: [
      "End-to-end AI automation strategy for real business workflow.",
      "1-on-1 portfolio review and feedback from senior AI engineers.",
      "Resume building, interview prep, and freelance client pitching.",
      "Course Graduation Certificate & placement support."
    ],
    tools: ["GitHub", "Figma", "Live Client Briefs"]
  }
];

const CourseSyllabus = () => {
  const [activeModuleId, setActiveModuleId] = useState("mod-1");

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    });

    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeModuleId]);

  const activeModule = syllabusModules.find((m) => m.id === activeModuleId) || syllabusModules[0];

  return (
    <section className="course-syllabus-section">
      <div className="course-syllabus-container">
        <div className="course-syllabus-header scroll-reveal">
          <span className="course-syllabus-tag">CURRICULUM BREAKDOWN</span>
          <h2 className="course-syllabus-title">Course Syllabus & Modules</h2>
          <p className="course-syllabus-subtitle">
            Structured step-by-step learning path engineered for practical industry mastery.
          </p>
        </div>

        <div className="course-syllabus-layout">
          {/* Left Module Tabs List with Connected Thread Timeline */}
          <div className="syllabus-tabs-column scroll-reveal">
            <div className="syllabus-timeline-wrapper">
              <div className="syllabus-timeline-line" />
              {syllabusModules.map((module) => (
                <button
                  key={module.id}
                  type="button"
                  className={`syllabus-tab-item ${activeModuleId === module.id ? "active" : ""}`}
                  onClick={() => setActiveModuleId(module.id)}
                >
                  <div className="syllabus-node-dot" />
                  <div className="syllabus-tab-card">
                    <span className="tab-module-badge">{module.moduleNumber}</span>
                    <span className="tab-module-title">{module.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Module Details Panel */}
          <div className="syllabus-content-column scroll-reveal">
            <div className="syllabus-content-card">
              <div className="syllabus-content-header">
                <div>
                  <span className="content-module-num">{activeModule.moduleNumber}</span>
                  <h3 className="content-module-title">{activeModule.title}</h3>
                </div>
                <div className="content-meta-pills">
                  <span className="meta-pill"><FontAwesomeIcon icon={faClock} /> {activeModule.duration}</span>
                  <span className="meta-pill"><FontAwesomeIcon icon={faBookOpen} /> {activeModule.lessonsCount}</span>
                </div>
              </div>

              <p className="syllabus-overview">{activeModule.overview}</p>

              <div className="syllabus-outcomes-block">
                <h4 className="outcomes-heading">What You Will Master:</h4>
                <ul className="outcomes-list">
                  {activeModule.outcomes.map((item, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} className="outcome-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="syllabus-tools-block">
                <h4 className="tools-heading">Tools & Platforms Covered:</h4>
                <div className="tools-pills-row">
                  {activeModule.tools.map((tool, idx) => (
                    <span key={idx} className="tool-pill">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSyllabus;
