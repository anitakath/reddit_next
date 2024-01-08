import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filter: (state, action) => {
      /*
            console.log(state)
            if( state === action.payload){
                return
            } else if ( state !== action.payload){
                state = action.payload
            }*/
      state = action.payload;
      return state;
    },
  },
});

export default filterSlice.reducer;
export const { filter } = filterSlice.actions;
