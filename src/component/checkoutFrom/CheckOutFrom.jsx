import React from 'react';

const CheckOutFrom = () => {
      return (
            <div className='p-2 w-[600px] bg-emerald-500 ml-10'>
                  <h3 className='text-2xl'>Add New Delivery Address</h3>
                  <form>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '> 
                              <div>
                              <label className="block text-md  text-gray-700">Full Name</label>
                              <input type="text"
                                    placeholder="Input Full name"
                                    required
                                    name='fullName'
                                    className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                              />
                              </div>
                              <div>
                              <label className="block text-md  text-gray-700">Address</label>
                              <input type="text"
                                    placeholder="Input Your Address"
                                    required
                                    name='address'
                                    className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                              />
                              </div>
                              <div>
                              <label className="block text-md  text-gray-700">Mobile Number</label>
                              <input type="text"
                                    placeholder="Mobile Number"
                                    required
                                    name='mobileNumber'
                                    className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                              />
                              </div>
                              <div>
                              <label className="block text-md  text-gray-700">City</label>
                              <input type="text"
                                    placeholder="Your city name"
                                    required
                                    name='city'
                                    className="appearance-none border border-primary rounded-md py-2 px-4 w-full max-w-xs text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-primary"
                              />
                              </div>
                              


                        </div>
                        <button type='submit' className='bg-black text-white py-2 px-4 mt-2'>Save</button>

                  </form>
            </div>
      );
};

export default CheckOutFrom;