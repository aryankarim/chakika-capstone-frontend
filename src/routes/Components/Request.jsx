import React from 'react'

export default function Request() {
    return (
        <div className="Contact-container">
            <h4 className="bottom30">Can't Find What You're Looking For?</h4>
            <h4 className="bottom30">Send Us Your Custom Order</h4>
            <form className="callus transparent">
              <div className="row">
                <div className="col-sm-6 form-group">
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="col-sm-6 form-group">
                  <input type="email" className="form-control" placeholder="Email Address"/>
                </div>
                <div className="col-sm-6 form-group">
                  <input type="tel" className="form-control" placeholder="Phone"/>
                </div>
                <div className="col-sm-6 form-group">
                  <input type="text" className="form-control" placeholder="Subject"/>
                </div>
                <div className="col-sm-12 form-group">
                  <textarea className="form-control" placeholder="Message"></textarea>
                  <button className="btn btn_default top10 button_moema"> Submit</button>
                </div>
              </div>
            </form>
            </div>
       
    )
}
