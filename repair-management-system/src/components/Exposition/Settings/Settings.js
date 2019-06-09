import React, { useState, useEffect } from 'react';
import style from './Settings.module.css';
import axios from 'axios';
import Record from './Record/Record';
import homePath from '../../../configuration/configuration';

const Settings = (props) => {

  const [firstName, setfirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [adress, setAdress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [login, setLogin] = useState([]);
  const [newPassword, setNewPassword] = useState([]);

  useEffect(() => {
    axios.get(`${homePath}/api/customer/${props.userId}`)
      .then(response => {
        let addres;
        axios.get(`${homePath}/api/customer/${props.userId}/address`)
          .then(response => {
            addres = `${response.city} ${response.postCode} ${response.street} ${response.number}`;
          });
        setfirstName(response.firstName);
        setLastName(response.lastName);
        setAdress(addres);
        setPhone(response.phoneNumber);
        setLogin("unknown");
        setNewPassword("unknown");
      })
      .catch(function (error) {
        setfirstName("unknown");
        setLastName("unknown");
        setAdress("unknown");
        setPhone("unknown");
        setLogin("unknown");
        setNewPassword("unknown");
        alert(error);
      });
  }, []);

  const handlerSaveChangePhone = (value) => {
    /*zmiana w bazie danych */
  }

  const handlerSaveNewPassword = (value) => {
    console.log("długość: " + value);

  }

  return (
    <div>
      <div className={style.setingsBox}>
        <div className={style.setingsCenter}>
          <Record title="First Name" value={firstName} />
          <Record title="Last Name" value={lastName} />
          <Record title="Login" value={login} />
          <Record
            style={props.style}
            title="Password" 
            value={newPassword}
            onChangeHandler={setNewPassword} 
            onSave={handlerSaveNewPassword} />
          <Record title="Adress" value={adress} />
          <Record
            style={props.style}
            title="Phone"
            value={phone} 
            onChangeHandler={setPhone} 
            onSave={handlerSaveChangePhone}
            max="6"/>
        </div>
      </div>
    </div>
  );
}

export default Settings;