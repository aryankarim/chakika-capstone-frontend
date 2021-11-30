import React, { useState } from 'react'
import axios from 'axios'
import makeToast from "../../Toaster";

export default function Request() {

  const [requestState, setrequestState] = useState({ name: null, phone: null, subject: null, message: null })
  const [sent, setsent] = useState(true)
  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    if (value === "") {
      value = null;
    }
    setrequestState(prevRequestState => {
      return ({
        ...prevRequestState,
        [name]: value
      })
    });
    console.log(requestState);
  }

  const sendToServer = (e) => {

    e.preventDefault();
    const config = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("Chakika_token"),
      }
    };
    axios
      .post('https://blooming-citadel-16531.herokuapp.com/request/', requestState, config)
      .then(response => {
        if(response && response.data && response.data.message){
          makeToast("success", response.data.message)
        }
        setsent(prev => !prev)
      })
      .catch(error => {
        if(error && error.response && error.response.data && error.response.data.message){
          makeToast("error", error.response.data.message)
        }
        console.log("request not added", error)
      })
  }
  return (
    <div>
      <h2 className="contact-header">Can't Find What You're Looking For? <br />Send Us Your Custom Order</h2>
      <div className="Contact-container">
        <form className="contact-form">
          <div className="contact-row">
            <div className="contact-column contact-form-group">
              <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="Name" />
            </div>
            <div className="contact-column contact-form-group">
              <input type="tel" className="form-control" name="phone" onChange={handleChange} placeholder="Phone" />
            </div>
            <div className="contact-column contact-form-group">
              <input type="text" className="form-control" name="subject" onChange={handleChange} placeholder="Subject" />
            </div>
            <br />
            <div className="contact-form-group">
              <textarea className="form-control" name="message" onChange={handleChange} placeholder="Message"></textarea>
            </div>
            <br />
            {sent ? <button className="contact-btn" onClick={sendToServer}>Submit</button> : <p>request successfully submited!</p>}
          </div>
        </form>
      </div>
    </div>

  )
}
