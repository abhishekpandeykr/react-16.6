import React from 'react';

function Input(props) {
  const { type, place, label, onChange, value } = props;
  return (
    <div>
      <input type={type} placeholder={place} label={label} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
