import React, { useState } from 'react';

const Vehicle = ({ onBack, handleContinue, onContinue }) => {
  const [vehicleDetails, setVehicleDetails] = useState({
    registrationNumber: '',
    engineNumber: '',
    chassisNumber: '',
    sittingCapacity: '',
  });

  const [documents, setDocuments] = useState({
    nationalID: null,
    logbook: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prevDocuments) => ({
      ...prevDocuments,
      [name]: files[0],
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleContinueClick = () => {
    const newErrors = {};

    if (!vehicleDetails.registrationNumber) newErrors.registrationNumber = 'Please enter the vehicle registration number';
    if (!vehicleDetails.engineNumber) newErrors.engineNumber = 'Please enter the engine number';
    if (!vehicleDetails.chassisNumber) newErrors.chassisNumber = 'Please enter the chassis number';
    if (!vehicleDetails.sittingCapacity) newErrors.sittingCapacity = 'Please enter the sitting capacity';
    if (!documents.nationalID) newErrors.nationalID = 'Please upload a copy of the national ID';
    if (!documents.logbook) newErrors.logbook = 'Please upload a copy of the logbook';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      handleContinue();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Vehicle Details</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
            Vehicle Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={vehicleDetails.registrationNumber}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.registrationNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="chassisNumber" className="block text-sm font-medium text-gray-700">
            Chassis Number
          </label>
          <input
            type="text"
            id="chassisNumber"
            name="chassisNumber"
            value={vehicleDetails.chassisNumber}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.chassisNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.chassisNumber && <p className="text-red-500 text-sm">{errors.chassisNumber}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="engineNumber" className="block text-sm font-medium text-gray-700">
            Engine Number
          </label>
          <input
            type="text"
            id="engineNumber"
            name="engineNumber"
            value={vehicleDetails.engineNumber}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.engineNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.engineNumber && <p className="text-red-500 text-sm">{errors.engineNumber}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="sittingCapacity" className="block text-sm font-medium text-gray-700">
            Sitting Capacity
          </label>
          <input
            type="text"
            id="sittingCapacity"
            name="sittingCapacity"
            value={vehicleDetails.sittingCapacity}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border ${errors.sittingCapacity ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.sittingCapacity && <p className="text-red-500 text-sm">{errors.sittingCapacity}</p>}
        </div>

        {/* Upload Documents */}
        <div>
          <h2 className="text-lg font-semibold">Upload Documents</h2>
          <div>
            <label htmlFor="nationalID" className="block text-sm font-medium text-gray-700 mt-3">
              Copy of National ID
            </label>
            <div className="flex items-center justify-center w-full mt-2">
              <label
                htmlFor="nationalID"
                className={`flex flex-col items-center justify-center w-full h-54 border-2 ${errors.nationalID ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer bg-white-500`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-white-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="nationalID" name="nationalID" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
            {errors.nationalID && <p className="text-red-500 text-sm">{errors.nationalID}</p>}
          </div>
          <div>
            <label htmlFor="logbook" className="block text-sm font-medium text-gray-700 mt-3">
              Copy of Logbook
            </label>
            <div className="flex items-center justify-center w-full mt-2">
              <label
                htmlFor="logbook"
                className={`flex flex-col items-center justify-center w-full h-54 border-2 ${errors.logbook ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer bg-white-500`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-white-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="logbook" name="logbook" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
            {errors.logbook && <p className="text-red-500 text-sm">{errors.logbook}</p>}
          </div>
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
            type="button"
            className="bg-zinc-900 text-white px-4 py-1 rounded-md"
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Vehicle;
