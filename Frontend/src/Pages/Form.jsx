import React, { useState } from 'react';

import '../components/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    riskApetite: 'medium',
    phone: '',
    email: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please upload a file');
      return;
    }

    // Simulate form data processing instead of sending to a server
    console.log('Form data:', formData);
    console.log('Selected file:', selectedFile);

    alert('Form data processed locally.');
  };

  return (
    <section className='font-suse text-md p-4 md:p-6 rounded-lg shadow-md'>
      <div className="text-3xl font-black text-gray-400 pb-2">FORM</div>
      <form onSubmit={handleSubmit} className="space-y-6 pl-0 pr-0 md:pl-[25vw] md:pr-[25vw]">
        
        {/* Input fields */}
        <div>
          <label htmlFor="name" className="block text-lg text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 bg-gray-50"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-lg text-gray-700">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 bg-gray-50"
            required
          />
        </div>

        <div>
          <label className="block text-lg text-gray-700">Risk Appetite:</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center text-gray-600">
              <input
                type="radio"
                name="riskApetite"
                value="high"
                checked={formData.riskApetite === 'high'}
                onChange={handleChange}
                className="custom-radio"
              />
              <span className="ml-2">High</span>
            </label>
            <label className="inline-flex items-center text-gray-600">
              <input
                type="radio"
                name="riskApetite"
                value="medium"
                checked={formData.riskApetite === 'medium'}
                onChange={handleChange}
                className="custom-radio"
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center text-gray-600">
              <input
                type="radio"
                name="riskApetite"
                value="low"
                checked={formData.riskApetite === 'low'}
                onChange={handleChange}
                className="custom-radio"
              />
              <span className="ml-2">Low</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-lg text-gray-700">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 bg-gray-50"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 bg-gray-50"
            required
          />
        </div>

        {/* File upload */}
        <div>
          <label htmlFor="file" className="block text-lg text-gray-700">Upload Excel File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".xlsx, .xls"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 bg-gray-50"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="sub_button w-full py-3 bg-black text-white rounded">
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Form;
