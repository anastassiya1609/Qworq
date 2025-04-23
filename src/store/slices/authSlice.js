import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const loadState = () => {
  try {
    const userData = Cookies.get('userData');
    const token = Cookies.get('token');
    
    if (!userData || !token) {
      return {
        isLoggedIn: false,
        user: null,
        token: null,
      };
    }
    
    return {
      isLoggedIn: true,
      user: JSON.parse(userData),
      token: token,
    };
  } catch (err) {
    console.error('Error loading auth state from cookies:', err);
    return {
      isLoggedIn: false,
      user: null,
      token: null,
    };
  }
};

const initialState = loadState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      
      try {
       
        Cookies.set('userData', JSON.stringify(action.payload.user), { expires: 7 });
        Cookies.set('token', action.payload.token, { expires: 7 });
      } catch (err) {
        console.error('Error saving auth state to cookies:', err);
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      

      Cookies.remove('userData');
      Cookies.remove('token');
    },
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
      

      try {
        Cookies.set('userData', JSON.stringify({ ...state.user, ...action.payload }), { expires: 7 });
      } catch (err) {
        console.error('Error updating auth state in cookies:', err);
      }
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;