import React, { useState } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { createUser } from "./server/routes/user.js";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const onSignIn = async (googleUser) => {
    const name = googleUser.getBasicProfile().getName();
    const email = googleUser.getBasicProfile().getEmail();
    setIsLoggedIn(true);

    await createUser(name, email);
  };
  
    return (
      <GoogleLogin
        clientId="497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={onSignIn}
        onFailure={console.log(error)}
      />
    );
  };
  
  export default LoginButton;