import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
  if(props.loged)
    return (
      <nav>
        <div className="nav-container" style={props.style.backgroundColor}>
          <ul className="options">
            {props.bookmarks.map(el => (
              <li onClick={() => props.changeBookmarkAction(el)}>{el}</li>
            ))}
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