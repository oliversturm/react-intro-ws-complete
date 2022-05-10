import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import { memo, useCallback, useState } from 'react';
import OuterPaper from './OuterPaper';

const menuItems = [
  { name: 'Components 1', uri: '/components1' },
  { name: 'Components 2', uri: '/components2' },
  { name: 'Calculator', uri: '/calculator' },
  { name: 'Optimization', uri: '/optimization' },
  { name: 'State & Props', uri: '/state-and-props' },
  { name: 'Param 42', uri: '/param/42' },
  { name: 'Param "Thing"', uri: '/param/Thing' },
];

// Structure of this setup, details for routing with MUI buttons, etc,
// all taken from MUI docs.

const App = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const openMenu = useCallback(
    (e) => {
      setMenuAnchor(e.currentTarget);
    },
    [setMenuAnchor]
  );
  const closeMenu = useCallback(() => {
    setMenuAnchor(null);
  }, [setMenuAnchor]);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton size="large" color="inherit" onClick={openMenu}>
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={menuAnchor}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={!!menuAnchor}
                onClose={closeMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuItems.map(({ name, uri }, i) => (
                  <MenuItem
                    key={i}
                    component={Link}
                    to={uri}
                    onClick={closeMenu}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map(({ name, uri }, i) => (
                <Button
                  key={i}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    '&:visited': { color: 'white' },
                  }}
                  component={Link}
                  to={uri}
                >
                  {name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 
      For illustration: 
        a navigation menu could look as simple as this.

      <nav>
        <Link to="/components1">Components 1</Link>
        <Link to="/components2">Components 2</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/optimization">Optimization</Link>
        <Link to="/state-and-props">State & Props</Link>
      </nav> */}

      <Container maxWidth="xl">
        <OuterPaper elevation={4}>
          <Outlet />
        </OuterPaper>
      </Container>
    </>
  );
};

export default memo(App);
