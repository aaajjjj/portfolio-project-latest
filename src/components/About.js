import { Picture } from "react-responsive-picture";
import Ab_pic from "../media/my_photo.jpeg";

export default function About() {
  return (
    <div className="row" id="about">
      <h2 className="about_header">About me</h2>
      <Picture className="column1 about-image" src={Ab_pic} />
      <div className="column2">
          Hi, I’m <strong>Ajal RC</strong> — a software engineer passionate
          about building secure, scalable, and testable systems using
          cloud-native and event-driven architectures.
          <br />
          <br />
          Originally from Nepal, I initially came to the U.S. to study
          mechanical engineering and later explored physics due to scholarship
          constraints. Over time, I transitioned my academic path and discovered
          a strong passion for computing — ultimately majoring in Computer
          Science and Mathematics, with Physics as a minor. Since then, I’ve
          completed a competitive 2-year rotational engineering program and now
          work full-time as a backend engineer on enterprise-scale AWS platforms
          at Wellmark Blue Cross Blue Shield.
          <br />
          <br />
          My journey spans internships, teaching roles, and impactful projects,
          including:
        <br></br>
        <p>
          <ul>
            <li>
              📦 Designed "Product Quote Flexibility (PQF)" — a modular plan
              quoting system using AWS CDK, Lambda, SQS/SNS, and API Gateway
              with full CI/CD and Jest testing.
            </li>
            <li>
              🧩 Built event-driven ELT pipelines for real-time group data
              ingestion and reconciliation using Kysely, S3, and Flyway.
            </li>
            <li>
              🌍 Integrated weather forecasting APIs into AgTech dashboards
              during my internship at Corteva Agriscience.
            </li>
            <li>
              🔐 Developed phishing detection tools and AWS compliance scripts
              as part of enterprise security initiatives.
            </li>
            <li>
              🧠 Explored blockchain and AI independently — built Web3 smart
              contracts and facial detection models with Python, Web3, and
              MATLAB.
            </li>
          </ul>
        </p>
        I’m fluent in TypeScript, Node.js, Python, AWS, and PostgreSQL. I’m
        driven by a problem-solving mindset and a passion for clean,
        maintainable code.
        <br />
        <br />
        Let’s connect and build something impactful together.
      </div>
    </div>
  );
}
