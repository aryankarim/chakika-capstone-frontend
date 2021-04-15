import React from 'react';
import aboutimage from '../images/hero.png'

function About() {
  return (
    <div className="home-about">
      <div className="home-about-model">
        <img src={aboutimage} alt="" />
      </div>
      <div className="home-about-text">
        <h2>What is Chakika?</h2>
        <p>Chakika will be a web application for the local community in Kurdistan and possibly in Iraq in the long term. Chakika will most likely be the first online service working on remote cars by sending dedicated technicians or mechanics. This will help in avoiding the frustration of going into the market of industrial zones in the Kurdish cities.  Chakika users will be able to choose the product of their choice, and Chakika will help provide the chosen product with the best quality and most affordable price in the market, and users have the option to only get the item that they bought or acquire the chakika staff to take care of the service of applying the chosen product to the user’s car.</p>

      </div>
    </div>
  );
}

export default About;
