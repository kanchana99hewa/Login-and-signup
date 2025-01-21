

import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


function Login() {
  const paperStyle = {padding: "2rem", margin: "100px auto", borderRadius:"1rem", boxShadow: "10px 10px 10px"};
    const heading = {fontSize:"2.5rem", fontWeight:"600"}
    const row = {display:"flex", marginTop:"2rem"}
    const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"};
    return (
    <div>
              <Grid align="center" className="wrapper">
                <Paper style={paperStyle} sx={{width: {
                    xs: '80vw',     // 0
                    sm: '50vw',     // 600
                    md: '40vw',     // 900
                    lg: '30vw',     // 1200
                    xl: '20vw',     // 1536 
                },
                height:{
                    lg: '60vh',     // 1200px and up
                }}}>
                    <Typography component="h1" variant="h5" style={heading}> Login </Typography>
                    <form >
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth type="text" label="Enter Name" name="name"></TextField>
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email" name="email" />                    
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password" name="password" />
                        <Button style={btnStyle} variant="contained" type="submit">Login</Button>
                    </form>
                    <p>Dont have an account? <Link href="/signup">SignUp</Link></p>
                </Paper>
            </Grid>
</div>
  )
}

export default Login
