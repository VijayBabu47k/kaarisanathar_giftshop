import  { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  Grid,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from '@mui/material';
import {
  Email,
  CalendarToday,
  Logout,
  AccountCircle,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, register } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-₹{index}`}
      aria-labelledby={`tab-₹{index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, availableUsers } = useSelector(state => state.auth);
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (userId) => {
    dispatch(login(userId));
    setTabValue(0);
  };

  const handleRegister = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(register({
      name: formData.name,
      email: formData.email,
      image: formData.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    }));
    setFormData({ name: '', email: '', image: '' });
    setTabValue(0);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (isAuthenticated && user) {
    return (
      <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="md">
          {/* Profile Header */}
          <Card sx={{ borderRadius: '12px', mb: 4, overflow: 'hidden' }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8c8c 100%)',
                height: 150,
              }}
            />
            <CardContent sx={{ pt: 4, pb: 4 }}>
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                <Avatar
                  src={user.image}
                  sx={{
                    width: 150,
                    height: 150,
                    border: '4px solid white',
                    boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
                    mt: -10,
                  }}
                />
                <Box sx={{ flex: 1, mt: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Welcome back! Here's your profile information.
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Logout />}
                    onClick={handleLogout}
                    sx={{
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#e55555',
                      },
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3, borderRadius: '12px' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Account Information
                </Typography>

                <List>
                  <ListItem>
                    <ListItemIcon>
                      <AccountCircle sx={{ color: '#ff6b6b' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Full Name"
                      secondary={user.name}
                    />
                  </ListItem>

                  <Divider />

                  <ListItem>
                    <ListItemIcon>
                      <Email sx={{ color: '#ff6b6b' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email Address"
                      secondary={user.email}
                    />
                  </ListItem>

                  <Divider />

                  <ListItem>
                    <ListItemIcon>
                      <CalendarToday sx={{ color: '#ff6b6b' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Member Since"
                      secondary={new Date(user.joinDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Quick Stats */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: '12px', textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ color: '#ff6b6b', fontWeight: 700, mb: 1 }}>
                  12
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Orders Placed
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, borderRadius: '12px', textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ color: '#ff6b6b', fontWeight: 700, mb: 1 }}>
                  ₹1,234
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Spent
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, borderRadius: '12px', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#ff6b6b', fontWeight: 700, mb: 1 }}>
                  Gold
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Member Status
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  // Not authenticated - show login/register
  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Card sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8c8c 100%)',
              color: 'white',
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              KaarisaNathar GiftShop Account
            </Typography>
            <Typography variant="body1">
              Sign in or create a new account
            </Typography>
          </Box>

          <Box sx={{ p: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="auth-tabs"
              sx={{
                mb: 3,
                '& .MuiTab-root': {
                  fontWeight: 600,
                  textTransform: 'none',
                  color: '#999',
                  '&.Mui-selected': {
                    color: '#ff6b6b',
                  },
                },
                '& .MuiTabIndicator-root': {
                  backgroundColor: '#ff6b6b',
                  height: 3,
                },
              }}
            >
              <Tab label="Sign In" id="tab-0" aria-controls="tabpanel-0" />
              <Tab label="Register" id="tab-1" aria-controls="tabpanel-1" />
            </Tabs>

            {/* Login Tab */}
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Select an Account
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Choose from existing accounts (demo accounts for testing)
              </Typography>

              {availableUsers.map(u => (
                <Paper
                  key={u.id}
                  sx={{
                    p: 3,
                    mb: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    '&:hover': {
                      borderColor: '#ff6b6b',
                      backgroundColor: '#fff5f5',
                      transform: 'translateX(4px)',
                    },
                  }}
                  onClick={() => handleLogin(u.id)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Avatar
                      src={u.image}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 700 }}>
                        {u.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {u.email}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '8px',
                        '&:hover': {
                          backgroundColor: '#e55555',
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                </Paper>
              ))}
            </TabPanel>

            {/* Register Tab */}
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Create New Account
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Profile Image URL (optional)"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
                helperText="Leave empty for default profile picture"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#e55555',
                  },
                }}
                onClick={handleRegister}
              >
                Create Account
              </Button>
            </TabPanel>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ProfilePage;
