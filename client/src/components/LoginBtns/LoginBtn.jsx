import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios"

const LoginButton = ({ userId }) => {
  const onSignIn = async (googleUser) => {
    const name = googleUser.getBasicProfile().getName();
    const email = googleUser.getBasicProfile().getEmail();

    userId = await createUser(name, email);

  };

  const createUser = async (name, email) => {
    const response = await axios.post('http://localhost:8000/users/create', {
      name,
      email,
    });

    return response.data;
  };

  return (
    <GoogleOAuthProvider clientId="AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg">
      <GoogleLogin
        buttonText="Sign in"
        onSuccess={onSignIn}
        onFailure={console.log("error")}
      />
    </GoogleOAuthProvider>

  );
};

export default LoginButton;