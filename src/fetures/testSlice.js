import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      data:[],
}

const testSlice= createSlice({
      name:"paymentInfo",
      initialState,
      reducers:{
            // here added operations
            setPaymentAddressInfo(state, action){
                  state.data = { ...state.data, ...action.payload };
            }
      }
})

export const {setPaymentAddressInfo}=testSlice.actions;
export default testSlice.reducer