import React from 'react';

function Howwework() {
  return (
    <div className="home-how-it-works">
      <div className="container">
          <h2>How Chakika Works</h2>
          <div className="home-flex">
              <div>
                  <span className="fas fa-car-crash"></span>
                  <h4>Provide Car Services</h4>
                  <p>We provide any car related services</p>
              </div>

              <div>
                  <span className="fas fa-wrench"></span>
                  <h4>Fix Any Car Related Problems</h4>
                  <p>We fix any car related problems, repair and replace car parts</p>
              </div>

              <div>
                  <span className="fas fa-shopping-cart"></span>
                  <h4>Provide Car Parts</h4>
                  <p>Chakika is also an e-commerce website to buy car parts of your own wish</p>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Howwework;
