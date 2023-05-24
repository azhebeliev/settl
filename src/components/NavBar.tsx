import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { grey, lightBlue } from '@mui/material/colors';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavBar({
  isAuthenticated,
  isAdmin,
  logout,
}: {
  isAuthenticated: boolean;
  isAdmin: boolean;
  logout: () => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position='static'
      color='transparent'
      sx={{ borderBottom: '2px solid lightgrey', boxShadow: 'none' }}
    >
      <Toolbar disableGutters>
        <Stack direction='row' spacing={2} sx={{ textTransform: 'none' }}>
          <Typography
            fontWeight={600}
            pr={3}
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            settle.
          </Typography>

          {isAuthenticated && (
            <>
              <CustomLink to='/invoices' text='Invoices' />
              <CustomLink to='/history' text='History' />
              <CustomLink to='/debitors' text='Debitors' />
              <CustomLink to='/admin' text='Admin' />
            </>
          )}
        </Stack>
        <Stack direction='row' sx={{ marginLeft: 'auto' }}>
          <IconButton size='large' color='inherit'>
            <AccountTreeIcon color='primary' />
          </IconButton>
          <IconButton
            id='auth-icon'
            size='large'
            color='inherit'
            aria-label='user-icon'
            aria-controls={open ? 'auth-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            disabled={!isAuthenticated ? true : false}
          >
            <PersonIcon />
          </IconButton>
          {isAuthenticated && (
            <Menu
              id='auth-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              MenuListProps={{
                'aria-labelledby': 'auth-icon',
              }}
            >
              <MenuItem
                onClick={() => {
                  logout();
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

function CustomLink({ to, text }: { to: string; text: string }) {
  const { pathname } = useLocation();
  return (
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: pathname === to ? lightBlue[50] : 'inherit',
      }}
    >
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: pathname === to ? 'inherit' : grey[600],
        }}
      >
        {text}
      </Link>
    </Button>
  );
}
