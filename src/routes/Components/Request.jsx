import React from 'react'

export default function Request() {
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
