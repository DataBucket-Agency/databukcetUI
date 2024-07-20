import React, { useState} from 'react';
import Header from '../../components/header/Header';
import Tabs from '../../components/tabs/Tabs';
import Buy from '../../components/buyInsurance/Buy';
import Summary from '../../components/summary/Summary';
import Vehicle from '../../components/details/Vehicle';
import Personal from '../../components/details/Personal';
import Payment from '../../components/payment/Payment';
import Modal from '../../components/modal/Referral';
// import Checking from '../../components/modal/Checking';
// import Fail from '../../components/modal/Fail'
// import Success from '../../components/modal/Success'

const Home = () => {
  const [showModal, setShowModal] = useState(true); // Initially show the modal
  const [currentStep, setCurrentStep] = useState(0);
  const [insuranceFormData, setInsuranceFormData] = useState(null);
  const [productId, setProductId] = useState(null);
  

  function handleInsuranceFormSubmit(e) {
    const formData = new FormData(e.target)
    const formDataJSON = Object.fromEntries(formData)
    setInsuranceFormData(formDataJSON);
    handleContinueClick(); // Move to step 1 (Summary/Preview)
    console.log(formDataJSON);
  }
  

  function handleBackClick() {
    setCurrentStep(currentStep-1); // Go back to step 1 (Summary/Preview)
  }

  function handleContinueClick() {
    setCurrentStep(currentStep + 1); // Move to the next step in the stepper
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <Buy onContinue={handleInsuranceFormSubmit} handleContinue={handleContinueClick} setInsuranceFormData={setInsuranceFormData} setProductId={setProductId}/>;
      case 1:
        return <Summary formData={insuranceFormData} onEdit={handleBackClick} handleContinue={handleContinueClick} productId={productId}/>;
      case 2:
        return <Vehicle onBack={handleBackClick} handleContinue={handleContinueClick}/>;
      case 3:
        return <Personal onBack={handleBackClick} handleContinue={handleContinueClick}/>;
      case 4:
        return <Payment onBack={handleBackClick} handleContinue={handleContinueClick}/>;
      default:
        return null
    }
  };
console.log(productId);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="bg-white mt-3 mb-3 lg:w-[80%] items-center justify-center mx-auto p-4 rounded-md">
        <Tabs currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="bg-white lg:w-[80%] mx-auto">
        
        {renderStepContent()}
      </div>
    </div>
  );
};

export default Home;
