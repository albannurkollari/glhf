// Libraries
import PropTypes from 'prop-types';
import React, {useState} from 'react';

// Components
import Input from 'web/components/Input';

// Stylesheet(s)
import './styles.css';

const Main = () => {
  const [{username, password}, setCredentials] = useState({
    username: '',
    password: ''
  });

  return <>
    <Input
      /* label={{value: 'URL', pos: 'within'}} */
      label='Username'
      id='myproj-username'
      value={username}
      onChange={username => setCredentials({username, password})}
    />
    <Input
      /* label={{value: 'URL', pos: 'within'}} */
      label='Password'
      id='myproj-password'
      value={password}
      onChange={password => setCredentials({username, password})}
    />
  </>;
};

export default Main;
