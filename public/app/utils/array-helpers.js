/**
 * function keyword was used here
 * because a dynamic scope is necessary
 */
if(!Array.prototype.$flatmap) {
  Array.prototype.$flatMap = function(cb) {
    return this
      .map(cb)
      .reduce((destArray, array) => {
        return destArray.concat(array)
      }, []);
  }
}