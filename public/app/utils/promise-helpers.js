export const handleStatus = function(res) {
  return res.ok
    ? res.json()
    : Promise.reject(res.statusText);
};
export const log = function(param) {
  console.log(param);
  return param;
};