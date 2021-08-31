import React from "react";

const Contact=()=>{

  return (
    <>

    <div className="form-container" id="contact">
      <h2 className="about_header">Contact me</h2>
      <form  className="contact-form" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form" /> 
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