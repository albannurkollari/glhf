// Libraries
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';

// Helpers
import {generateClassNames} from 'web/utils/common';

// Stylesheet(s)
import './styles.css';
const FOCUS_EVENTS = ['focusin', 'focusout'];

const Input = ({auto, classes, customEvents, disabled, id, label, placeholder, value, onChange}) => {
  const positioned = label ? {[`pos-${label?.pos ?? 'left'}`] : true} : {};
  const className = generateClassNames({
    'ninjaurl__common-input': true,
    ...positioned,
    ...classes
  });
  const fieldId = id ? `field-${id}` : '';

  const inputRef = useRef();
  const [isDirty, setIsDirty] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  useEffect(() => {
    if (!(inputRef.current instanceof Element)) {
      return;
    }

    const onFocus = ({type}) => setIsFocused(type === 'focusin');

    FOCUS_EVENTS.forEach(event => inputRef.current.addEventListener(event, onFocus));
    
    return () => {
      FOCUS_EVENTS.forEach(event => inputRef.current.removeEventListener(event, onFocus));
    };
  }, []);

  return <fieldset {...{...(id && {id})}} title={value}>
    <div className={className} disabled={disabled} is-dirty={isDirty.toString()}>
      {label && <label {...{...(fieldId && {htmlFor: fieldId})}}>{label?.value ?? label}</label>}
      <div className='wrapper'>
        <input
          {...{...(fieldId && {id: fieldId})}}
          ref={inputRef}
          type='text'
          autoComplete={auto}
          value={value}
          placeholder={label?.pos === 'within' && !isFocused ? '' : placeholder}
          spellCheck={false}
          onChange={({target: {value}}) => {
            setIsDirty(value !== '');
            onChange?.(value);
          }}
          {...customEvents}
        />
      </div>
    </div>
  </fieldset>;
};

Input.propTypes = {
  auto: PropTypes.oneOf(['current-password', 'new-password', 'username', 'off']),
  button: PropTypes.element,
  classes: PropTypes.objectOf(PropTypes.bool),
  customEvents: PropTypes.objectOf(PropTypes.func),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.string,
      pos: PropTypes.oneOf(['top', 'right', 'left', 'within'])
    })
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  onChange: PropTypes.func.isRequired
};
Input.defaultProps = {
  auto: 'off',
  classes: {},
  customEvents: {},
  disabled: false,
  id: undefined,
  label: undefined,
  placeholder: 'Please type something...',
  value: ''
};

export default Input;
