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
            a. Programming new features to new and existing external and
            internal facing applications processing enrollments, claims and
            insurer data as per the business goals.
          </p>
          <p id="style_tasks">
            b. Improving the user experience with decrement in data reload time
            and seemless transfer of claims and personal data.
          </p>
          <p id="style_tasks">
            c. Assisting multiple teams with their production issues and getting
            it fixed quickly to ensure consumer satisfaction.
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
            b. Created and executed new DevOps pipelines for non-cloud teams
            across organization for deploying their code in higher environments.
          </p>
          <p id="style_tasks">
            c. Collaborated with internal teams with their cloud infrastructure
            needs, scaling the existing ones and trouble shooting errors.
          </p>
          <p id="style_tasks">
            d. Fostered better time management and productivity for developers
            by providing them with the templates for the cloud specific
            resources.
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
            a. Enhanced existing agricultural applications with forecasting maps
            on temperature, precipitation and temperature to improve insights
            and decision-process for farmers.
          </p>
          <p id="style_tasks">
            b. Reduced the complexity in business intelligence by formating the
            raw weather data using ETL (Extract, Transform and Load) process and
            storing in PostGreSQL database.
          </p>
          <p id="style_tasks">
            c. Optimized developers' time and efficiency by at least 7 percent
            with scheduled batch jobs process in the cloud for populating our
            PostGreSQL database.
          </p>
          <p id="style_tasks">
            d. Integrated monitoring tools like Datadog and modernized tests in
            existing code to detect failures early on in production softwares.
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
            improve their results in the quizzes and tests by at least 14
            percent.
          </p>
          <p id="style_tasks">
            b. Brainstormed ideas with students for their upcoming class
            assignments and projects and challenged their thought processes.
          </p>
          <p id="style_tasks">
            c. Remodeled teaching style based on students' need to increase
            problem-solving skills with at least 90 percent approval rate.
          </p>
          <p id="style_tasks">
            d. Fostered an environment of growth and communication among
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
            a. Obtained above 95 percent satisfaction for University's IT
            services among faculties, students, and staff.
          </p>
          <p id="style_tasks">
            b. Collaborated with senior IT technicians for complex hardware and
            software problems and documented the process to boost teams
            productivity by 5% per semester.
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
