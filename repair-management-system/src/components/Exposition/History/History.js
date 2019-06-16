import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './History.module.css';
import homePath from '../../../configuration/configuration';
import Table from '../../Table/Table';

const History = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/request?status=can&item.owner.id=${props.userId}`)
      .then(response => {
        axios.get(`${homePath}/api/request?status=fin&item.owner.id=${props.userId}`)
          .then(response2 => {
            let responseRequest = [...response.data._embedded.request, ...response2.data._embedded.request];
            if (responseRequest.length)
              Promise.all(responseRequest.map((el, id) => {
                return axios.get(el._links.item.href)
                  .then(response => {
                    return axios.get(el._links.manager.href)
                      .then(respond => {
                        return {
                          key: id,
                          start: el.registerDate.split("T")[0],
                          end: el.endDate.split("T")[0],
                          description: el.description,
                          status: el.status === "CAN" ? "Canceled" : "Finished",
                          car: response.data.name,
                          manager: respond.data.firstName
                        }
                      })
                  })

              })).then(result => setRequests(result));
          })

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
          headers={["Car", "Start", "End", "Description", "Manager", "Status"]}
          propsOrder={["car", "start", "end", "description", "manager", "status"]}
          propsFlex={[1, 2, 2, 2, 4, 2.5, 2]}
          width={1200} /> :
        <p className={style.noHistory}>You have not requests history.</p>}
    </div>
  );
}

export default History;