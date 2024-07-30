import React, { useState, useRef, useEffect } from 'react';
import InsuranceForm from '../insuranceForm/InsuranceForm';

const Buy = ({ handleContinue, setInsuranceFormData, setProductId, onContinue}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const [setFormValid] = useState(false);

  useEffect(() => {
    // Scroll to form when showForm becomes true
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showForm]);

  // Function to handle "Buy Now" click
  const handleBuyNowClick = (productType) => {
    setSelectedProduct(productType);
    setProductId(productType)
    setShowForm(true); // Show the insurance form
  };

  // Function to handle form submission from InsuranceForm
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // After form submission, you can navigate to the next step
    setInsuranceFormData(formData) 
    handleContinue(); // Navigate to step 2 (Summary.jsx)
  };

  // Function to handle validation status from InsuranceForm
  const handleFormValid = (isValid) => {
    setFormValid(isValid);
  };

  return (
    <div className="p-6 text-center items-center justify-center bg-white lg:w-[80%] mx-auto">
      <h1 className="text-3xl font-bold">Insurance Cover Application</h1>
      <p className="mt-4">
        Secure your motor insurance today! Shield your vehicle with motor insurance to gain financial protection
        against accidents and additional risks.
      </p>
      <h2 className="mt-8 text-xl font-bold">Our Products</h2>
      <p className="mb-4">Select a product that fits you</p>

      <div className="lg:flex lg:gap-4 lg:w-[90%] items-center justify-center mx-auto">
  
  <div className="lg:w-2/3 h-auto">
    <div className="p-6 bg-white rounded-lg shadow-md lg:flex lg:justify-between lg:items-center h-auto mb-4">
      <div>
        <h3 className="font-bold text-xl">Motor Private Cover</h3>
        <button
          className="mt-2 px-4 py-2 bg-zinc-900 text-white rounded-md"
          onClick={() => handleBuyNowClick('Motor Private')}
        >
          Buy Now
        </button>
        <p className='text-sm text-green-500 mt-4'>Available</p>
      </div>
      <img src="./assets/motorprivate.svg" alt="Motor Private" className=" lg:h-64 lg:w-1/2 lg:ml-4" />
    </div>

    <div className="lg:flex lg:gap-4 lg:w-full mb-4">
      <div className="p-6 bg-white rounded-lg shadow-md lg:w-1/2 mb-4 lg:mb-0">
        <img src="./assets/motorcommercial.svg" alt="Motor Commercial" className="mx-auto h-40 lg:h-48" />
        <h3 className="mt-4 font-bold">Motor Commercial</h3>
        <button
          className="mt-2 px-4 py-2 bg-zinc-900 text-white rounded-md"
          onClick={() => handleBuyNowClick('Motor Commercial')}
        >
          Buy Now
        </button>
        <p className='text-sm text-green-500 mt-4'>Available</p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md lg:w-1/2">
        <img src="./assets/generalcartage.svg" alt="General Cartage" className="mx-auto h-40 lg:h-48" />
        <h3 className="mt-4 font-bold">General Cartage</h3>
        <button
          className="mt-2 px-4 py-2 bg-zinc-900 text-white rounded-md"
          onClick={() => handleBuyNowClick('General Cartage')}
        >
          Buy Now
        </button>
        <p className='text-sm text-red-500 mt-4'>Not Available</p>
      </div>
    </div>
  </div>

  
  <div className="lg:w-1/3 lg:h-auto space-y-4">
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img src="./assets/bodaboda.svg" alt="Bodaboda" className="mx-auto h-30 lg:h-20" />
      <h3 className="mt-4 font-bold">Bodaboda</h3>
      <button
        className="mt-2 px-4 py-2 bg-black text-white rounded-md"
        onClick={() => handleBuyNowClick('Bodaboda')}
      >
        Buy Now
      </button>
      <p className='text-sm text-red-500 mt-4'>Not Available</p>
    </div>

    <div className="p-6 bg-white rounded-lg shadow-md">
      <img src="./assets/motorbike.svg" alt="Motorcycle" className="mx-auto h-32 lg:h-41" />
      <h3 className="mt-4 font-bold">Motorcycle</h3>
      <button
        className="mt-2 px-4 py-2 bg-black text-white rounded-md"
        onClick={() => handleBuyNowClick('Motorcycle')}
      >
        Buy Now
      </button>
      <p className='text-sm text-green-500 mt-4'>Available</p>
    </div>
  </div>
</div>


      {/* Insurance Form */}
      {showForm && (
        <div ref={formRef}>
          <InsuranceForm
          onContinue={onContinue}
          handleContinue={handleContinue}
            formRef={formRef}
            setShowForm={setShowForm}
            onFormSubmit={handleFormSubmit}
            onFormValid={handleFormValid}
            selectedProduct={selectedProduct}
          />
        </div>
      )}

      {/* Continue button
      {showForm && (
        <button
          className={`mt-4 px-4 py-2 bg-zinc-900 text-white rounded-md ${formValid ? '' : 'opacity-50 cursor-not-allowed'}`}
          onClick={() => {
            if (formValid) handleContinue(); // Navigate to step 2 (Summary.jsx)
          }}
          disabled={!formValid}
        >
          Continue
        </button>
      )} */}
    </div>
  );
};

export default Buy;
