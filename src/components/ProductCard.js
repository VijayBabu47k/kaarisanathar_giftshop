import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  IconButton,
  Tooltip,
  Rating,
} from '@mui/material';
import { ShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
        },
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Product Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        {/* Favorite Button */}
        <Tooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
          <IconButton
            size="small"
            onClick={() => setIsFavorite(!isFavorite)}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            {isFavorite ? (
              <Favorite sx={{ color: '#ff6b6b' }} />
            ) : (
              <FavoriteBorder sx={{ color: '#ff6b6b' }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Product Details */}
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </Typography>

        <Rating
          value={product.rating}
          readOnly
          size="small"
          sx={{ mb: 1 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: '#ff6b6b', fontWeight: 700 }}>
            ₹{product.price.toFixed(2)}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: '#f5f5f5',
              px: 1.5,
              py: 0.5,
              borderRadius: '12px',
              textTransform: 'capitalize',
            }}
          >
            {product.category}
          </Typography>
        </Box>
      </CardContent>

      {/* Add to Cart Button */}
      <CardActions sx={{ pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleAddToCart}
          sx={{
            backgroundColor: addedToCart ? '#4caf50' : '#ff6b6b',
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            py: 1.2,
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: addedToCart ? '#4caf50' : '#e55555',
              transform: 'scale(1.02)',
            },
          }}
          startIcon={<ShoppingCart />}
        >
          {addedToCart ? '✓ Added!' : 'Add to Cart'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
