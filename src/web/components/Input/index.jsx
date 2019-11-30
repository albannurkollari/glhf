// Libraries
import PropTypes from 'prop-types';
import React from 'react';

// Helpers
import {generateClassNames} from 'web/utils/common';

// Stylesheet(s)
import './styles.css';

const Input = ({id, label, classes, disabled, auto, placeholder, value, onChange}) => {
  const className = generateClassNames({
    'ninjaurl__common-input': true,
    ...classes
  });
  const optionalProps = {
    ...(disabled && {disabled}),
    ...(id && {id})
  };

  return <div className={className} {...optionalProps}>
    {label &&
      <label {...{...(id && {htmlFor: id})}}>{label}</label>
    }
    <input
      type='text'
      autoComplete={auto}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={({target: {value}}) => onChange?.(value)}
    />
  </div>;
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.bool),
  auto: PropTypes.oneOf(['current-password', 'new-password', 'username', 'off']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  onChange: PropTypes.func.isRequired
};
Input.defaultProps = {
  id: undefined,
  label: undefined,
  disabled: false,
  classes: {},
  placeholder: 'Please type something...',
  auto: 'off',
  value: ''
};

export default Input;
