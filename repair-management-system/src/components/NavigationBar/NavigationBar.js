import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
  if(props.loged)
    return (
      <nav>
        <div className="nav-container">
          <ul className="options">
            <li onClick={() => props.changeBookmarkAction("Repairs")}>Repairs</li>
            <li onClick={() => props.changeBookmarkAction("History")}>History</li>
            <li onClick={() => props.changeBookmarkAction("Settings")}>Settings</li>
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