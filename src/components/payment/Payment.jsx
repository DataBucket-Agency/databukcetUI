import React from 'react';

const Payment = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white  rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Payments Mode</h2>
      <div className="flex justify-center mb-4">
        <img src="/assets/mpesa.svg" alt="Mpesa" className="w-24 h-24" />
      </div>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">Total Premium due</h3>
        <p className="text-2xl font-bold">KES. 35,000.00</p>
      </div>
      <form className="mb-6">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 text-center mb-2">
          Enter your phone no. for Mpesa payment.
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="eg 07xxxxxxxx"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </form>
     
    </div>
    );
}

export default Payment;
