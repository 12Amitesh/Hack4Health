import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // or use {} depending on your structure
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        console.log("init")
         console.log(state)
        console.log(action.payload)
      state.user = action.payload;
      console.log("after")
        console.log(state)
     
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;