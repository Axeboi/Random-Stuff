let list = [1,2,3,4,5];
let size = 2;


//Function takes list and split it into parts with "size" elements.

function splitArray (list, size) {

	return list.reduce( function (accumulate, current, i, list) {
		
		if((i % size) === 0) {
			accumulate.push(list.slice(i, i + size));	
		}

		return accumulate;
		}, []);
}

console.log(splitArray(list, size));