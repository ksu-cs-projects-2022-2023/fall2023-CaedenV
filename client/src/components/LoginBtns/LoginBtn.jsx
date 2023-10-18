import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginButton = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
  
    const onLoginSuccess = (response) => {
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
    };
  
    return (
      <GoogleLogin
        clientId="497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com"
        onSuccess={onLoginSuccess}
        onFailure={console.error}
      />
    );
  };
  
  export default LoginButton;
        