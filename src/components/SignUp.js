import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUp() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Enter EmailID" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" /><br/><br/>
      <Button variant="contained" href="#">Submit</Button>
    </div>
    </Box>
  );
}
