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

    
  return (
    <>
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="first_name" />
      <input type="text" name="last_name" />
      <input type="email" name="email" />
      <input type="text" name="subject" />
      <textarea name="message"></textarea>
    </form>

    <div className="form-container" id="contact">
      <h2 className="about_header">Contact me</h2>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
        {result.message}
        </p>
        )}
      <form  className="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" /> 
        <div className="row">
            <div className="col-25">
              <label>First Name</label>
            </div>
            <div className="col-75">
                <input id="first_name" name="first_name"  type="text" placeholder=" Your first name"/><br/>
            </div>
        </div>
       
       <div className="row">
            <div className="col-25">
              <label>Last Name</label>
            </div>
              <div className="col-75">
                 <input id="last_name" name="last_name"  type="text" placeholder="Your last name" /><br/>
            </div>
        </div>

        <div className="row">
            <div className="col-25">
              <label>Email address</label>
            </div>
              <div className="col-75">
                  <input id="email" name="email"   type="email" placeholder="Your email address" /><br/>
            </div>
        </div>

        <div className="row">
            <div className="col-25">
              <label>Subject</label>
              </div>
              <div className="col-75">
                  <input id="subject" name="subject"  type="text" placeholder="Subject" /><br/>
            </div>
        </div>
        
        <div className="row">
            <div className="col-25">
              <label>Text Area</label>
            </div>
              <div className="col-75">
                  <textarea id="message" name="message"  type="text" placeholder="Message" /><br/>
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