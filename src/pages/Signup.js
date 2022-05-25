import AuthForm from "../components/Auth/AuthForm";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

const Signup = () => {
  return (
    <AuthForm header='Sign up'>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
            />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to stay tuned to ProxAmigo progress, features and more via email!"
            />
            </Grid>
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Sign Up
        </Button>
        <Grid container justifyContent="center">
            <Grid item>
            <Link to="/signin">
                Already have an account? Sign in
            </Link>
            </Grid>
        </Grid>
    </AuthForm>
  );
}

export default Signup;