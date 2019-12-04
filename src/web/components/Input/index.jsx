// Libraries
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';

// Helpers
import {generateClassNames} from 'web/utils/common';

// Stylesheet(s)
import './styles.css';
const FOCUS_EVENTS = ['focusin', 'focusout'];

const Input = ({id, label, classes, disabled, auto, placeholder, value, onChange}) => {
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

  logger(isFocused);

  return <fieldset {...{...(id && {id})}}>
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
        />
      </div>
    </div>
  </fieldset>;
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.string,
      pos: PropTypes.oneOf(['top', 'right', 'left', 'within'])
    })
  ]),
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
