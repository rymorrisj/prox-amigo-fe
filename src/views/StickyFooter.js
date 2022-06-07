import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function StickyFooter() {
  return (
    <Box 
        component='footer'
        sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            mt: 2, 
            textAlign: 'center',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800]
        }}
    >
        <Paper elevation={6}>
            <Typography variant='body2' color='text.secondary'>
                {'Copyright © '}
                <Link color='inherit' href='https://proxamigo.com/'>
                    ProxAmigo
                </Link>
                {' '}
                { new Date().getFullYear() }
            </Typography>
        </Paper>
    </Box>
  );
}