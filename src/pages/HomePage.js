// import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Chip,
  Paper,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { filterByCategory } from '../redux/productsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { filteredProducts, selectedCategory } = useSelector(state => state.products);
  const categories = ['all', 'accessories', 'electronics', 'home', 'beauty', 'stationery'];

  const handleCategoryFilter = (category) => {
    dispatch(filterByCategory(category));
  };

  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper
          elevation={0}
          sx={{
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8c8c 100%)',
            color: 'white',
            padding: '60px 40px',
            borderRadius: '16px',
            marginBottom: 6,
            textAlign: 'center',
            mb: 5,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Welcome to KaarisaNathar GiftShop
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.95 }}>
            Discover the perfect gifts for everyone. Premium quality, affordable prices.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#ff6b6b',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Shop Now
          </Button>
        </Paper>

        {/* Category Filter */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
            Shop by Category
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {categories.map(category => (
              <Chip
                key={category}
                label={category.charAt(0).toUpperCase() + category.slice(1)}
                onClick={() => handleCategoryFilter(category)}
                sx={{
                  backgroundColor: selectedCategory === category ? '#ff6b6b' : '#fff',
                  color: selectedCategory === category ? 'white' : '#333',
                  fontWeight: 600,
                  borderRadius:"10px",
                  padding: '18px 4px',
                  border: '2px solid',
                  borderColor: selectedCategory === category ? '#ff6b6b' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#ff6b6b',
                    backgroundColor: selectedCategory === category ? '#ff6b6b' : '#fff5f5',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Products Grid */}
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          Featured Products ({filteredProducts.length})
        </Typography>

        {filteredProducts.length > 0 ? (
          <Grid container spacing={3}>
            {filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Paper
            elevation={0}
            sx={{
              textAlign: 'center',
              py: 6,
              backgroundColor: '#fff',
              borderRadius: '12px',
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No products found
            </Typography>
          </Paper>
        )}

        {/* Features Section */}
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '2px solid #f0f0f0',
              }}
            >
              <Typography variant="h4" sx={{ color: '#ff6b6b', mb: 1 }}>
                ✓
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Free Shipping
              </Typography>
              <Typography variant="body2" color="text.secondary">
                On orders over ₹50
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '2px solid #f0f0f0',
              }}
            >
              <Typography variant="h4" sx={{ color: '#ff6b6b', mb: 1 }}>
                24/7
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Customer Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Always here to help
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '2px solid #f0f0f0',
              }}
            >
              <Typography variant="h4" sx={{ color: '#ff6b6b', mb: 1 }}>
                🔒
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Secure Checkout
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Safe payments guaranteed
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#fff',
                borderRadius: '12px',
                border: '2px solid #f0f0f0',
              }}
            >
              <Typography variant="h4" sx={{ color: '#ff6b6b', mb: 1 }}>
                ↩
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Easy Returns
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30-day return policy
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
