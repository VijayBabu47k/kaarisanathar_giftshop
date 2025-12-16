import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 6 }}>
          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              KaarisaNather GiftShop 🧸
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ mb: 2 }}>
              Your one-stop destination for premium gifts at affordable prices. We bring joy to every occasion.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                Home
              </Link>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                Shop
              </Link>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                About
              </Link>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                FAQ
              </Link>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                Shipping Info
              </Link>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                Returns
              </Link>
              <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Social */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                <Facebook />
              </Link>
              <Link href="#" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                <Instagram />
              </Link>
              <Link href="#" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                <Twitter />
              </Link>
              <Link href="#" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#ff6b6b' } }}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ py: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="rgba(255,255,255,0.6)">
            © 2024 KaarisaNathar GiftShop. All rights reserved. | Designed with ❤️ for gift lovers everywhere.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
