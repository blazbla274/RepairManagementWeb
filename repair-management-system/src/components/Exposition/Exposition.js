import React from 'react';
import './Exposition.css';
import Repairs from './Repairs/Repairs';
import History from './History/History';
import Settings  from './Settings/Settings';

const Exposition = (props) => {
  if(props.loged) {
    let option;
    switch(props.activeBookmark) {
        case "Repairs": option = <Repairs/>;
          break;
        case "History": option = <History/>;
          break;
        case "Settings": option = <Settings/> ;
          break;
        default: option = <Repairs/>
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