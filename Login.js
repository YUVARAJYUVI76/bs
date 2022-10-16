import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PersonIcon from '@mui/icons-material/Person';
import img from '../locker/homepage.jpg';
import '../styles/Login.css';

function Login() {
    const paperStyle={padding :20,height:'70vh',width:380,margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle={margin:'8px 0'}
  return (
    <div  style={{backgroundImage:`url(${img})`}}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                <h2><i>swapout collections</i></h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' style={btnStyle} fullWidth required/>
            <TextField label='Password' type='password' placeholder='Enter password' fullWidth required/>
        <FormControlLabel
        control={
        <Checkbox name="checkeddB" color='primary' />} 
        label="Remember me" />
        <Button type='submit' color='secondary' variant='contained' style={btnStyle} fullWidth>Log in</Button>
        <Typography>
            <Link href='#' >
                Forget password?
            </Link>
        </Typography>
        <Typography> Do you have an account ? 
            <Link href='#' >
                Login
            </Link>
        </Typography>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login