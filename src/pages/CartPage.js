import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Grid,
  Card,
  IconButton,
  Divider,
} from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalPrice, totalItems } = useSelector(state => state.cart);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const handleApplyDiscount = () => {
    // Simple mock discount codes
    const codes = {
      'SAVE10': 0.10,
      'SAVE20': 0.20,
      'WELCOME': 0.15,
    };

    if (codes[discountCode]) {
      setAppliedDiscount(codes[discountCode]);
      setDiscountCode('');
    } else if (discountCode) {
      alert('Invalid discount code');
      setDiscountCode('');
    }
  };

  const discountAmount = totalPrice * appliedDiscount;
  const finalPrice = totalPrice - discountAmount;
  const shippingCost = totalPrice > 50 ? 0 : 10;
  const grandTotal = finalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              textAlign: 'center',
              py: 8,
              backgroundColor: '#fff',
              borderRadius: '12px',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Add some amazing gifts to get started!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#e55555',
                },
              }}
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Shopping Cart ({totalItems} items)
        </Typography>

        <Grid container spacing={3}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
              <Table>
                <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Product</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>
                      Quantity
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      Price
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      Total
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map(item => (
                    <TableRow
                      key={item.id}
                      sx={{
                        '&:hover': { backgroundColor: '#fafafa' },
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{
                              width: 80,
                              height: 80,
                              objectFit: 'cover',
                              borderRadius: '8px',
                            }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: 600 }}>
                              {item.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            sx={{ color: '#ff6b6b' }}
                          >
                            <Remove fontSize="small" />
                          </IconButton>
                          <TextField
                            size="small"
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            inputProps={{ min: 1, style: { textAlign: 'center' } }}
                            sx={{ width: 60 }}
                          />
                          <IconButton
                            size="small"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            sx={{ color: '#ff6b6b' }}
                          >
                            <Add fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>

                      <TableCell align="right">
                        ₹{item.price.toFixed(2)}
                      </TableCell>

                      <TableCell align="right" sx={{ fontWeight: 700, color: '#ff6b6b' }}>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </TableCell>

                      <TableCell align="center">
                        <IconButton
                          size="small"
                          onClick={() => handleRemoveFromCart(item.id)}
                          sx={{ color: '#ff6b6b' }}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              variant="text"
              sx={{
                mt: 2,
                color: '#ff6b6b',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#fff5f5',
                },
              }}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, borderRadius: '12px' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Order Summary
              </Typography>

              {/* Discount Code */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>
                  Discount Code
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleApplyDiscount}
                    sx={{
                      borderColor: '#ff6b6b',
                      color: '#ff6b6b',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#fff5f5',
                        borderColor: '#ff6b6b',
                      },
                    }}
                  >
                    Apply
                  </Button>
                </Box>
                {appliedDiscount > 0 && (
                  <Typography variant="caption" sx={{ color: '#4caf50', fontWeight: 600, mt: 1, display: 'block' }}>
                    ✓ {(appliedDiscount * 100).toFixed(0)}% discount applied
                  </Typography>
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Price Details */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography>Subtotal:</Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    ₹{totalPrice.toFixed(2)}
                  </Typography>
                </Box>

                {appliedDiscount > 0 && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, color: '#4caf50' }}>
                    <Typography>Discount:</Typography>
                    <Typography sx={{ fontWeight: 600 }}>
                      -₹{discountAmount.toFixed(2)}
                    </Typography>
                  </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography>Shipping:</Typography>
                  <Typography sx={{ fontWeight: 600 }}>
                    {shippingCost === 0 ? (
                      <span style={{ color: '#4caf50' }}>Free</span>
                    ) : (
                      `₹₹{shippingCost.toFixed(2)}`
                    )}
                  </Typography>
                </Box>

                {shippingCost > 0 && (
                  <Typography variant="caption" color="text.secondary">
                    Free shipping on orders over ₹50
                  </Typography>
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Grand Total */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  Grand Total:
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: '#ff6b6b' }}>
                  ₹{grandTotal.toFixed(2)}
                </Typography>
              </Box>

              {/* Checkout Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  mb: 2,
                  '&:hover': {
                    backgroundColor: '#e55555',
                  },
                }}
                onClick={() => {
                  alert(`Order placed successfully! Total: ₹₹{grandTotal.toFixed(2)}`);
                  dispatch(clearCart());
                  navigate('/');
                }}
              >
                Proceed to Checkout
              </Button>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: '#ff6b6b',
                  borderColor: '#ff6b6b',
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#fff5f5',
                    borderColor: '#ff6b6b',
                  },
                }}
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartPage;
