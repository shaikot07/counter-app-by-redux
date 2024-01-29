// action gula ki ki hobe se gula akhane 

import { DECREMENT, INCREMENT, RESET } from "../constant/counterConstant"


export const incrementCounter = () =>{
      return {
            type : INCREMENT,
      }
}
export const decrementCounter = () =>{
      return {
            type : DECREMENT,
      }
}
export const resetCounter = () =>{
      return {
            type : RESET,
      }
}