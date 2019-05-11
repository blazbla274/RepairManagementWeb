import React from 'react';
import './ThemsBox.css';

const ThemsBox = (props) => {
    return (
      <div className="themsBox">
          <div onClick={() => props.changeThem("Blue")}>b</div>
          <div onClick={() => props.changeThem("Red")}>r</div>
          <div onClick={() => props.changeThem("Pink")}>p</div>
      </div>
    );
}

export default ThemsBox;