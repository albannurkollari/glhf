// Libraries
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';

// Helpers
import {generateClassNames} from 'web/utils/common';

// Stylesheet(s)
import './styles.css';

const Button = ({classes, disabled, id, label, role, tooltip, onChange}) => {
  const className = generateClassNames({
    [`btn-${role}`]: true,
  });

  return <button
    className={className}
    disabled={disabled}
    id={id}
    title={tooltip}
    onChange={onChange}
  >
    {label}
  </button>
};
Button.propTypes = {
  classes: PropTypes.objectOf(PropTypes.bool),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  role: PropTypes.oneOf(['accented', 'secondary', 'simple', 'toggled']),
  tooltip: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
Button.defaultProps = {
  classes: {},
  disabled: false,
  tooltip: undefined,
  id: undefined,
  role: 'accented',
  label: ''
};