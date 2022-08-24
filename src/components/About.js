import React from 'react'
import { Picture } from 'react-responsive-picture';
import Ab_pic from "../media/About.jpg"

export default function About () {
    return (
        <div className="row" id="about">
            <h2 className="about_header">About me</h2>
            <Picture className="column1" src={Ab_pic}/> 
            <div className="column2">
            Finding my passion, challenging myself, getting out of my comfort zone and more 
            importantly creating my "AMERICAN DREAM" motivated to leave my home country, Nepal. 
            My name is Ajal RC and I am a recent graduate from Drake University with Computer 
            Science and Mathematics as majors and a minor in Physics. Surprisingly, I started as a mechanical 
            enginnering student, but found my passion in coding and development. Python was my first
            programming language that I taught myself which was life changing event for me. 
            As I started exploring and learning the ever-growing fields of computer science, including
            cloud, data management, machine learning  and many more, I found myself as a developer 
            than mechanical engineer. From that day onwards, I have promised myself to dedicate my career to create high end 
            software solutions that would add value for my clients, and businesses. 
            I had completed projects in languages like Python, Java, Javascript, Typescript 
            and their popular frameworks like Node.js, React, Express and Django. Similarly, I have 
            used platforms like Docker, Azure DevOps, Heroku, MongoDB, Datadog, and AWS in my projects
            and internships.
            My focus right now is be an excellent developer with huge exposure to cloud. My way of learning is 
            "Learning by doing". If I need to learn a new technology or language, I work on a project 
            that uses it. It is a harder way of learning, but that's what makes it more fun and
            memorable. I believe Learning is the best investment that I could ever make in my life.
            </div>        
        </div>
 
 )
}
