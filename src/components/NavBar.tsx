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
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar({
  isAuthenticated,
  isAdmin,
  handleLogout,
}: {
  isAuthenticated: boolean;
  isAdmin: boolean;
  handleLogout: () => Promise<void>;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const defineLinkStyle = ({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
  }): React.CSSProperties => {
    return {
      color: isActive ? 'inherit' : 'gray',
      textDecoration: 'none',
    };
  };

  return (
    <AppBar
      position='static'
      color='transparent'
      sx={{ boxShadow: '0 5px 5px -7px ' }}
    >
      <Toolbar>
        <Stack direction='row' spacing={2} sx={{ textTransform: 'none' }}>
          <Typography
            fontWeight={600}
            pr={3}
            variant='h5'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            settl.
          </Typography>

          <Button>
            <NavLink to='/invoices' style={defineLinkStyle}>
              Invoices
            </NavLink>
          </Button>
          <Button>
            <NavLink to='/history' style={defineLinkStyle}>
              History
            </NavLink>
          </Button>
          <Button>
            <NavLink to='/debitors' style={defineLinkStyle}>
              Debitors
            </NavLink>
          </Button>
          <Button>
            <NavLink to='/statistics' style={defineLinkStyle}>
              Statistics
            </NavLink>
          </Button>
          <Button>
            <NavLink to='/admin' style={defineLinkStyle}>
              Admin
            </NavLink>
          </Button>
        </Stack>
        <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }}>
          <IconButton size='large' color='inherit'>
            <AccountTreeIcon />
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
                  handleLogout();
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
