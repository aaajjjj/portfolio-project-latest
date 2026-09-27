import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaJava } from "react-icons/fa";
import { DiPython } from "react-icons/di";

export default function Timeline() {
  return (
    <div id="job">
      <h2 className="timeline_header">Work Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jul 2026 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Software Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>
            a. Developing FHIR R4 APIs for CMS Interoperability and Prior Authorization compliance (CMS-0057-F) — Patient Access, Provider Access, and Payer-to-Payer data exchange ahead of the January 2027 enforcement deadline.
          </p>
          <p>
            b. Mapping payer claims, clinical, and member enrollment data to US Core and Da Vinci profiles, validating resource conformance against implementation guide requirements.
          </p>
          <p>
            c. Partnering with compliance, legal, and product stakeholders to translate federal regulatory requirements into API specifications and delivery milestones.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2024 - Jul 2026"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer – Enterprise Data Services
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>
            a. Rearchitected a monolithic stored-procedure chain into a modular, event-driven ELT pipeline for PBM data — cutting migration cycles from 18+ months to on-demand.
          </p>
          <p>
            b. Captured 99% of group membership deltas in real time and built a full-file reconciliation API for CVS pre-submission validation against Facets.
          </p>
          <p>
            c. Delivered a versioned enterprise benefit API achieving sub-second response times against a 10-second legacy baseline while maintaining backward compatibility for 24/7 member and provider access.
          </p>
          <p>
            d. Consolidated redundant benefit implementations across teams into a single reusable service — eliminating duplicate engineering effort and establishing a single source of truth.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2024 - June 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotation 4: Cybersecurity Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>
            a. Built a phishing detection Outlook plugin with XML and
            JavaScript; cut reporting time by 30%.
          </p>
          <p>
            b. Deployed Python-based compliance scripts via Terraform to
            automate cloud resource checks.
          </p>
         <p>c. Integrated log analysis pipelines to improve response time and reduce manual threat triaging by 30%.</p>
          <p>d. Enabled role-based audit and visibility over cloud infrastructure by automating policy checks and reporting pipelines.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - Dec 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotation 3: Full Stack Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
         <p>a. Modernized a legacy insurance demo site using Angular, fixing broken routes, improving component reusability, and ensuring mobile responsiveness.</p>
          <p>b. Integrated Google Maps API to support real-time location search for providers and hospitals.</p>
          <p>c. Automated biannual data feed ingestion, replacing manual file uploads and reducing data errors.</p>
          <p>d. Improved collaboration with UI/UX team to refine wireframes, ensuring a seamless product rollout with minimal post-release bugs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 - June 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotation 2: Software Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>a. Automated plan, product, and rate uploads via Angular UI and AWS Lambda-triggered batch jobs, replacing MySQL scripts.</p>
          <p>b. Introduced JSON-based middleware to validate and transform Excel uploads into structured records.</p>
          <p>c. Enabled detailed error logging and inline feedback for end users, increasing productivity and accuracy.</p>
          <p>d. Helped reduce processing time from 3 months to a few hours, saving $180K annually.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - Dec 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotation 1: Backend Software Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
           <p>a. Built a production-ready Angular dashboard for agents to view Medicare enrollment status and manage book of business.</p>
          <p>b. Implemented backend with Lambda and MySQL to automate enrollment data retrieval and updates.</p>
          <p>c. Added filtering, export, and data visualization features for agents to monitor plan-level engagement.</p>
          <p>d. Conducted comprehensive testing and performance tuning to ensure reliability and scalability.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2021 - May 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Cloud Operations Intern
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Part-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
        <p>a. Automated AWS resource provisioning with reusable templates, reducing cloud deployment time by 7%.</p>
          <p>b. Built Python scripts to streamline cloud build and deployment pipelines across multiple teams.</p>
          <p>c. Managed SSL/TLS certificate renewals across AWS and on-prem environments with 0% downtime.</p>
          <p>d. Partnered with DevOps teams to optimize infrastructure workflows and incident tracking.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - Aug 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Corteva Agriscience, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Johnston, IA</h6>
          <p>a. Built weather forecasting maps using APIs for temperature, precipitation, and agronomic insights.</p>
          <p>b. Developed ETL pipelines to transform raw weather data into PostgreSQL tables powering dashboards.</p>
          <p>c. Implemented batch jobs in the cloud for continuous data sync and transformation.</p>
          <p>d. Used Datadog to monitor data health and proactively detect pipeline failures.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - May 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Teaching Assistant (<DiPython /> && <FaJava />)
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Drake University, Part-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>a. Taught fundamentals of Python and Java through projects, labs, and office hours.</p>
          <p>b. Boosted class performance by 14% through custom study sessions and assignments.</p>
          <p>c. Facilitated critical thinking and problem-solving using real-world coding challenges.</p>
          <p>d. Received 90%+ student approval for effective and supportive instruction.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}
