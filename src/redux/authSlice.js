import { createSlice } from '@reduxjs/toolkit';
import { usersData } from '../data/mockData';

const initialState = {
  user: null,
  isAuthenticated: false,
  availableUsers: usersData,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const user = state.availableUsers.find(u => u.id === action.payload);
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },

    register: (state, action) => {
      const newUser = {
        id: state.availableUsers.length + 1,
        ...action.payload,
        joinDate: new Date().toISOString().split('T')[0],
      };
      state.availableUsers.push(newUser);
      state.user = newUser;
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
