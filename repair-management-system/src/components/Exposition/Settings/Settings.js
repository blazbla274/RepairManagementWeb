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
  const [dataBasePhone, setDataBasePhone] = useState([]);
  const [login, setLogin] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  const [phoneError, setPhoneError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  useEffect(() => {
    console.log("settoings: "+ props.userId)
    axios.get(`${homePath}/api/customer/${props.userId}`)
      .then(async (response) => {
        let addres = "";
        const addressRespond = await axios.get(response.data._links.address.href)
        addres = `${addressRespond.data.city} ${addressRespond.data.postCode} ${addressRespond.data.street} ${addressRespond.data.number}`;

        setfirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setAdress(addres);
        setPhone(response.data.phoneNumber);
        setDataBasePhone(response.data.phoneNumber);
        setLogin("unknown");
        setNewPassword("");
      })
      .catch(function (error) {
        setfirstName("unknown");
        setLastName("unknown");
        setAdress("unknown");
        setPhone("unknown");
        setLogin("unknown");
        setNewPassword("");
        alert(error);
      });
  }, []);

  const handlerSaveChangePhone = async (value) => {
    /*zmiana w bazie danych */
    try {
      const respond = await axios.put(`${homePath}/api/customer/${props.userId}`, {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: value
      });
      setDataBasePhone(value);
    } catch (error) {
      console.log(error);
      setPhoneError("Database error.");
    }
  }

  const handlerSaveNewPassword = (value) => {
    console.log("handlerSaveNewPassword");
  }

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password can't be empty.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  }

  const validatePhone = (value) => {
    if (value.length != 9) {
      setPhoneError("Wrong length.");
      return false;
    } else if (value.split("").some(el => isNaN(el))) {
      setPhoneError("Only numbers.");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
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
            errorMessage={passwordError}
            onChangeHandler={setNewPassword}
            onSave={handlerSaveNewPassword} 
            databaseValue=""
            validate={validatePassword}/>
          <Record title="Adress" value={adress} />
          <Record
            style={props.style}
            title="Phone"
            value={phone}
            errorMessage={phoneError}
            onChangeHandler={setPhone}
            onSave={handlerSaveChangePhone}
            validate={validatePhone}
            databaseValue={dataBasePhone}
            max="6" />
        </div>
      </div>
    </div>
  );
}

export default Settings;