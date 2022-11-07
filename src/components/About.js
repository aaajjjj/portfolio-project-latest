import React from "react";
import { Picture } from "react-responsive-picture";
import Ab_pic from "../media/About.jpg";

export default function About() {
  return (
    <div className="row" id="about">
      <h2 className="about_header">About me</h2>
      <Picture className="column1" src={Ab_pic} />
      <div className="column2">
        Finding my passion, challenging myself, getting out of my comfort zone,
        and more importantly creating my "AMERICAN DREAM" motivated me to leave
        my home country, Nepal. My name is Ajal RC and I am a recent graduate
        from Drake University with Computer Science and Mathematics majors and a
        minor in Physics. Surprisingly, I started as a mechanical engineering
        student but found my passion in coding and development. Python was the
        first programming language that I taught myself which was a
        life-changing event for me. As I started exploring and learning the
        ever-growing fields of computer science, including cloud, data
        management, machine learning, and many more, I found myself as a
        developer than a mechanical engineer. From that day onwards, I have
        promised myself to dedicate my career to creating high-end software
        solutions that would add value to my team, and company. I had completed
        projects in languages like Python, Java, Javascript, and Typescript and
        their popular frameworks like Node.js, React, Express and Django.
        Similarly, I have used platforms like Docker, Azure DevOps, Heroku,
        MongoDB, Datadog, and AWS in my projects and internships. My focus right
        now is to be an excellent developer with huge exposure to the cloud. My
        way of learning is "Learning by doing". If I need to learn a new
        technology or language, I work on a project that uses it. It is a harder
        way of learning, but that's what makes it more fun and memorable. I
        believe Learning is the best investment that I could ever make in my
        life.{" "}
      </div>
    </div>
  );
}
