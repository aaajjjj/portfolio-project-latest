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
            <h3 className="vertical-timeline-element-title">Student Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">Wellmark Blue Cross and Blue Shield, Part-time </h5>
            <h6 className="vertical-timeline-element-subtitle">Des Moines,IA </h6>
            <p id="style_tasks">
            a. Work under the direction of experienced Engineers/Analysts to maintain and upgrade cloud and security solutions.
            </p>
            <p id="style_tasks">
            b. Learn to evaluate, test, and coordinate information security policies, procedures, and systems.
            </p>
            <p id="style_tasks">
            c. Provide ongoing support and maintenance of enterprise-wide infrastructure, applications and processes.
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
            a. Implementing AWS cloud resources, computing infrastructure and web technoglogies to develop and deploy RESTful services. 
            </p>
            <p id="style_tasks">
            b. Learn and utilizing best software engineering practices, Git,unit testing, CI/CD, and code reviews.
            </p>
            <p id="style_tasks">
             c. Working in a team on open source projects.
            </p>
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
            a. Provide supplemental instructions to students during the course.
            </p>
            <p id="style_tasks">
            b. Guide students through idea generation for class and lab assignment.
            </p>
            <p id="style_tasks">
            c. Adjust teaching style to the learning methods of each student.
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
            a. Troubleshoot technology issues with faculty, students, and staffs via phone or walk-ins.
            </p>
            <p id="style_tasks">
            b. Escalate issue to IT technicians as necessary.
            </p>
            <p id="style_tasks">
            c. Track escalated tickets to track progress and ensure completion.
            </p>
        </VerticalTimelineElement>

    </VerticalTimeline>
    </div>
    )
}