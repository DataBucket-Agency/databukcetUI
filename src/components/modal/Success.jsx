import React from 'react';

const Checking = ({ showModal, setShowModal }) => {
  return (
    <> 
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 lg:w-1/3 sm:w-[96%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Transaction Complete.</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            {/* loader */}
            <div className="flex items-center justify-center">
             <img className='h-40 w-40 ' src='./assets/success.svg' alt='..'/>
            </div>
            <p className="mt-4 text-center">Your payment for your anual insurance cover has been recieved.</p>
            <button
              className="mt-2 px-4 py-2 bg-black flex mx-auto text-white rounded-md text-center"
            >Back Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checking;
