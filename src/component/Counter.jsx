import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../assets/redux-element/actions/CounterActions';

const Counter = () => {
      const count = useSelector((state) => state.count);
      const dispatch = useDispatch();

      const handleIncrement=()=>{
            dispatch(incrementCounter())
      }
      const handleDecrement=()=>{
            dispatch(decrementCounter())
      }
      const handleResetCounter=()=>{
            dispatch(resetCounter())
      }
      return (
            <div className='text-center'>
                  <h2 className='text-center font-semibold text-2xl'>Counter App</h2>
                  <h2 className=' font-semibold text-1xl'>Count : {count}</h2>
                  <div>
                  <button onClick={handleIncrement} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Increment
                  </button>
                  <button onClick={handleDecrement} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                        Decrement
                  </button>
                  <button onClick={handleResetCounter} className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-500">
                        reset
                  </button>
                  </div>

            </div>
      );
};

export default Counter;