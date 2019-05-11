import React from 'react';
import './ThemsBox.css';

const ThemsBox = (props) => {
    return (
      <div className="themsBox">
          <div 
            onClick={() => props.changeThem("Blue")}
            className={"darkBlue"}></div>
          <div 
            onClick={() => props.changeThem("Red")}
            className={"darkRed"}></div>
          <div 
            onClick={() => props.changeThem("Pink")}
            className={"darkPink"}></div>
      </div>
    );
}

export default ThemsBox;