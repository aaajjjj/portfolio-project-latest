import React from 'react'
import { Picture } from 'react-responsive-picture';
import Ab_pic from "../media/About.jpg"

export default function About () {
    return (
        <div className="row" id="about">
            <h2 className="about_header">About me</h2>
            <Picture className="column1" src={Ab_pic}/> 
            <div className="column2">Hello, 
            My name is Ajal RC. I am a senior in undergraduate studies  majoring in Computer Science and Mathematics with minor in Physics. 
            I am a self- taught developer who is constantly exploring and teaching myself the evergrowing fields of Computer Science. I have done projects in languages like Python, Java, Javascript, HTML and CSS, and their most used frameworks.Similarly,
            I have used infrastructures/platforms like Docker, Heroku, MongoDB, Datadog ,and AWS in some of my projects and internships. 
            My way of learning is "Learning by doing". If I need to teach myself a new technology or language, I work on a project that uses that it. It is a harder way
            way of learning, but that's what makes it more fun and memorable.
            I believe "Learning is the best investment that I could ever make in my life."</div>        
        </div>
 
 )
}
