import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import jwtDecode from 'jwt-decode';

const LoginButton = ({ userId }) => {
  const onSignIn = async (credentials) => {
    /*const name = googleUser.getBasicProfile().getName();
    const email = googleUser.getBasicProfile().getEmail();*/

    var decoded = jwtDecode(credentials.credential);
    const name = decoded.given_name;
    const email = decoded.email;
    console.log(name + ": " + email);

    userId = await createUser(name, email);
  };

  const createUser = async (name, email) => {
    console.log("Inside createUser");
    const response = await axios.post('http://localhost:8000/user/create', {
      name,
      email,
    });

    return response.data.userId;
  };

  return (
    <GoogleOAuthProvider clientId="497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={credentialResponse => {onSignIn(credentialResponse)}}
        onError={() => console.log("Google Login Failure")}
      />
    </GoogleOAuthProvider>

  );
};

export default LoginButton;