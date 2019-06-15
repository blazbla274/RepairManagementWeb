import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Cars.module.css';
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
      <div className={style.container}>
        <div className={[style.record, style.header].join(" ")}>
          <span>Lp.</span>
          <p>Name</p>
          <p>Type</p>
        </div>
        {cars.map(el =>
          <div className={style.record} key={el.key}>
            <span>{el.key + 1}</span>
            <p>{el.name}</p>
            <p>{el.type}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cars;