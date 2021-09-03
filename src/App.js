import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import  "./App.css";
import Header from "./components/Header"
import Particles from 'react-particles-js'; 
import Timeline from './components/Timeline'
import About from "./components/About"
import Projects from "./components/Projects"
import Research from "./components/Research"
import Contact from "./components/Contact"
import $ from 'jquery'

var width=$(document).width();
var num_nb;
if (width>768){
        num_nb = Math.round(Math.sqrt(width * 4));
    }else{
        num_nb = Math.round(Math.sqrt(width * 1));
    }
console.log(num_nb)

function App() {
  return (
    <>
    
    <Particles className="particles-canvas"
          params={{
              "particles": {
                  "number": {
                      "value": num_nb
                },
                "size": {
                    "value": 3
                  }
                },
               "interactivity": {
                    "events": {
                    "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
              }
            },
              shape:{
                    type:'star'
            },
      }} 
    />
    <Navbar/>
    <Header/>
    <About/>
    <Timeline/>
    <Projects/>
    <Research/>
    <Contact/>
    
      </>
  );
}

export default App;
