import React, { useState, useEffect } from 'react';

const Summary = ({ formData, onEdit, handleContinue, productId }) => {
  const [coverAmount, setCoverAmount] = useState(0);

  useEffect(() => {
    // Calculate cover amount based on valuation when formData changes
    if (formData?.valuation) {
      const valuation = parseFloat(formData.valuation); // Parse valuation to float
      const cover = valuation * 0.025; // Calculate cover amount (2.5% of valuation)
      setCoverAmount(cover);
    }
  }, [formData]);

  const handleEditClick = () => {
    onEdit(); // Navigate back to editing the insurance form
  };

  const handleContinueClick = () => {
    handleContinue(); // Proceed to the next step in the stepper
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Cover Summary</h2>
      <p className="text-gray-700 mb-6 text-center">Confirm that this is the right cover for you</p>
      <div className="mb-6">
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Product</span>
          <span className="text-gray-800">{productId}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Cover type</span>
          <span className="text-gray-800">{formData?.coverType}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Basic Premium</span>
          <span className="text-gray-800">{formData?.basicPremium}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Levies & Stampduty</span>
          <span className="text-gray-800">{formData?.levies}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Vehicle Make</span>
          <span className="text-gray-800">{formData?.vehicleMake}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Vehicle Model</span>
          <span className="text-gray-800">{formData?.vehicleModel}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Year of Manufacture</span>
          <span className="text-gray-800">{formData?.yearManufacture}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Cover Start Date</span>
          <span className="text-gray-800">{formData?.coverStartDate}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Cover End Date</span>
          <span className="text-gray-800">{formData?.coverEndDate}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Period</span>
          <span className="text-gray-800">{formData?.durationCover}</span>
        </div>
        <div className="flex flex-wrap justify-between mb-2">
          <span className="text-gray-500">Valuation value (KES)</span>
          <span className="text-gray-800">{formData?.valuation}</span>
        </div>
      </div>
      <hr />
      <div className="mb-6 mt-3">
        <h3 className="text-lg font-semibold mb-2">Additional Benefits</h3>
        {formData?.additionalBenefit?.length > 0 ? (
          formData.additionalBenefit.map((benefit, index) => (
            <div key={index} className="flex flex-wrap justify-between mb-2">
              <span className="text-gray-500">{benefit}</span>
              <span className="text-gray-800">{benefit === 'Political violence & Terrorism' ? '0.25%' : 'Included'}</span>
            </div>
          ))
        ) : (
          <div className="text-gray-800">No Additional Benefits Selected</div>
        )}
      </div>
      <hr />
      <div className="text-center mb-6">
        <span className="text-xl font-md">Your Cover will be</span>
        <div className="text-2xl font-bold text-gray-800">KES. {coverAmount.toFixed(2)}</div>
      </div>
      <div className="justify-between flex items-center w-full mt-5">
        <button className="bg-gray-200 px-4 py-1 rounded-md" onClick={handleEditClick}>Edit</button>
        <button className="bg-zinc-900 px-4 py-1 text-white rounded-md" onClick={handleContinueClick}>Continue</button>
      </div>
    </div>
  );
};

export default Summary;
