import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice/userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
