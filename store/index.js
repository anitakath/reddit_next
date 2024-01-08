import { configureStore } from "@reduxjs/toolkit";

//SLICES
import filterReducer from "./filterSlice";
import authReducer from "./authSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    counter: counterSlice,
  },
});

export default store;
