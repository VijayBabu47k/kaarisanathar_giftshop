import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../data/mockData';

const initialState = {
  products: productsData,
  filteredProducts: productsData,
  selectedCategory: 'all',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === 'all') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          product => product.category === action.payload
        );
      }
    },

    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { filterByCategory, searchProducts } = productsSlice.actions;
export default productsSlice.reducer;
