import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Profile from './Profile';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Posts from './Posts';

export default function Home() {
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs aria-label="nav tabs example">
      <Button color="inherit" href=''>Home</Button>
      <Button color="inherit" href='login'>Login</Button>
          <Button color="inherit" href='signup'>Sign Up</Button>
      </Tabs>
    </Box>
          
    <Profile/>
    <h3>Recent Posts</h3>
    <Posts/><br/>
    <Posts/><br/>
    <Posts/>
    </>
  );
}