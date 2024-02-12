import React from 'react';
import { useSelector } from 'react-redux';

const Tom = () => {
      const payInfoData= useSelector((state)=>state.paymentInfo)
      console.log("IT'S A NUMBER 6",payInfoData);
      // const{ fullName,shippingAddress, mobileNumber,}=payInfoData;
     
      return (
            <div className='bg-purple-800 text-white text-center'>
                 <h1> this is tom section</h1>
                  {/* <h2> name:{payInfoData.fullName}</h2> */}
                  <h2> name:{payInfoData.data.fullName}</h2>
                  <h2> address:{payInfoData.shippingAddress}</h2>
                  <h2> mobile:{payInfoData.mobileNumber}</h2>
                  <div>
                  <h2> name:{payInfoData.data.fullName}</h2>
                  <h2> address:{payInfoData.shippingAddress}</h2>
                  <h2> mobile:{payInfoData.mobileNumber}</h2>
                  </div>
            </div>
      );
};

export default Tom;