import {useState} from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


function SignUp() {
    
  return (
    <div>
          <Grid align="center" className="wrapper">
                <Paper  sx={{width: {
                    xs: '80vw',     // 0
                    sm: '50vw',     // 600
                    md: '40vw',     // 900
                    lg: '30vw',     // 1200
                    xl: '20vw',     // 1536 
                },
                height:{
                    lg: '60vh',     // 1200px and up
                }}}>
                    <Typography component="h1" variant="h5" style={heading}> Signup </Typography>
                   
                </Paper>
            </Grid>
    </div>
  )
}

export default SignUp
