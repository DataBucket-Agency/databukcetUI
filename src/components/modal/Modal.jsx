// Modal.jsx
import React from 'react';
import InsuranceForm from '../insuranceForm/InsuranceForm';

const Modal = ({ show, setShow, selectedProduct, setCurrentStep }) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-6">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg lg:w-[80%]">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                &times;
              </button>
              <div className="mt-4">
                <InsuranceForm setShowForm={setShow} setCurrentStep={setCurrentStep} selectedProduct={selectedProduct} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
