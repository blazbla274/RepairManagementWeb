import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Cars.module.css';
import homePath from '../../../configuration/configuration';
import Table from '../../Table/Table';

const Cars = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/customer/${props.userId}/items`)
      .then(response => {
        let items = [];
        let key = 0;
        console.log(response.data)
        Promise.all(response.data._embedded.item.map(el => {
          console.log(el)
          return axios.get(el._links.type.href)
            .then(respond => {
              return { name: el.name, type: respond.data.type, key: key++ }
            })
            .catch(error => {
              console.log(error);
              return { name: el.name, type: "unknown", key: key++ }
            })
        })).then(results => setCars(results))
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return (
    <div className={style.container}>
      {cars.length ?
        <Table
          objects={cars}
          lp
          headers={["Name", "Type"]}
          propsOrder={["name", "type"]}
          propsFlex={[1, 3, 3]}
          width={500} /> :
        <p className={style.noCars}>You have not cars added.</p>}
    </div>
  );
}

export default Cars;