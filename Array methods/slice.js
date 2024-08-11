// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 const array = [1,2,3,4,5,6,7,8,9]
 const newArray = array.slice(1,3)
 const secondArray = array.slice(0,8) // 8th element is not included
 
 console.log(newArray);
 console.log(secondArray);
 
