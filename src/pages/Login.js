import Background from "../components/Background";
import ButtonComponent from "../components/Button";
import PWTextFieldComponent from "../components/PWTextField";
import UNTextFieldComponent from "../components/UNTextField";

function Login() {
    return (
        <div style={{ textAlign: "center" }}>
            <Background />
            <h1>Log In</h1>
            <UNTextFieldComponent />
            <br></br>
            <PWTextFieldComponent />
            <br></br>
            <ButtonComponent color='purple' text='Log in' />
            <br></br>
            <br></br>
            <h1>Dont have an account?</h1>
            <br></br>
            <ButtonComponent color='purple' text='Sign up' />

        </div>

    );
}

export default Login;