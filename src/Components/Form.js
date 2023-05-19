import React, { useState } from 'react';
import "./Form.css"

const CarSellAppForm = () => {
  const [carData, setCarData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: 0,
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedFeatures = [...carData.features];
    if (checked) {
      updatedFeatures.push(value);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== value);
    }
    setCarData((prevState) => ({
      ...prevState,
      features: updatedFeatures,
    }));
  };

  const handleSliderChange = (e) => {
    const { value } = e.target;
    setCarData((prevState) => ({
      ...prevState,
      priceRange: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(carData);
      // Perform form submission logic here
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!carData.carMake.trim()) {
      errors.carMake = 'Car Make is required';
    }
    if (!carData.carModel.trim()) {
      errors.carModel = 'Car Model is required';
    }
    if (!carData.year.trim()) {
      errors.year = 'Year is required';
    }
    if (!carData.mileage.trim()) {
      errors.mileage = 'Mileage is required';
    }
    if (!carData.condition) {
      errors.condition = 'Condition is required';
    }
    if (carData.features.length === 0) {
      errors.features = 'At least one feature must be selected';
    }
    if (!carData.transmission) {
      errors.transmission = 'Transmission is required';
    }
    if (!carData.priceRange) {
      errors.priceRange = 'Price Range is required';
    }
    if (!carData.contactNumber.trim()) {
      errors.contactNumber = 'Contact Number is required';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>WELCOME ! ! !</h2>
      <div>
        <label>
          Car Make:
          <br/>
          <input
            type="text"
            name="carMake"
            value={carData.carMake}
            onChange={handleInputChange}
          />
          {errors.carMake && <div className="error">{errors.carMake}</div>}
        </label>
      </div>
      <div>
        <label>
          Car Model:
          <br/>
          <input
            type="text"
            name="carModel"
            value={carData.carModel}
            onChange={handleInputChange}
          />
          {errors.carModel && <div  className="error">{errors.carModel}</div>}
        </label>
      </div>
      <div>
        <label>
          Year:
          <br/>
          <input
            type="date"
            name="year"
            value={carData.year}
            onChange={handleInputChange}
          />
          {errors.year && <div className="error">{errors.year}</div>}
        </label>
      </div>
      <div>
        <label>
          Mileage:
          <br/>
          <input
            type="number"
            name="mileage"
            value={carData.mileage}
            onChange={handleInputChange}
          />
          {errors.mileage && <div className="error">{errors.mileage}</div>}
        </label>
      </div>
      <div>
        <label>
          Condition:
          <br/>
          <label>
            <input
              type="radio"
              name="condition"
              value="Excellent"
              checked={carData.condition === 'Excellent'}
              onChange={handleInputChange}
            />
            Excellent          
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Good"
              checked={carData.condition === 'Good'}
              onChange={handleInputChange}
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Fair"
              checked={carData.condition === 'Fair'}
              onChange={handleInputChange}
            />
            Fair
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Poor"
              checked={carData.condition === 'Poor'}
              onChange={handleInputChange}
            />
            Poor
          </label>
          {errors.condition && <div className="error">{errors.condition}</div>}
        </label>
      </div>
      <div>
        <label>
          Features:
          <br/>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Air Conditioning"
              checked={carData.features.includes('Air Conditioning')}
              onChange={handleCheckboxChange}
            />
            Air Conditioning         
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Power Steering"
              checked={carData.features.includes('Power Steering')}
              onChange={handleCheckboxChange}
            />
            Power Steering         
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Power Windows"
              checked={carData.features.includes('Power Windows')}
              onChange={handleCheckboxChange}
            />
            Power Windows         
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="features"
              value="ABS"
              checked={carData.features.includes('ABS')}
              onChange={handleCheckboxChange}
            />
            ABS          
          </label>
          <br/>
          <label>
            <input
              type="checkbox"
              name="features"
              value="Navigation System"
              checked={carData.features.includes('Navigation System')}
              onChange={handleCheckboxChange}
            />
            Navigation System
          </label>
          {errors.features && <div className="error">{errors.features}</div>}
        </label>
      </div>
      <div>
        <label>
          Transmission:
          <br/>
          <select
            name="transmission"
            value={carData.transmission}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          {errors.transmission && <div className="error">{errors.transmission}</div>}
        </label>
      </div>
      <div>
        <label>
          Price Range:
          <input
            type="range"
            name="priceRange"
            min="0"
            max="100"
            value={carData.priceRange}
            onChange={handleSliderChange}
          />
          {errors.priceRange && <div className="error">{errors.priceRange}</div>}
        </label>
      </div>
      <div>
        <label>
          Contact Number:
          <br/>
          <input
                    type="text"
            name="contactNumber"
            value={carData.contactNumber}
            onChange={handleInputChange}
          />
          {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
        </label>
      </div>
      <div>
        <button id="submit" type="submit">Sell</button>
      </div>
    </form>
  );
};

export default CarSellAppForm;
