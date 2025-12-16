import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  ShoppingCart,
  AccountCircle,
  Search,
  Favorite,
  Close,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import { searchProducts } from '../redux/productsSlice';
import { dailyUpdates } from '../data/mockData';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalItems } = useSelector(state => state.cart);
  // const { user, isAuthenticated } = useSelector(state => state.auth);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleProfileMenuClose();
    navigate('/');
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(searchProducts(value));
  };

  return (
    <Box>
      {/* Daily Updates Banner */}
      {showBanner && (
        <Box
          sx={{
            backgroundColor: '#ff6b6b',
            color: 'white',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflowX: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', gap: 3, flex: 1 }}>
            {dailyUpdates.map((update) => (
              <Box
                key={update.id}
                sx={{
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {update.title}
                </Typography>
                <Typography variant="caption">{update.description}</Typography>
              </Box>
            ))}
          </Box>
          <IconButton
            size="small"
            onClick={() => setShowBanner(false)}
            sx={{ color: 'white', ml: 2, flexShrink: 0 }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      )}

      {/* Main Header */}
      <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              cursor: 'pointer',
              color: '#ff6b6b',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              minWidth: '150px',
            }}
            onClick={() => navigate('/')}
          >
            KaarisaNather GiftShop 🧸
          </Typography>

          {/* Search Bar */}
          <Box sx={{ flex: 1, maxWidth: 400, mx: 4 }}>
            <TextField
              fullWidth
              placeholder="Search gifts..."
              size="small"
              value={searchValue}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#ff6b6b' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '25px',
                  border: '2px solid #e0e0e0',
                  '&:hover': {
                    borderColor: '#ff6b6b',
                  },
                  '&.Mui-focused': {
                    borderColor: '#ff6b6b',
                  },
                },
              }}
            />
          </Box>

          {/* Navigation Icons */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <IconButton
              size="large"
              onClick={() => navigate('/cart')}
              sx={{ color: '#ff6b6b' }}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton sx={{ color: '#ff6b6b' }}>
              <Favorite />
            </IconButton>

            {true ? (
              <>
                <IconButton
                  onClick={handleProfileMenuOpen}
                  sx={{ color: '#ff6b6b' }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={profileAnchorEl}
                  open={Boolean(profileAnchorEl)}
                  onClose={handleProfileMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={() => {
                    navigate('/profile');
                    handleProfileMenuClose();
                  }}>
                    View Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff6b6b',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '20px',
                  px: 3,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#e55555',
                  },
                }}
                onClick={() => navigate('/profile')}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
