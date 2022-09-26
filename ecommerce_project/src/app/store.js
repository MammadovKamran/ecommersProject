import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice/userSlice";
import category from "../redux/category/category";
const store = configureStore({
  reducer: {
    user: userSlice,
    category: category

  },
});

export default store;
