import  React, { useEffect } from 'react';
import axios from 'axios';
import './Cars.module.css';
import homePath from '../../../configuration/configuration';

const Repairs = (props) => {

  let cars = [];
  useEffect(() => {
    /*axios.get(`${homePath}/api/customer/${props.userId}/items`)
      .then(response => {
        response.array.forEach(element => {
          axios.get(`${homePath}/api/item/${element.id}/itemType`)
          .then(res => {
            cars.push({
              name: element.name,
              type: res.type
            })
          });
        });
      })
      .catch(function (error) {

        alert(error);
      });*/
  }, []);
  return(
    <div>
      Cars
    </div>
  );
}

export default Repairs;