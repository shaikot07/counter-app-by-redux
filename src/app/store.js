import { configureStore } from "@reduxjs/toolkit";
import paymentInfoSlice from "../fetures/paymentInfoSlice";
import testSlice from "../fetures/testSlice";

export  const store = configureStore({
      reducer:{
            paymentInfo:paymentInfoSlice,
            setNewActions:testSlice
      }
})