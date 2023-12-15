import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import jwtDecode from 'jwt-decode';

const LoginButton = ({ updateUserId }) => {
  const onSignIn = async (credentials) => {
    var decoded = jwtDecode(credentials.credential);
    console.log(decoded);
    const name = decoded.given_name;
    const email = decoded.email;
    const pic = decoded.picture;
    console.log(name + ": " + email);

    var userId = await createUser(name, email, pic);
    updateUserId(userId);
  };

  const createUser = async (name, email) => {
    const response = await axios.post("http://localhost:8000/user/create", {
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