import React, { useState } from 'react'
import axios from 'axios'

export default function Request() {

  const [requestState, setrequestState] = useState({ name: null, email: localStorage.getItem('chakika_email'), phone: null, subject: null, message: null })
  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

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
      .post('http://localhost:8000/request/', requestState, config)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
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
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="contact-column contact-form-group">
                  <input type="tel" className="form-control" placeholder="Phone"/>
                </div>
                <div className="contact-column contact-form-group">
                  <input type="text" className="form-control" placeholder="Subject"/>
                </div>
                <br />
                <div className="contact-form-group">
                  <textarea className="form-control" placeholder="Message"></textarea>
                </div>
                <br />
                <button className="contact-btn">Submit</button>
              </div>
            </form>
            </div>
            </div>
       
    )
}
