import AuthForm from '../components/Auth/AuthForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const Signup = () => {
  return (
    <AuthForm header='Sign up'>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='off'
                autoFocus
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='off'
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id='password'
                label='Password'
                name='password'
                type='password'
                autoComplete='off'
            />
            </Grid>
            {/* <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox name='stayTuned' value='true' color='primary' />}
                    label='I want to stay tuned to ProxAmigo progress, features and more via email!'
                />
            </Grid> */}
        </Grid>
        <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
        >
            Sign Up
        </Button>
        <Grid container justifyContent='center'>
            <Grid item>
            <Link to='/signin'>
                Already have an account? Sign in
            </Link>
            </Grid>
        </Grid>
    </AuthForm>
  );
}

export default Signup;