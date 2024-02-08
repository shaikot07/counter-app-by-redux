import { configureStore } from "@reduxjs/toolkit";
import paymentInfoSlice from "../fetures/paymentInfoSlice";

export  const store = configureStore({
      reducer:{
            paymentInfo:paymentInfoSlice,
      }
})