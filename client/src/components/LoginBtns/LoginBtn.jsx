import React, { useContext, useState } from 'react';
import { UserContext } from './context';
import { GoogleLogin } from "@react-oauth/google";
import { createUser } from "./server/routes/user.js";

const LoginButton = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUser } = useContext(UserContext);

  const onSignIn = async (googleUser) => {
    const name = googleUser.getBasicProfile().getName();
    const email = googleUser.getBasicProfile().getEmail();
    setIsLoggedIn(true);

    const userId = await createUser(name, email);
    setUserId(userId);
    setUser(userId);
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