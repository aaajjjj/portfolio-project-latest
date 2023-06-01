import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import  "./App.css";
import Header from "./components/Header"
import { Particles } from 'react-tsparticles';
import Timeline from './components/Timeline'
import About from "./components/About"
import Projects from "./components/Projects"
import Research from "./components/Research"
import Contact from "./components/Contact"
import $ from 'jquery'
import { useCallback } from "react";

import React from "react";
import { useState, useEffect } from 'react';

import { loadFull } from "tsparticles"

var width=window.innerWidth;
console.log(`Inner Width is ${width}`)
console.log(`Document Width is ${$(document).width()}`)
var num_nb;
if (width>768){
        num_nb = Math.round(Math.sqrt(width * 4));
    }else{
        num_nb = Math.round(Math.sqrt(width * 1));
    }

function App(){
  const [numParticles, setNumParticles] = useState(50);
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
    return (
    < >
        
    <Particles 
    id="tsparticles"
    init={particlesInit} loaded={particlesLoaded}
    className="particles-canvas"
          options={{
            fpsLimit: 60,
            interactivity: {
                events: {
                    
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                
            },
            particles: {
                
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    value: num_nb,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
    <Navbar/>
    <Header/>
    <About/>
    <Timeline/>
    <Projects/>
    <Research/>
    <Contact/>
    </>)

    

}

export default App;
