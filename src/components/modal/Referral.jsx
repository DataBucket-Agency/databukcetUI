import React, { useState } from 'react';
import Select from 'react-select';

const Modal = ({ showModal, setShowModal }) => {
  const [agentType, setAgentType] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');

  const agentOptions = [
    { value: 'Agent1', label: 'Agent 1' },
    { value: 'Agent2', label: 'Agent 2' }
  ];

  const insuranceOptions = [
    { value: 'Britam', label: 'Britam' },
    { value: 'CIC Insurance', label: 'CIC Insurance' },
    { value: 'Old Mutual Insurance', label: 'Old Mutual Insurance' },
    { value: 'CIC', label: 'CIC' }
  ];

  const handleAgentTypeChange = (selectedOption) => {
    setAgentType(selectedOption);
  };

  const handleInsuranceCompanyChange = (selectedOption) => {
    setInsuranceCompany(selectedOption);
  };



  const handleSubmit = () => {
    setShowModal(false);
    // Handle the submission logic here
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 lg:w-1/3 sm:w-[96%]">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Broker/Agent referral </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <p className="mt-4">Enter details below if you were referred by an insurance agent or broker.</p>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Agent</label>
              <Select
                className="mt-1"
                value={agentType}
                onChange={handleAgentTypeChange}
                options={agentOptions}
                isClearable
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Insurance Company</label>
              <Select
                className="mt-1"
                value={insuranceCompany}
                onChange={handleInsuranceCompanyChange}
                options={insuranceOptions}
                isClearable
              />
            </div>
            
            <div className="mt-4 flex justify-between space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Not Referred
              </button>
              <button
                onClick={handleSubmit}
                className="bg-zinc-900 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
