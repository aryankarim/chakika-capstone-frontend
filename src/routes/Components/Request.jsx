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
    <div className="Contact-container">
      <h4 className="bottom30">Can't Find What You're Looking For?</h4>
      <h4 className="bottom30">Send Us Your Custom Order</h4>
      <form className="callus transparent">
        <div className="row">
          <div className="col-sm-6 form-group">
            <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleChange} />
          </div>
          <div className="col-sm-6 form-group">
            <input type="tel" className="form-control" name="phone" placeholder="Phone" onChange={handleChange} />
          </div>
          <div className="col-sm-6 form-group">
            <input type="text" className="form-control" name="subject" placeholder="Subject" onChange={handleChange} />
          </div>
          <br />
          <div className="col-sm-12 form-group">
            <textarea className="form-control" name="message" placeholder="Message" onChange={handleChange}></textarea>
          </div>
          <button className="btn btn_default top10 button_moema" onClick={sendToServer} > Submit</button>
        </div>
      </form>
    </div>

  )
}
