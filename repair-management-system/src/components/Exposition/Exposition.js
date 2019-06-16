import React from 'react';
import './Exposition.css';
import Cars from './Cars/Cars';
import History from './History/History';
import Settings from './Settings/Settings';
import Open from './Open/Open';

const Exposition = (props) => {
  if (props.loged) {
    let option;
    switch (props.activeBookmark) {
      case "Open": option = <Open style={props.style} userId={props.userId} />;
        break;
      case "History": option = <History userId={props.userId}/>;
        break;
      case "Settings": option = <Settings style={props.style} userId={props.userId} />;
        break;
      default: option = <Cars userId={props.userId}/>
        break;
    }

    return (
      <div className="exposition-container">
        {option}
      </div>
    )
  }
  else
    return null
}

export default Exposition;