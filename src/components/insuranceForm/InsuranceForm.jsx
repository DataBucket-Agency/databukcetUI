import React, { useState } from 'react';
import dayjs from 'dayjs';

const InsuranceForm = ({ formRef, setShowForm, handleContinue, selectedProduct, onContinue, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    coverType: '',
    vehicleMake: '',
    vehicleModel: '',
    yearManufacture: '2015',
    coverStartDate: '',
    coverEndDate: '',
    valuation: '',
    durationCover: '',
    additionalBenefit: [],
  });

  const [coverDuration, setCoverDuration] = useState('');
  const [errors, setErrors] = useState({});
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value),
      }));
    } else if (name === 'coverStartDate') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      if (coverDuration) {
        handleDurationChange(coverDuration, value);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const annualCover = parseFloat(formData.valuation) * 0.05;
    const newErrors = {};

    if (!formData.coverType) newErrors.coverType = 'Please select a cover type';
    if (!formData.vehicleMake) newErrors.vehicleMake = 'Please select a vehicle make';
    if (!formData.vehicleModel) newErrors.vehicleModel = 'Please select a vehicle model';
    if (!formData.yearManufacture) newErrors.yearManufacture = 'Please select a year of manufacture';
    if (!formData.coverStartDate) newErrors.coverStartDate = 'Please select a cover start date';
    if (formData.coverType === 'Comprehensive' && !formData.valuation) newErrors.valuation = 'Please enter a valuation';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        annualCover: annualCover.toFixed(2),
      }));
      onFormSubmit(formData);
      handleContinue();
    }
  };

  const handleReset = () => {
    setFormData({
      coverType: '',
      vehicleMake: '',
      vehicleModel: '',
      yearManufacture: '2015',
      coverStartDate: '',
      coverEndDate: '',
      valuation: '',
      durationCover: '',
      additionalBenefit: [],
    });
    setCoverDuration('');
    setErrors({});
  };

  const handleDurationChange = (duration, startDate) => {
    const start = dayjs(startDate || formData.coverStartDate);
    let endDate;
    if (duration === '1 Month') {
      endDate = start.add(1, 'month').subtract(1, 'day');
    } else if (duration === '6 Months') {
      endDate = start.add(6, 'months').subtract(1, 'day');
    } else if (duration === '1 Year') {
      endDate = start.add(1, 'year').subtract(1, 'day');
    }
    setCoverDuration(duration);
    setFormData((prevData) => ({
      ...prevData,
      durationCover: duration,
      coverEndDate: endDate ? endDate.format('DD/MM/YYYY') : '',
    }));
  };

  const renderAdditionalBenefits = () => {
    const benefits = [
      "Political violence & Terrorism",
      "Excess Protector",
      "PLL"
    ];
    let availableBenefits = [];

    if (formData.coverType === 'Comprehensive') {
      availableBenefits = benefits;
    } else if (formData.coverType === 'Third Party') {
      availableBenefits = ['PLL'];
    }

    return availableBenefits.map((benefit) => (
      <label key={benefit} className="inline-flex items-center mr-4">
        <input
          type="checkbox"
          name="additionalBenefit"
          value={benefit}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={formData.additionalBenefit.includes(benefit)}
        />
        <span className="ml-2">{benefit}</span>
      </label>
    ));
  };

  return (
    <div className="mt-4 p-4 border rounded-md shadow-md" ref={formRef}>
      <form onSubmit={handleSubmit} className="lg:w-[80%] mx-auto">
        <p>Finding a cover that is suitable for you.</p>
        <div className="mx-auto lg:gap-10 sm:w-full mt-3">
          <div className="">
            <div className="mb-4">
              <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                Insurance Cover Type
              </label>
              <div className="flex">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="coverType"
                    value="Comprehensive"
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={formData.coverType === 'Comprehensive'}
                  />
                  <span className="ml-2">Comprehensive</span>
                </label>
                <label className="inline-flex text-start mb-2 items-center mr-4">
                  <input
                    type="radio"
                    name="coverType"
                    value="Third Party"
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={formData.coverType === 'Third Party'}
                  />
                  <span className="ml-2">Third Party</span>
                </label>
                <label className="inline-flex text-start mb-2 items-center">
                  <input
                    type="radio"
                    name="coverType"
                    value="TOR"
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={formData.coverType === 'TOR'}
                  />
                  <span className="ml-2">TOR</span>
                </label>
              </div>
              {errors.coverType && <p className="text-red-500 text-sm">{errors.coverType}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                Vehicle Make
              </label>
              <input
                type="text"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                placeholder="e.g., Toyota"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.vehicleMake && <p className="text-red-500 text-sm">{errors.vehicleMake}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                Vehicle Model
              </label>
              <input
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder="e.g., Vitz"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.vehicleModel && <p className="text-red-500 text-sm">{errors.vehicleModel}</p>}
            </div>
          </div>

          <div className="">
            <div className="mb-2">
              <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                Year of Manufacture
              </label>
              <select
                name="yearManufacture"
                value={formData.yearManufacture}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Year of Manufacture</option>
                {years.length > 0 ? (
                  years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))
                ) : (
                  <option disabled>No years available</option>
                )}
              </select>
              {errors.yearManufacture && <p className="text-red-500 text-sm">{errors.yearManufacture}</p>}
            </div>

            <div className="p-1">
              <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                Cover Start Date
              </label>
              <input
                type="date"
                name="coverStartDate"
                value={formData.coverStartDate}
                onChange={handleChange}
                min={dayjs().format('YYYY-MM-DD')}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.coverStartDate && <p className="text-red-500 text-sm">{errors.coverStartDate}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                Cover End Date
              </label>
              <div className="flex space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="duration"
                    value="1 Month"
                    checked={coverDuration === '1 Month'}
                    onChange={() => handleDurationChange('1 Month')}
                    className="form-radio"
                  />
                  <span className="ml-2">1 Month</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="duration"
                    value="6 Months"
                    checked={coverDuration === '6 Months'}
                    onChange={() => handleDurationChange('6 Months')}
                    className="form-radio"
                  />
                  <span className="ml-2">6 Months</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="duration"
                    value="1 Year"
                    checked={coverDuration === '1 Year'}
                    onChange={() => handleDurationChange('1 Year')}
                    className="form-radio"
                  />
                  <span className="ml-2">1 Year</span>
                </label>
              </div>
              <input
                type="text"
                name="coverEndDate"
                value={formData.coverEndDate}
                readOnly
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {formData.coverType === 'Comprehensive' && (
              <div className="mb-4">
                <label className="block text-sm text-start mb-2 font-medium text-gray-700">
                  Valuation Value (KES)
                </label>
                <input
                  type="text"
                  name="valuation"
                  value={formData.valuation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.valuation && <p className="text-red-500 text-sm">{errors.valuation}</p>}
              </div>
            )}
          </div>

          <div className="mt-4">
            <h3>Additional Benefits</h3>
            <div>
              {renderAdditionalBenefits()}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setShowForm(false)}
          >
            Back
          </button>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Continue
            </button>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InsuranceForm;
