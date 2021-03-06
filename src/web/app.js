// Libraries
import React from 'react';
import {render} from 'react-dom';

// Views
import Footer from 'web/views/footer';
import Main from 'web/views/main';

// Stylesheet(s)
import 'web/css/reset.css';

// Helpers
import 'web/utils/logger';

/**
 * @description Start of the application.
 * @namespace GLHF
 */
(async function app() {
  // Start adding code here...
  if (logger instanceof Function) {
    logger({
      msg: 'App started',
      style: {
        fontSize: '20px',
        background: '#dbfbbb',
        color: 'dodgerblue'
      }
    });
  }

  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (!(main instanceof Element)) {
    throw new Error('Could not find the main element in DOM!');
  }

  if (!(footer instanceof Element)) {
    throw new Error('Could not find the footer element in DOM!');
  }

  render(<Main />, main);
  render(<Footer />, footer);
})();