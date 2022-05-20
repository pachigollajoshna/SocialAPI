import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default class Profile extends React.Component{
  constructor(){
    super();
    this.state={enableEdit:false}
    this.enableEditComponent=this.enableEditComponent.bind(this);
    this.disableEditComponent=this.disableEditComponent.bind(this);
  }
  enableEditComponent(){
    console.log(this.state.enableEdit);
    this.setState({
      enableEdit:true
    })
  }
  disableEditComponent(){
    this.setState({
      enableEdit:false
    })
  }
  render(){
  if(this.state.enableEdit)
  return (
    <div>
      Name:<input type="text"/><br/><br/>
      Age:<input type="number"/><br/><br/>
      Interests:<input type="text"/><br/><br/>
      <Button onClick={this.disableEditComponent}>Done</Button>
    </div>
  )
  else
    return(
      <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Štefan Štefančík
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Name: Štefan Štefančík<br/>
           Email Id: stefan@gmail.com<br/>
           Age: 22<br/>
           Interests: Nature Images,Mountain Images , Pictures, Travel Images, Fashion.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={this.enableEditComponent}>
          Edit Profile
        </Button>
      </CardActions>
    </Card>
      </div>
    )
}
}