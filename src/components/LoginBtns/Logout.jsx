import { GoogleLogout } from "react-google-login"

const clientId = "497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com";

const onSuccess = () => {
  console.log("LOGOUT SUCCESS!");
}



function Logout() {
    return (
        <div id="signOutButton">
          <GoogleLogout
            clientId={clientId}
            buttonText={"Log Out"}
            onSuccess={onSuccess}
          />
        </div>
    )
}

export default Logout;