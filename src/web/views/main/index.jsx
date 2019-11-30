// Libraries
import PropTypes from 'prop-types';
import React, {useState} from 'react';

// Components
import Input from 'web/components/Input';

const Main = () => {
  const [value, setValue] = useState('');

  return <>
    <Input
      id='bani-input'
      value={value}
      onChange={setValue}
    />
  </>;
};

export default Main;
