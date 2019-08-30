import  React, { useState } from 'react';
import './LoginForm.css';
import homePath from '../../configuration/configuration';

const LoginForm = (props) => {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState([]);
  const facebookOAuthUrl = `${homePath}/oauth2/authorize/facebook?redirect_uri=http://localhost:3000`
  const googleOAuthUrl = `${homePath}/oauth2/authorize/google?redirect_uri=http://localhost:3000`

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
          <a className="--only-facebook" href={facebookOAuthUrl}>Log in using Facebook.</a><p></p>
          <a className="--only-facebook" href={googleOAuthUrl}>Log in using Google.</a>
      </div>
    );
  else
    return null
}

export default LoginForm;