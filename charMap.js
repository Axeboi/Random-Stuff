const string = "hello world";

const result = string.split('').reduce( (map, char) => {

	map[char] = (map[char] || 0) + 1; 

	return map;

}, {})

console.log(result);