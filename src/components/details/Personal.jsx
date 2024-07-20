import React, { useState } from 'react';

const Personal = ({ handleContinue, onBack }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataJSON = Object.fromEntries(formData);

    const newErrors = {};
    if (!formDataJSON.firstName) newErrors.firstName = 'Please enter your first name';
    if (!formDataJSON.lastName) newErrors.lastName = 'Please enter your last name';
    if (!formDataJSON.kraPin) newErrors.kraPin = 'Please enter your KRA Pin';
    if (!formDataJSON.idNumber) newErrors.idNumber = 'Please enter your national ID number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      handleContinue();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Personal Details</h2>
      <p className="text-center mb-4">Enter your details below</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`mt-1 block w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`mt-1 block w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="kraPin" className="block text-sm font-medium text-gray-700">
            KRA Pin
          </label>
          <input
            type="text"
            id="kraPin"
            name="kraPin"
            className={`mt-1 block w-full p-2 border ${errors.kraPin ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.kraPin && <p className="text-red-500 text-sm">{errors.kraPin}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
            National ID Number
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            className={`mt-1 block w-full p-2 border ${errors.idNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.idNumber && <p className="text-red-500 text-sm">{errors.idNumber}</p>}
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-gray-200 px-4 py-1 rounded-md"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-zinc-900 text-white px-4 py-1 rounded-md"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Personal;
