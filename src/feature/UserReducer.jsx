import { createSlice } from '@reduxjs/toolkit'

export const UserReducer = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state , action) =>{
      state.user = action.payload;
  },
  logout: (state) =>{
      state.user = null;
  },
    // incrementByAmount: (state, action) => {
    //   state.user += action.payload
    // },
  },
})

export const { login , logout} = UserReducer.actions

export const selectUser = (state) => state.user.user;

export default UserReducer.reducer