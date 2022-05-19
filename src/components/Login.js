import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Login extends Component {
  render() {
    return (
      <>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
    <div>
      <TextField id="outlined-basic" label="Enter EmailID" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" /><br/><br/>
      <Button variant="contained" href="#">Submit</Button>
      <p>New User! Create account.</p><Button variant="contained" href="signup">Register</Button>
    </div>

    </Box>
        
      </>
    )
  }
}

export default Login;