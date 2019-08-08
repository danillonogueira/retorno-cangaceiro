export const partialize = function(fn, ...params) {
  return fn.bind(null, ...params);
};
export const compose = function(...fns) {
  return (value) => {
    return fns.reduceRight((previousValue, fn) => {
      return fn(previousValue)
    }, value);
  };
};