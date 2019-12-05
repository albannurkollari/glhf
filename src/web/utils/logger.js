const METHODS = {
  LOG: 'log',
  WARN: 'warn',
  ERROR: 'error',
  TABLE: 'table',
  GROUP: 'group'
};

const DEFAULT_FORMATTING = {
  fontFamily: 'calibri',
  fontSize: '14px'
};

const PRIMITIVES = [Boolean, undefined, Number, String, null];
const isPrimitive = _var => PRIMITIVES.some(primitive => _var?.constructor === primitive);
const sanitizeArray = arr => Array.isArray(arr) ? arr : [arr];
const sanitizeCssRule = rule => rule.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
const sanitizeCss = (css = {}) => !css || css.constructor !== Object
  ? undefined
  : Object
    .entries({...DEFAULT_FORMATTING, ...css})
    .map(([rule, value]) => `${sanitizeCssRule(rule)}: ${value};`)
    .join(' ');

const logger = (messages, {method = METHODS.LOG} = {}) => {
  if (typeof method !== 'string' || !(console[method] instanceof Function)) {
    throw new Error('Given console method is not supported!')
  }

  if (isPrimitive(messages)) {
    messages = {msg: messages};
  }

  sanitizeArray(messages)
    .forEach(({msg, style, ...otherKeys}) => {
      style = sanitizeCss(style);

      if (msg === undefined) {
        const [{length: longest}] = [...Object.keys(otherKeys)].sort((a, b) => b.length - a.length);

        Object
          .entries(otherKeys)
          .forEach(([key, value]) => {
            typeof value === 'object'
              ? console[method](key, value)
              : console[method](`%c${key.padEnd(longest)} => ${value}`, style);
          });
      }
      else {
        console[method](`%c${msg}`, style);
      }
    });
}

window.logger = logger;
