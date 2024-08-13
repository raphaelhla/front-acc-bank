import React from 'react';

const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    </>
  );
};

export default Input;
