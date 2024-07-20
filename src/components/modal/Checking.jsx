import React from 'react';
import { Circles } from 'react-loader-spinner';

const Checking = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 lg:w-1/3 sm:w-[96%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Double Insurance</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            {/* loader */}
            <div className="flex items-center justify-center">
              <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={true}
              />
            </div>
            <p className="mt-4 text-center">Checking for double insurance</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Checking;
