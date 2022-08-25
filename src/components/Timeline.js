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
          date="June 2022 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Backend Software Engineer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Wellmark Blue Cross and Blue Shield, Full-time{" "}
          </h5>
          <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
          <p id="style_tasks">
            a. Programming new features to existing external and internal facing
            applications containing enrollments, claims and insurer data as per
            the business goals.
          </p>
          <p id="style_tasks">
            b. Improving the user experience with decrement in data reload time
            and seemless transfer of claims and personal data.
          </p>
          <p id="style_tasks">
            c. Ensuring the safety of insurer data with rigorous testing and web
            security.
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
          <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
          <p id="style_tasks">
            a. Leveraged the time and productivity for engineers and developers
            by around 7 percent with automated scripts for code build processes.
          </p>
          <p id="style_tasks">
            b. Created and executed new DevOps pipelines for different teams
            across organization for deploying code in different environments.
          </p>
          <p id="style_tasks">
            c. Maximized the reliability to about 95 percent by helping multiple
            teams with cloud infrastructure and trouble shooting errors.
          </p>
          <p id="style_tasks">
            d. Fostered better time management and productivity for engineers by
            providing them with the templates for the cloud specific resources
            in Terraform.
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
          <h6 className="vertical-timeline-element-subtitle">Johnston,IA </h6>
          <p id="style_tasks">
            a. Reduced the complexity in business intelligence with well
            formatted weather data using ETL (Extract, Transform and Load)
            process.
          </p>
          <p id="style_tasks">
            b. Gained higher productivity by atleast 7 percent with scheduled
            batch jobs process in cloud for populating the database for our
            software.
          </p>
          <p id="style_tasks">
            c. Enhanced existing agriculatural application with forecasting maps
            to improve insights and decision making process for farmers.
          </p>
          <p id="style_tasks">
            d. Lowered bugs by around 25 percent with better coding practices
            and intense testing process.
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
          <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
          <p id="style_tasks">
            a. Boosted students knowledge with supplemental instructions to
            improve their results in the quizes and tests by atleast 14 percent.
          </p>
          <p id="style_tasks">
            b. Brainstormed ideas with students for their upcoming class
            assignments and projects and challenged their thought process.
          </p>
          <p id="style_tasks">
            c. Remodeled teaching style based on students' need to increase
            problem-solving skills with atleast 90 percent approval rate.
          </p>
          <p id="style_tasks">
            d. Forstered an environment of growth and communication among
            students resulting in feeling them from "ok" to "best" when it came
            to collaboration.
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
          <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
          <p id="style_tasks">
            a. Obtained University's IT services with above 95 percent
            satisfaction among faculties, students, and staff.
          </p>
          <p id="style_tasks">
            b. Collaborated with senior IT technicians for complex hardware and
            software problems and documented the process to boost teams
            productivity by 15% per semester.
          </p>
          <p id="style_tasks">
            c. Cultivated an environment of trust among students and faculties
            with 90 percent plus reliability for our services.
          </p>
          <p id="style_tasks">
            d. Trained new student hires to ensure familiarity with the work and
            better communication with the team.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
