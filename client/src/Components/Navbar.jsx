

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';





function Navbar() {
  return (
    <AppBar sx={{ bgcolor: '#333' }}>
    <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Tech Coffee Break
        </Typography>
       
            
          
     
    </Toolbar>
</AppBar>
  )
}

export default Navbar
