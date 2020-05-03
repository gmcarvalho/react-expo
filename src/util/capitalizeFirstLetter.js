/**
 * Transforma primeira palavra em maiscula
 * @param {*} string 
 */
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
}