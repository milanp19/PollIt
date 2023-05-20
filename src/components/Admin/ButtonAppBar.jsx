import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"left"}}>
            Admin
          </Typography>
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            aria-label="home"
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <HomeIcon />
              <Button variant="caption" sx={{ marginTop: 0 }}><Link  to={"/table"} style={{color:"white"}}>Home</Link></Button>
            </Box>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="create"
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AddIcon />
              <Button variant="caption" sx={{ marginTop: 0 }}>Create</Button>
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
      </Box>
  );
}
