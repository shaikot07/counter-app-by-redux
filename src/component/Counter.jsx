import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../assets/redux-element/actions/CounterActions';

const Counter = () => {
      const count = useSelector((state) => state.count);
      const dispatch = useDispatch();

      const handleIncrement=()=>{
            dispatch(incrementCounter())
      }
      return (
            <div className='text-center'>
                  <h2 className='text-center font-semibold text-2xl'>Counter App</h2>
                  <h2 className=' font-semibold text-1xl'>Count : {count}</h2>
                  <button onClick={handleIncrement} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Primary Button
                  </button>

            </div>
      );
};

export default Counter;