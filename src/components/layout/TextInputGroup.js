import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} className="form-control form-control-lg" placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    </div>
  )
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.object.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;