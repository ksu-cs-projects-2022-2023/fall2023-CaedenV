import { Component } from "react";
import { GoogleLogin } from "react-google-login";
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const clientId = "497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com";
        const onFailure = (res) => {
            console.log("LOGIN FAILED! res: ", res);
          }
        
        return (
            <div id="signInButton">
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={this.props.handler}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            
        )
    }
}

export default Login;

