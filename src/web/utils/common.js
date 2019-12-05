export const generateClassNames = (classes = {}) => {
  if (!classes || classes.constructor !== Object) {
    throw new Error(`Expected classes to be an object but received ${classes} instead!`);
  }

  return Object
    .entries(classes)
    .filter(([_, toggled]) => toggled)
    .map(([className]) => className)
    .join(' ');
};

export const generateURL = (path, queryProps = {}, base = '') => {
  if (path && path.constructor !== String) {
    throw new Error(`Expected path to be a string but received ${path} instead!`);
  }

  if (queryProps && queryProps.constructor !== Object) {
    throw new Error(`Expected query props to be an object but received ${queryProps} instead!`);
  }

  if (base && base.constructor !== String) {
    throw new Error(`Expected URL base to be a string but received ${base} instead!`);
  }

  const {host, hostname, protocol} = location;
  base = base || `${protocol}//${host !== hostname ? host : hostname}/`;

  const url = new URL(path, base);

  if (Object.keys(queryProps).length) {
    url.search = new URLSearchParams(queryProps).toString();
  }

  return url;
};
