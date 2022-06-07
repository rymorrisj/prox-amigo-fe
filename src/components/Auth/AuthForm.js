import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate, useLocation } from 'react-router-dom';
import { validate } from '../../helpers/validation-helpers';
import { register, login } from '../../models/AuthModels';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import AUTH_ROUTES from '../../api/auth';
import { extractFormData  } from '../../helpers/request-helpers';

const AuthForm = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth] = useAuth();
    const { axiosFetch } = useAxios();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = extractFormData(new FormData(event.currentTarget));

        const isDataValid = props.isSignin ? validate(login, data) : validate(register, data);
        if (isDataValid) {
          const requestRoute = props.isSignin ? AUTH_ROUTES.AUTH_SIGNIN : AUTH_ROUTES.AUTH_SIGNUP;
          return await axiosFetch({
            method: 'POST',
            url: requestRoute,
            requestConfig: { ...data }
          }).then(response => {
            const data = response?.data;
            if (data) {
              const { user, accessToken } = data;
              setAuth({ user, accessToken });

              // only use from if its not index or signup
              const navigateTo = from === '/' || from === '/signup' ? '/map' : from;
              navigate(navigateTo, { replace: true });
            }
          });
        }
    };

  return (
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            { props.header }
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            { props.children }
          </Box>
        </Box>
      </Container>
  );
}

export default AuthForm;