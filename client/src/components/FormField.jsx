import React from 'react'

/**
 * Renders a form field component with optional "Surprise Me" button
 * @param {Object} props - The properties passed to the component
 * @param {string} props.labelName - The label text for the form field
 * @param {string} props.type - The input type (e.g., 'text', 'number', etc.)
 * @param {string} props.name - The name attribute for the input field
 * @param {string} props.placeholder - The placeholder text for the input field
 * @param {string} props.value - The current value of the input field
 * @param {Function} props.handelChange - The function to handle input changes
 * @param {boolean} props.isSupriseMe - Flag to show/hide the "Surprise Me" button
 * @param {Function} props.handelSupriseMe - The function to handle "Surprise Me" button click
 * @returns {JSX.Element} A form field component with label and input
 */
const FormField = ({labelName,type,name,placeholder,value,handelChange ,isSupriseMe,handelSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSupriseMe && (
          <button type="button" onClick={handelSupriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
            Suprise Me
          </button>
        )}

      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handelChange}
        required
        className='bg-lighter border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 '/>
    </div>
  )
}

export default FormField