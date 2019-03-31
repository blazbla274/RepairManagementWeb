import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
      <div className="box">
          <input type="text" placeholder="Login"/>
          <input type="password" placeholder="Password" />
          <input type="submit" value="Submit" />
      </div>
    );
}

export default LoginForm;