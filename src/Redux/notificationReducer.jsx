import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: null,
  },

  reducers: {
    set: (state, action) => {
      return action.payload;
    },
    clear: () => {
      return { message: null };
    },
  },
});

const { set, clear } = notificationSlice.actions;

export const notify = (msg) => {
  return async (dispatch) => {
    dispatch(set({ message: msg }));
    setTimeout(() => {
      dispatch(clear());
    }, 3000);
  };
};

export default notificationSlice.reducer;
