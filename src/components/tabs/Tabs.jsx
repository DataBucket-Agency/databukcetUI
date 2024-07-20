import React, { useRef } from 'react';

const Tabs = ({ currentStep, setCurrentStep }) => {
  const tabsContainerRef = useRef(null);

  // Function to scroll to the active tab
  const scrollToActiveTab = () => {
    const activeTab = tabsContainerRef.current.children[currentStep];
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  // Scroll to active tab on initial render and whenever currentStep changes
  React.useEffect(() => {
    scrollToActiveTab();
  }, [currentStep]);

  const steps = ['Buy Insurance', 'Summary/Preview', 'Vehicle Details', 'Personal Details', 'Payments'];

  return (
    <div className="p-4 overflow-x-auto">
      <div ref={tabsContainerRef} className="flex justify-start space-x-4">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-3xl ${currentStep === index ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}
            onClick={() => setCurrentStep(index)}
            disabled={index > currentStep}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
