import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      data:[],
}

const paymentInfoSlice= createSlice({
      name:"paymentInfo",
      initialState,
      reducers:{
            setPaymentAddressInfo(state, action){
                  state.data = { ...state.data, ...action.payload };
            }
      }
})

export const {setPaymentAddressInfo}=paymentInfoSlice.actions;
export default paymentInfoSlice.reducer