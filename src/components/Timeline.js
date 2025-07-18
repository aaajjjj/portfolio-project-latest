import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaJava } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { GiAutoRepair } from "react-icons/gi";

export default function Timeline() {
  return (
    <div id="job">
      <h2 className="timeline_header">Past and recent work experiences</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jul 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer – Enterprise Data Services
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>
            a. Designed and deployed the "Product Quote Flexibility (PQF)"
            system using AWS CDK, Lambda, SQS, SNS, and API Gateway — replacing
            legacy quoting platforms with modular, serverless architecture.
          </p>
          <p>
            b. Created plan data ingestion workflows triggered from external
            platforms, storing structured data for queryable access via REST
            APIs with fallback support for legacy APIs.
          </p>
          <p>
            c. Implemented 100% unit test coverage with Jest and enabled
            integration testing using LocalStack to validate service behavior
            pre-deployment.
          </p>
          <p>
            d. Managed schema migrations with Flyway to maintain
            version-controlled database infrastructure and eliminate manual
            intervention.
          </p>
          <p>
            e. Spearheading development of "Enterprise Group Service" — a
            real-time, event-driven ELT pipeline that transforms legacy batch
            workflows using S3 triggers, Kysely, and reconciliation APIs.
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

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - May 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiAutoRepair />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Tech Support
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Drake University, Part-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA</h6>
          <p>a. Provided IT support to students and faculty, achieving over 95% satisfaction in service feedback.</p>
          <p>b. Collaborated with senior techs to troubleshoot and resolve system-wide issues.</p>
          <p>c. Documented support processes to improve team onboarding and reduce resolution time.</p>
          <p>d. Mentored new hires and contributed to maintaining high service reliability standards.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
