import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null, 
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export const loginUser = (mobileNumber, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('http://localhost:3000/api/auth/login/password', { mobileNumber, password });
    

    dispatch(loginSuccess({ 
      token: response.data.token, 
      user: response.data.userId, 
      role: response.data.role  
    }));
  } catch (error) {
   
    const errorMessage = error.response && error.response.data.message 
      ? error.response.data.message 
      : 'An unexpected error occurred';
    dispatch(loginFailure({ error: errorMessage }));
  }
};

export default authSlice.reducer;