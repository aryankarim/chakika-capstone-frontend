import React from 'react'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <h2>Chakika</h2>
                        <ul className="list-unstyled">
                            <li>We are here to</li>
                            <li>make your lives easier</li>
                        </ul>
                    </div>

                    <div className="col">
                    <h2>Contacts</h2>
                        <ul className="list-unstyled">
                        <li>Sulaimaniyah</li>
                            <li>555-0505</li>
                        </ul>
                    </div>

                    <div className="col">
                    <h2>Feedback</h2>
                        <ul className="list-unstyled">
                         <li>Make sure to send us your feedback, we will greet them with warm arms</li>
                        </ul>
                    </div>

                </div>
                
                <hr />

                <div className="frow">
                    <span className="col-u">
                        &copy;{new Date().getFullYear()} Chakika
                    </span>
                </div>
            </div>
        </div>
    )
}
