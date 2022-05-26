import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { validate } from '../../helpers/validation-helpers';
import { register, login } from '../../models/AuthModels';
import axios from '../../api/axios';
import useAxios from '../../hooks/useAxios';
import AUTH_ROUTES from '../../api/auth';
import { extractFormData  } from '../../helpers/request-helpers';

const AuthForm = (props) => {
    const [axiosFetch] = useAxios();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = extractFormData(new FormData(event.currentTarget));

        const isDataValid = props.isSignin ? validate(login, data) : validate(register, data);
        if (isDataValid) {
          const requestRoute = props.isSignin ? AUTH_ROUTES.AUTH_SIGNIN : AUTH_ROUTES.AUTH_SIGNUP;
          return await axiosFetch({
            axiosInstance: axios,
            method: 'POST',
            url: requestRoute,
            requestConfig: { ...data }
          }).then(response => {
            console.log(response.data);
          })
        }
    };

  return (
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            { props.header }
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            { props.children }
          </Box>
        </Box>
      </Container>
  );
}

export default AuthForm;