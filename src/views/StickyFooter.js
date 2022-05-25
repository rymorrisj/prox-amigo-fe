import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

export default function StickyFooter() {
  return (
    <Paper sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        mt: 2, 
        textAlign: 'center',
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800], 
    }} elevation={3}>
        <Typography variant='body2' color='text.secondary'>
            {'Copyright © '}
            <Link color='inherit' href='https://proxamigo.com/'>
                ProxAmigo
            </Link>
            {' '}
            { new Date().getFullYear() }
        </Typography>
    </Paper>
  );
}