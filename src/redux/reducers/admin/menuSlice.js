import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  date: new Date().toISOString().split('T')[0],
  mealType: 'breakfast',
  meals: {
    breakfast: [],
    lunch: [],
    snack: []
  },
  availableItems: [],
  newItem: {
    name: '',
    description: '',
    price: ''
  },
  loading: false,
  error: null
};

// Redux slice
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setMealType: (state, action) => {
      state.mealType = action.payload;
    },
    setNewItem: (state, action) => {
      state.newItem = { ...state.newItem, ...action.payload };
    },
    addAvailableItem: (state, action) => {
      state.availableItems.push({ ...action.payload, id: Date.now() });
    },
    addMenuItem: (state) => {
      const selectedItem = state.availableItems.find(item => item.name === state.newItem.name);
      if (selectedItem) {
        state.meals[state.mealType].push({ ...selectedItem, id: Date.now() });
      }
    },
    setAvailableItems: (state, action) => {
      state.availableItems = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

// Export actions
export const {
  setDate,
  setMealType,
  setNewItem,
  addAvailableItem,
  addMenuItem,
  setAvailableItems,
  setLoading,
  setError,
} = menuSlice.actions;

// Async Thunks
export const fetchAvailableItems = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('/api/available-items'); 
    dispatch(setAvailableItems(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const saveDailyMenu = (date, meals) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post('/api/save-menu', { date, meals }); 
    alert('Menu saved successfully');
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default menuSlice.reducer;
