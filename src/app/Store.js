import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/UserSlice";


export const store = configureStore({
  reducer: {
    app:userDetail,
    
  },
  
});
