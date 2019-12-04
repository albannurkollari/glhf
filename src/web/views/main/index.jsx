// Libraries
import PropTypes from 'prop-types';
import React, {useState} from 'react';

// Components
import Input from 'web/components/Input';
import Button from 'web/components/Button';

// Stylesheet(s)
import './styles.css';

const Main = () => {
  const [{username, password}, setCredentials] = useState({
    username: '',
    password: ''
  });

  return <>
    <Input
      id='myproj-username'
      label={{value: 'URL', pos: 'within'}}
      value={username}
      onChange={username => setCredentials({username, password})}
    />
    <Button
      id='myproj-shorten-url' />
  </>;
};

export default Main;
