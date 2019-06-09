import React from 'react';
import './Exposition.css';
import Cars from './Cars/Cars';
import History from './History/History';
import Settings  from './Settings/Settings';

const Exposition = (props) => {
  if(props.loged) {
    let option;
    switch(props.activeBookmark) {
        case "Repairs": option = <Cars/>;
          break;
        case "History": option = <History/>;
          break;
        case "Settings": option = <Settings style={props.style} userId={props.userId}/> ;
          break;
        default: option = <Cars/>
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