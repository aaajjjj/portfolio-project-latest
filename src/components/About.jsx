import Ab_pic from "../media/my_photo.jpeg";

export default function About() {
  return (
    <div className="row" id="about">
      <h2 className="about_header">About me</h2>
      <div className="column1">
        <img className="about-image" src={Ab_pic} alt="Ajal RC" />
      </div>
      <div className="column2">
        Hi, I'm <strong>Ajal RC</strong> — a senior software engineer specializing
        in the data systems and APIs that AI products depend on. Based in Des Moines,
        originally from Nepal.
        <br />
        <br />
        Here's the honest story: I came to the U.S. planning to be a rocket
        scientist. I started as a mechanical engineering student, pivoted to physics
        on a scholarship constraint, and then discovered computing — which turned out
        to be my actual destiny. I majored in Computer Science and Mathematics at
        Drake University and earned my MS in Computer Science in 2026. Not the path I
        planned, but exactly the one I'd choose again.
        <br />
        <br />
        Since then, I've spent 4+ years at Wellmark Blue Cross Blue Shield building
        production ELT pipelines, event-driven microservices, and FHIR R4
        interoperability APIs that move healthcare data at enterprise scale. Delivered
        outcomes include cutting PBM migration cycles from 18 months to on-demand, a
        10x API latency improvement, and $180K in annual cost avoidance. Currently
        building the Patient Access and Payer-to-Payer APIs for CMS-0057-F compliance
        going live in January 2027.
        <br />
        <br />
        Lately I've been going deeper into AI: RAG pipelines, LLM APIs, and agentic
        workflows with LangGraph. I also publish{" "}
        <strong>AI Engineering Digest</strong> — a daily newsletter curating the most
        useful AI engineering content for engineers who ship to production, not just
        experiment.
        <br />
        <br />
        Outside of work: civic hackathons, the Des Moines Fellowship, teaching Python
        and Java, and a firm belief that healthcare data is the most interesting data
        problem in tech.
      </div>
    </div>
  );
}
