import React, { useState, useEffect } from 'react';
import style from './Settings.module.css';
import axios from 'axios';
import Record from './Record/Record';

const Settings = (props) => {

  const [firstName, setfirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [adress, setAdress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [login, setLogin] = useState([]);

  useEffect(() => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        console.log(response)
        console.log(response.data)
        //setfirstName(response.data);
      });
  }, []);

  return (
    <div>
      <div className={style.setingsBox}>
        <div className={style.setingsCenter}>
          <Record title="First Name" value={firstName} />
          <Record title="Last Name" value={firstName} />
          <Record title="Login" value={firstName} />
          <Record title="Password" value={firstName} />
          <Record title="Adress" value={firstName} />
          <Record title="Phone" value={firstName} />
        </div>
      </div>
    </div>
  );
}

export default Settings;