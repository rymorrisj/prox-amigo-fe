import TextField from '@mui/material/TextField';


const PWTextFieldComponent = ({ }) => {
    return (<TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
    ></TextField>

    )
}
export default PWTextFieldComponent