import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cars.module.css';
import homePath from '../../../configuration/configuration';

const Cars = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/customer/${props.userId}/items`)
      .then(response => {
        let items = [];
        let key = 0;
        Promise.all(response.data._embedded.item.map(el => {
          return axios.get(el._links.itemType.href)
            .then(respond => {
              return { name: el.name, type: respond.data.type, key: key++ }
            })
            .catch(error => {
              console.log(error);
              return {name: el.name, type: "unknown", key: key++}
            })
        })).then(results => setCars(results))
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return (
    <div>
      {cars.map(el => <p key={el.key}>{el.name}:    :{el.type}</p>)}
    </div>
  );
}

export default Cars;