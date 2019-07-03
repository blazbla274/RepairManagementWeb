import  React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState([]);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  if(!props.loged)
    return (
      <div className="box box--only-facebook">
          <div className="header header--only-facebook">
            <h1 style={props.style.fontColor}>Welcome in CarRepair system</h1>
          </div>
          {
            //<input 
            //type="text" 
            //placeholder="Login" 
            //style={{...props.style.inputBackgroundColor, ...props.style.borderColor}}
            //onChange={handleLoginChange}/>
          //<input 
            //type="password" 
            //placeholder="Password" 
            //style={{...props.style.inputBackgroundColor, ...props.style.borderColor}}
            //onChange={handlePasswordChange}/>
          //<input 
            //type="submit" 
            //value="Submit" 
            //onClick={() => props.loginAction(login, password)}
            //style={{...props.style.backgroundColor, ...props.style.borderColor}}/>
          }
          <a className="--only-facebook" href="http://localhost:8080/oauth2/authorize/facebook?redirect_uri=http://localhost:3000">Log in using Facebook.</a>
      </div>
    );
  else
    return null
}

export default LoginForm;