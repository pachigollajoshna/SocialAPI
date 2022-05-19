import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Profile from './Profile';

import Posts from './Posts';

export default function Home() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit" href='login'>Login</Button>
          <Button color="inherit" href='signup'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Profile/>
    <h3>Recent Posts</h3>
    <Posts/><br/>
    <Posts/><br/>
    <Posts/>
    </>
  );
}