const sanitizeArray = arr => Array.isArray(arr) ? arr : [arr];
const sanitizeCssRule = (...rule) => rule.map(letter => letter === letter.toUpperCase() ? `-${letter.toLowerCase()}` : letter).join('');
const sanitizeCss = css => css && css.constructor !== Object
  ? ''
  : Object
    .entries(css)
    .map(([rule, value]) => `${sanitizeCssRule(rule)}: ${value};`)
    .join(' ')

const METHODS = {
  LOG: 'log',
  WARN: 'warn',
  ERROR: 'error',
  TABLE: 'table',
  GROUP: 'group'
};

const DEFAULT_FORMATTING = {
  font: '24px calibri',
  background: '#dbfbbb',
  color: 'dodgerblue'
};

const logger = (messages = [], {method = METHODS.LOG} = {}) => {
  if (typeof method !== 'string' || !(console[method] instanceof Function)) {
    throw new Error('Given console method is not supported!')
  }

  sanitizeArray(messages)
    .forEach(({msg, style}) => console[method](`%c${msg}`, sanitizeCss(style || DEFAULT_FORMATTING)));
}

window.logger = logger;
