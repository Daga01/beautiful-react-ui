/**
 * Giving an array and the index of the element to be removed from the array itself,
 * this function returns new array without that element
 */
const removeByIndex = (id, array) => array.filter((n, index) => index !== id);


export default removeByIndex;