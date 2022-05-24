import Background from "../components/Background";
import ButtonComponent from "../components/Button";
import PWTextFieldComponent from "../components/PWTextField";
import UNTextFieldComponent from "../components/UNTextField";

function Signup() {
    return (
        <div style={{ textAlign: "center" }}>
            <Background />
            <h1>Sign up</h1>
            <UNTextFieldComponent />
            <br></br>
            <PWTextFieldComponent />
            <br></br>
            <ButtonComponent color='purple' text='Sign up' />
            <br></br>
            <br></br>
            <h1>Already have an account?</h1>
            <br></br>
            <ButtonComponent color='purple' text='Log in' />

        </div>

    );
}

export default Signup;
