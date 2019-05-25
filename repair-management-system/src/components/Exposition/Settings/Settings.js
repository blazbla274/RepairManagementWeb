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
  const [newPassword, setNewPassword] = useState([]);

  useEffect(() => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        console.log(response)
        console.log(response.data)
        setfirstName("Stefan");
        setLastName("Nowak");
        setAdress("Saperów Śląskich 12f/45");
        setPhone("633844092");
        setLogin("Stefffek");
      });
  }, []);

  const handlerSaveChangePhone = (value) => {
    /*zmiana w bazie danych */
  }

  const handlerSaveNewPassword = () => {

  }

  return (
    <div>
      <div className={style.setingsBox}>
        <div className={style.setingsCenter}>
          <Record title="First Name" value={firstName} />
          <Record title="Last Name" value={lastName} />
          <Record title="Login" value={login} />
          <Record 
            title="Password" 
            value={newPassword} 
            onChangeHandler={setNewPassword} 
            onSave={handlerSaveNewPassword} />
          <Record title="Adress" value={adress} />
          <Record 
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