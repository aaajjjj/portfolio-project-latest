import React from "react";
import axios from 'axios'
import { useState } from "react";

const Contact=()=>{
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [result,setResult] = useState(null);

  const handlesubmit = (e) => {
  e.preventDefault();
  axios
  .post('/send',{ ...state })
  .then(response =>{
    setResult(response.data);
    //console.log(`The data sent to backend is  ${response.data}`)
    setState({
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    })
    //console.log("I did  run.")
  })
  .catch(()=>{
    setResult({
      success:false,
      message:'Something went wrong. Please Try again later.'
      })
    })
  }
   const OnInputChange = event =>{
    const {name,value}=event.target;

    setState({
      ...state,
      [name]: value
    });
  };
    
  return (
    <>
    <div className="form-container" id="contact">
      <h2 className="about_header">Contact me</h2>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
        {result.message}
        </p>
        )}
      <form onSubmit={handlesubmit} className="contact-form"> 
        <div className="row">
            <div className="col-25">
              <label>First Name</label>
            </div>
            <div className="col-75">
                <input id="first_name" name="first_name" value={state.first_name} onChange={OnInputChange} type="text" placeholder=" Your first name"/><br/>
            </div>
        </div>
       
       <div className="row">
            <div className="col-25">
              <label>Last Name</label>
            </div>
              <div className="col-75">
                 <input id="last_name" name="last_name" value={state.last_name} onChange={OnInputChange} type="text" placeholder="Your last name" /><br/>
            </div>
        </div>

        <div className="row">
            <div className="col-25">
              <label>Email address</label>
            </div>
              <div className="col-75">
                  <input id="email" name="email" value={state.email} onChange={OnInputChange} type="email" placeholder="Your email address" /><br/>
            </div>
        </div>

        <div className="row">
            <div className="col-25">
              <label>Subject</label>
              </div>
              <div className="col-75">
                  <input id="subject" name="subject" value={state.subject} onChange={OnInputChange} type="text" placeholder="Subject" /><br/>
            </div>
        </div>
        
        <div className="row">
            <div className="col-25">
              <label>Text Area</label>
            </div>
              <div className="col-75">
                  <textarea id="message" name="message" value={state.message} onChange={OnInputChange} type="text" placeholder="Message" /><br/>
            </div>
        </div>

        <div className="row">
          <input type="submit" value="Submit"/>        
        </div>
      </form>
    </div>
    </>
  );
};
export default Contact;