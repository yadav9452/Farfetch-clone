import React, { useState } from 'react';
import { Grid, Paper, OutlinedInput, TextField, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { fontSize } from '@mui/system';
import {useNavigate} from "react-router-dom"
import { Home } from '@material-ui/icons';


const Login = ({ handleChange }) => {
// Styles
  const paperStyle = { padding: 20, height: '45vh', width: 300, margin: "0 auto" };
  const btnstyle = { margin: '8px 0', backgroundColor: 'black', color:'white'};
  const forgetPass = { color : "black", fontSize:"14px"}
//States
  const navigate = useNavigate();
  const [ formData, setForm ] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;

    setForm({
      ...formData,
      [ id ]: value,
    });
  };

  const handleSubmit =async (e) => {
    if (formData.email === "" || formData.password === "") {
      return;
    }
    e.preventDefault();
    // console.log(formData);
    
      let loginData = JSON.stringify(formData);
      console.log(loginData);
    const result = await fetch('https://farfetch-backend.herokuapp.com/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginData
    })
    const data = await result.json()
    console.log(data)


    if(data.status === "ok"){
      return navigate("/mens")

    }
    // if (result.status === "ok") {
    //   alert("success");
    //   // window.location.href = "signin.html";
    // } else {
    //   //    alert(result.error())
    //   alert(result.error);
    // }
  }
   
  

  return (
    <Grid>
      <Paper style={ paperStyle }>
        <form>
        <TextField label='Email address' placeholder='Enter email' fullWidth required onChange={ handleInput } id='email'/>
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={ handleInput } id='password'/>
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
            label="Keep me signed in. What is this?"
        />
        <Typography >
          <Link style={ forgetPass } href="#" >
            Forgot password ?
          </Link>
        </Typography>
        <Button type='submit' onClick={ handleSubmit }  variant="contained" style={ btnstyle } fullWidth>Sign in</Button>
        </form>
        <Typography > Do you have an account ?
          <Link href="#" onClick={ () => handleChange("event", 1) } >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
