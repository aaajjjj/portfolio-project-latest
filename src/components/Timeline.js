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
          date="Jan 2023 - June 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotation 2: Software Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time{" "}
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA </h6>
          <p id="style_tasks">
            a. Revolutionized the manual process of adding services, products, and rates, resulting in significant time and budget savings.
          </p>
          <p id="style_tasks">
            b. Replaced complex store procedure SQL queries with a seamless and intuitive file upload functionality.
          </p>
          <p id="style_tasks">
            c. Developed robust validation mechanisms to ensure the integrity of uploaded files.
          </p>
          <p id="style_tasks">
          d. Enhanced the user interface with robust filtering capabilities for streamlined product management.
          </p>
          <p id="style_tasks">
          e. Implemented a dedicated route in the middle layer to receive and store uploaded files.
          </p>
          <p id="style_tasks">
          f. Introduced detailed error logging and reporting for proactive error management.
          </p>
          <p id="style_tasks">
          g. Streamlined operations, reducing debugging time and enhancing overall productivity.
          </p>
          <p id="style_tasks">
          h. Collaborated effectively with the team, aligning development tasks and meeting business requirements.
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="June 2022 - December 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotation 1: Backend Software Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time{" "}
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA </h6>
          <p id="style_tasks">
            a. Transformed an incomplete Angular dashboard into a production-level application for agents to access 
            and manage their book of business.
          </p>
          <p id="style_tasks">
            b. Enhanced UI with filters, new queries, and export functionality for streamlined analysis and reporting.
          </p>
          <p id="style_tasks">
            c. Developed middle-layer logic to seamlessly retrieve and process Medicare enrollment data from MySQL database.
          </p>
          <p id="style_tasks">
          d. Implemented AWS Lambda functions to automate data updates and ensure database integrity.
          </p>
          <p id="style_tasks">
          e. Conducted thorough testing to ensure a seamless user experience and optimal performance.
          </p>
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
            Wellmark Blue Cross and Blue Shield, Part-time{" "}
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA </h6>
          <p id="style_tasks">
            a. Boosted engineer and developer productivity by approximately 7% through the implementation of automated scripts for code build processes.
          </p>
          <p id="style_tasks">
            b. Spearheaded the creation and execution of new DevOps pipelines, enabling non-cloud teams throughout the organization to deploy their code to higher environments seamlessly.
          </p>
          <p id="style_tasks">
            c. Collaborated closely with internal teams to address cloud infrastructure needs, including scaling existing resources and troubleshooting errors.
          </p>
          <p id="style_tasks">
            d. Streamlined time management and enhanced developer productivity by providing cloud-specific resource templates for efficient project execution.
          </p>
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
            Corteva Agriscience, Full-time{" "}
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Johnston, IA </h6>
          <p id="style_tasks">
            a. Enhanced existing agricultural applications by integrating forecasting maps for temperature, precipitation, and other crucial weather data, providing valuable insights to farmers for informed decision-making.
          </p>
          <p id="style_tasks">
            b. Simplified business intelligence processes by implementing ETL (Extract, Transform, Load) techniques to format and store raw weather data in a robust PostGreSQL database
          </p>
          <p id="style_tasks">
            c. Optimized developers' productivity by implementing scheduled batch jobs in the cloud, streamlining data population in the PostGreSQL database.
          </p>
          <p id="style_tasks">
            d. Integrated monitoring tools like Datadog and modernized tests in existing code to proactively detect failures in production software.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - May 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Teaching Assistant(
            <DiPython />
            <span id="style_and">&&</span>
            <FaJava />)
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Drake University, Part-time
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA </h6>
          <p id="style_tasks">
            a. Provided supplemental instructions to students, resulting in a significant improvement of at least 14% in their quiz and test results.
          </p>
          <p id="style_tasks">
            b. Facilitated brainstorming sessions with students, encouraging critical thinking and challenging their thought processes for upcoming assignments and projects.
          </p>
          <p id="style_tasks">
            c. Adapted teaching methodologies based on students' needs, resulting in enhanced problem-solving skills and receiving an outstanding approval rate of at least 90%.
          </p>
          <p id="style_tasks">
            d. Cultivated a collaborative environment that fostered growth and effective communication among students, transforming their experience from satisfactory to exceptional.
          </p>
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
          <h6 className="vertical-timeline-element-subtitle">Des Moines, IA </h6>
          <p id="style_tasks">
            a. Achieved exceptional satisfaction ratings of above 95% from faculties, students, and staff for the university's IT services.
          </p>
          <p id="style_tasks">
            b. Collaborated with senior IT technicians to troubleshoot and resolve complex hardware and software issues, documenting the process to enhance team productivity by 5% per semester.
          </p>
          <p id="style_tasks">
            c. Fostered a culture of trust and reliability among students and faculties, resulting in consistently high service reliability ratings of 90% and above.
          </p>
          <p id="style_tasks">
            d. Played a key role in training new student hires, ensuring their seamless integration into the team and facilitating effective communication.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
