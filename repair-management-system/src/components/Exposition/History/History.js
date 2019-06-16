import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css';
import homePath from '../../../configuration/configuration';

const History = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/customer/${props.userId}/items`)
      .then(response => {
        let items = [];
        let key = 0;
        Promise.all(response.data._embedded.item.map(el => {
          return axios.get(el._links.requests.href)
            .then(respond => {
              console.log(respond.data)
              return { key: key++, car: el.name,  }
            })
            .catch(error => {
              console.log(error);
              return {name: el.name, type: "unknown", key: key++}
            })
        })).then(results => setRequests(results))
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