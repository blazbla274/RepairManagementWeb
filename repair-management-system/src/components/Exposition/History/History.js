import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css';
import homePath from '../../../configuration/configuration';

const History = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/request?status=can&item.owner.id=${props.userId}`)
      .then(response => {  
        setRequests(response.data._embedded.request)
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return(
    <div>
      History
    </div>
  );
}

export default History;