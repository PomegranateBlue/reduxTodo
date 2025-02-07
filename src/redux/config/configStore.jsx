import { configureStore } from "@reduxjs/toolkit";

import todos from "../slices/todoSlice";

const store = configureStore({
  reducer: { todo: todos },
});

export default store;
