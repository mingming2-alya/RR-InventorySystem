import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const toolbarStyle = {
  minHeight: '80px',
};

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = [
    { label: '尋找物品', path: '/HomeSearch' },
    { label: '盤點物品', path: '/HomeInventory' },
    { label: '我是老師', path: '/TeacherSignIn' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const barmenu = (
    <Box sx={{ display: { xs: 'none', sm: 'block'}}}>
      {navItems.map((nav) => (
      <Link key={nav.path} to={nav.path} style={{ textDecoration: 'none', color: '#c8d3c5' }}>
        <Button sx={{ color: '#322619', fontSize: '15pt', fontWeight: 'bold' }}>
          {nav.label}
        </Button>
      </Link>
    ))}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{backgroundColor: 'white',opacity: 0.7}}>
        <Toolbar style={toolbarStyle} sx={{justifyContent: 'flex-end'}}>
          <IconButton
            color="#322619"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon sx={{fontSize: 35}}/>
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#322619', fontWeight: 'bold'}}
          >
            資源教室小窩
          </Typography>
          {barmenu}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};