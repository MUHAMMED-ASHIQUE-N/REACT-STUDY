import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { editingData } = location.state;

  const [formData, setFormData] = useState(editingData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("userData")) || [];
    const updatedData = existingData.map((item) =>
      item.email === editingData.email ? formData : item
    );
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log('Updated data:', updatedData);
    navigate('/table'); 
  };

  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <form
        onSubmit={handleSubmit}
        className='backdrop-blur-sm bg-white/20 p-12 rounded-lg shadow-lg w-[400px] flex items-center justify-center flex-col gap-4'
      >
        <div>
          <label className='block mb-1 text-white'>First Name</label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className='border p-2 w-[225px] rounded-md outline-none bg-white bg-opacity-20'
          />
        </div>
        <div>
          <label className='block mb-1 text-white'>Second Name</label>
          <input
            type='text'
            name='secondName'
            value={formData.secondName}
            onChange={handleChange}
            className='border p-2 w-[225px] rounded-md outline-none bg-white bg-opacity-20'
          />
        </div>
        <div>
          <label className='block mb-1 text-white'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='border p-2 w-[225px] rounded-md outline-none bg-white bg-opacity-20'
          />
        </div>
        <div>
          <label className='block mb-1 text-white'>Phone Number</label>
          <input
            type='number'
            name='mobileNumber'
            value={formData.mobileNumber}
            onChange={handleChange}
            className='border p-2 w-[225px] rounded-md outline-none bg-white bg-opacity-20'
          />
        </div>
        <div>
          <label className='block mb-1 text-white'>Gender</label>
          <div className='flex space-x-4'>
            <label className='flex items-center text-white'>
              <input
                type='radio'
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className='mr-2'
              />
              Male
            </label>
            <label className='flex items-center text-white'>
              <input
                type='radio'
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className='mr-2'
              />
              Female
            </label>
            <label className='flex items-center text-white'>
              <input
                type='radio'
                name='gender'
                value='other'
                checked={formData.gender === 'other'}
                onChange={handleChange}
                className='mr-2'
              />
              Other
            </label>
          </div>
        </div>
        <div className='flex space-x-4 pt-4'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Save
          </button>
          <button
            type='button'
            onClick={() => navigate('/table')}
            className='bg-gray-500 text-white px-4 py-2 rounded-md'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;