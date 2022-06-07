import AuthForm from '../components/Auth/AuthForm';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Signin = () => {
  return (
    <AuthForm isSignin={true} header='Sign in'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new-password'
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
              control={ <Checkbox name='remember' value='true' color='primary' /> }
              label='Remember me'
          />
        </Grid> */}
      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          {/* <Link href='#'>
            Forgot password?
          </Link> */}
        </Grid>
        <Grid item>
          <Link to='/signup'>
            {'Don\'t have an account? Sign Up'}
          </Link>
        </Grid>
      </Grid>
    </AuthForm>
  );
}

export default Signin;