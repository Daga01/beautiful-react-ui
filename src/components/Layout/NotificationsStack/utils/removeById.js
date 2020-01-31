/**
 * Giving an array and the index of the element to be removed from the array itself,
 * this function returns new array without that element
 */
const removeByIndex = (id, array) => array.filter((n, index) => index !== id);


export default removeByIndex;
// non funziona perchè se ho un array di notifiche uguali me le toglie tutte, devo per forza usare l'id
//const removeById = (itemToRemove) => filter((item,array)=> !isEqual(itemToRemove,item))