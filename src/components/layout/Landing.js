import React from "react";
import LogoBianco from "../../img/logoBianco.png";
import PropTypes from "prop-types";

const Landing = props => {
  return (
    <div className='landing'>
      <div className='landing-inner'>
        <div className='container'>
          <a href='#'>
            <img src={LogoBianco} alt='logo' />
            <h1>Le Tanz Circuit</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
