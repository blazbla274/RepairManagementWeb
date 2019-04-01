import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
  if(props.loged)
    return (
      <nav>
        <div className="nav-container">
          <ul className="options">
            <li>Repairs</li>
            <li>History</li>
            <li>Settings</li>
          </ul>
          <ul className="logout">
            <li onClick={props.logoutAction}>Logout</li>
          </ul>
        </div>
      </nav>
    );
  else 
    return null;
}

export default NavigationBar;