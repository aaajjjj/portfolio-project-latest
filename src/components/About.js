import React from "react";
import { Picture } from "react-responsive-picture";
import Ab_pic from "../media/About.jpg";

export default function About() {
  return (
    <div className="row" id="about">
      <h2 className="about_header">About me</h2>
      <Picture className="column1" src={Ab_pic} />
      <div className="column2">
      Hi, I'm Ajal RC, a results-driven software engineer hailing from Nepal. With a background in mechanical engineering, I discovered my true passion for computer science and embarked on a transformative 
      journey of self-learning. Today, with 2 years of industry experience, I bring a unique blend of technical expertise and a relentless drive to excel in the field of software engineering. <br/> <br/>
      Throughout my college years, I pursued multiple independent studies inaddition to regular courses, delving into exciting areas such as machine learning, web development, and blockchain. I successfully applied 
      Python's web3 library to 
      create tokens, develop smart contracts, and test them on various blockchain testnets. Additionally, I leveraged MATLAB and Octave for machine learning projects, solving diverse challenges ranging
       from spam email detection to image size reduction. Exploring the fascinating realm of artificial intelligence, I integrated face detection models to identify masks in images and live streams. <br/> <br/>
       On the professional front, I've gained valuable experience through software engineering and cloud engineering internships. Currently, I am part of a prestigious rotational program, where I've 
        excelled as both a back-end developer and a software developer, developing a product idea into a flushed production level application within a timespan of 6 months each. Notably, during my time at Corteva Agriscience, 
        I developed weather forecasting maps that empowered farmers to make 
        informed decisions based on accurate temperature and precipitation forecasts. I also streamlined the ETL process, transforming raw weather data into a structured format for seamless integration
         with company applications. <br/> <br/>
         Proficient in TypeScript/JavaScript, React, Angular, Node.js, and Python frameworks like Django and Flask, I thrive in full-stack development. Cloud technologies,
          including AWS services, have become second nature to me. Furthermore, I have a strong foundation in database management and DevOps practices, ensuring robust and efficient software delivery.
Driven by the ever-evolving nature of software engineering, I approach challenges with meticulous attention to detail and a calculated problem-solving mindset. I am motivated to continuously learn, 
adapt, and contribute to the success of forward-thinking organizations. Let's connect and discuss how my passion for coding and diverse skill set can bring value to your team.{" "}
      </div>
    </div>
  );
}
