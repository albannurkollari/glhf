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
