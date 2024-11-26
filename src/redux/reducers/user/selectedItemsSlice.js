
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItems: {},
  totalAmount: 0,
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    clearSelectedItems: (state) => {
      state.selectedItems = {};
      state.totalAmount = 0;
    },
  },
});

export const { setSelectedItems, setTotalAmount, clearSelectedItems } = selectedItemsSlice.actions;

export const selectSelectedItems = (state) => state.selectedItems.selectedItems;
export const selectTotalAmount = (state) => state.selectedItems.totalAmount;

export default selectedItemsSlice.reducer;
