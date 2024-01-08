import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      console.log(state.isLoggedIn);
    },
    logout(state) {
      state.isLoggedIn = false;
      console.log(state.isLoggedIn);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
