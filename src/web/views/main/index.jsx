// Libraries
import PropTypes from 'prop-types';
import React, {useState} from 'react';

// Components
import Input from 'web/components/Input';

// Stylesheet(s)
import './styles.css';

const Main = () => {
  const [value, setValue] = useState('');

  return <>
    <Input
      /* label={{value: 'URL', pos: 'within'}} */
      label='URL'
      id='bani-input'
      value={value}
      onChange={setValue}
    />
  </>;
};

export default Main;
