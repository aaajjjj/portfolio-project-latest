import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode, FaJava} from 'react-icons/fa';
import { DiPython } from 'react-icons/di';
import {GiAutoRepair} from 'react-icons/gi';

export default function Timeline(){
    return(
        <div id="job">
        <h2 className="timeline_header">Past and recent work experiences</h2>
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Aug 2021 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaCode/>}
        >
            <h3 className="vertical-timeline-element-title">Cloud Operations Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">Wellmark Blue Cross and Blue Shield, Part-time </h5>
            <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
            <p id="style_tasks">
            a. Write cloud scripts to analyze and automate the build processes for engineers and developers
            </p>
            <p id="style_tasks">
            b. Create and run DevOps pipelines for deployent of cloud resources and source code.
            </p>
            <p id="style_tasks">
            c. Work under the direction of experienced Engineers/Analysts to maintain and upgrade cloud clusters/VMs including installation 
            of necesary programs and applications.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Aug 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaCode/>}
        >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">Corteva Agriscience, Full-time </h5>
            <h6 className="vertical-timeline-element-subtitle">Johnston,IA </h6>
            <p id="style_tasks">
            a. Implemented request-response lifecycle framework and RESTful APIs to obtain and analyze weather data. </p>
            <p id="style_tasks">
            b. Integrated ETL (Extract, Transform and Load) tool to create well-formatted data for business intelligence.</p>
            <p id="style_tasks">
            c. Built AWS cloud resources to run batch jobs using lambda functions for populating the PostgreSQL database.</p>
            <p id="style_tasks">
            d. Programmed forecasting maps to existing application using Mapbox and Redux to provide insights to farmers.</p>
            <p id="style_tasks">
            e. Modified existing codes to include best software engineering practices and quick delivery through CI/CD pipeline.</p>
        </VerticalTimelineElement>
        

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2020-May 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaCode/>}
        >
            <h3 className="vertical-timeline-element-title">Teaching Assistant(<DiPython/><span id="style_and">&&</span><FaJava/>)</h3>
            <h5 className="vertical-timeline-element-subtitle">Drake University, Part-time</h5>
            <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
            <p id="style_tasks">
            a. Supplied supplemental instructions to students during the course including project ideas and additional content.
            </p>
            <p id="style_tasks">
            b. Guided students through idea generation for class and lab assignments.
            </p>
            <p id="style_tasks">
            c. Adjusted teaching style to be flexible with the learning style of students to increase classroom productivity and problem-solving.
            </p>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2020-May 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiAutoRepair/>}
        >
            <h3 className="vertical-timeline-element-title">Student Tech Support</h3>
            <h5 className="vertical-timeline-element-subtitle">Drake University, Part-time</h5>
            <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
            <p id="style_tasks">
            a. Solved technological issues from hardware to software problems for faculties, students, and staff via phone or walk-ins.
            </p>
            <p id="style_tasks">
            b. Escalated issues to senior IT technicians as necessary and learned from them for future references.
            </p>
            <p id="style_tasks">
            c. Tracked escalated tickets to check the progress and ensured completion.
            </p>
        </VerticalTimelineElement>

    </VerticalTimeline>
    </div>
    )
}