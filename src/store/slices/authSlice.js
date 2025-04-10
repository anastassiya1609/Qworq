import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Отправка запроса
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Успешный ответ
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    // Ошибка
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Регистрация 
    // Отправка запроса
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Успешный ответ
    registerSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    // Ошибка
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Выход из аккаунта
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    // Очистка ошибки
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { 
  loginStart, loginSuccess, loginFailure, 
  registerStart, registerSuccess, registerFailure, 
  logout, clearError 
} = authSlice.actions;

export default authSlice.reducer;