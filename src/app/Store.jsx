import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "../feature/UserReducer"
export default configureStore({
  reducer: {
    user: UserReducer,
  },
})