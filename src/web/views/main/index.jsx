// Libraries
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';

// Components
import Input from 'web/components/Input';
import Button from 'web/components/Button';

// Helpers
import {generateURL} from 'web/utils/common';

// Stylesheet(s)
import './styles.css';

const Main = () => {
  const [url, setURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [shouldShorten, setShouldShorten] = useState(false);
  const [customEvents] = useState({
    onKeyUp: ({target: {value}, keyCode}) => {
      if (keyCode === 13) {
        setURL(value);
        setShouldShorten(value !== '');
      }
    }
  });

  useEffect(() => {
    if (!shouldShorten) {
      return;
    }

    (async () => {
      try {
        const endPoint = generateURL('shorten-url');
        const {value} = await (await fetch(endPoint, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({url})
        })).json();

        setShortenedURL(value);
      }
      catch (error) {
        console.log(error);
      }
    })();
  }, [shouldShorten]);

  return <>
    <div className='ninjaurl__headers'>
      <p>Worry not!</p>
      <p>Ninjurl will slice and dice, chop and mop your desired URL..for free!</p>
    </div>
    <Input
      id='ninjaurl__url-input'
      label={{value: 'URL', pos: 'within'}}
      value={url}
      onChange={value => setURL(value)}
      customEvents={customEvents}
    />
    <Button
      id='ninjaurl__url-shorten-btn'
      label='Shorten'
      onClick={() => setShouldShorten(url !== '')}
    />
    {shortenedURL &&
      <div className='ninjaurl__url-shortened'>
        <span className='ninjaurl__url-close-btn' onClick={() => setShortenedURL('')}>x</span>
        <a href={shortenedURL} target={'_blank'}>{generateURL(shortenedURL).toString()}</a>
      </div>
    }
  </>;
};

export default Main;
