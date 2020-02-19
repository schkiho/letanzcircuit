import React from 'react';
import LogoBianco from '../../img/logoBianco.png';

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

export default Landing;
