import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Open.module.css';
import homePath from '../../../configuration/configuration';
import Table from '../../Table/Table';

const Open = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/request?status=opn&item.owner.id=${props.userId}`)
      .then(response => {
            if (response.data._embedded.request.length)
              Promise.all(response.data._embedded.request.map((el, id) => {
                return axios.get(el._links.item.href)
                  .then(response => {
                    return axios.get(el._links.manager.href)
                      .then(respond => {
                        return {
                          key: id,
                          start: el.registerDate.split("T")[0],
                          description: el.description,
                          car: response.data.name,
                          manager: respond.data.firstName
                        }
                      })
                  })

              })).then(result => setRequests(result));
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return (
    <div className={style.tableContainer}>
      {requests.length ?
        <Table
          objects={requests}
          lp
          headers={["Car", "Start", "Description", "Manager"]}
          propsOrder={["car", "start", "description", "manager"]}
          propsFlex={[1, 3, 2, 4, 3]}
          width={900} /> :
        <p className={style.noHistory}>You have not requests history.</p>}
    </div>
  );
}

export default Open;