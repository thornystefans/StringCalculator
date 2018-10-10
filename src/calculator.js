function add(numbers) {

	if(numbers == "") {
		return 0;
	}

	var numberArray = [];
	// Checks if there is a custom delimiter
	if(numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
		// Creates a variable of the third character of the string
		// representing the delimiter
		var delimiter = numbers.charAt(2);
		// Slices off the first three characters, leaves the rest in the string
		var numbers = numbers.slice(4, numbers.length);
		// Splits on the custom delimiter as well as on "," and "\n"
		numberArray = numbers.split(delimiter).join(/[,\n]/);
	}

	// Checks if the string includes either comma(s) or new line(s)
	else if(numbers.includes(",") || numbers.includes("\n")) {
		numberArray = numbers.split(/[,\n]/);	
	}
	// Case for a single number
	else {
		// If a number is negative, an exception is thrown
		if(parseInt(numbers) < 0) {
			throw new Error("Negatives not allowed: " + numbers);
		}
		else if(parseInt(numbers) > 1000) {
			return 0;
		}
		return parseInt(numbers);
	}
	var valSize = [];
	valSize = validateSize(numberArray, valSize);

	if(checkNegatives(valSize) == false) {
		return sum(valSize);
	}
}

// Ignores all numbers bigger than 1000
function validateSize(numberArray, valSize) {
	j = 0;
	for(var i = 0; i < numberArray.length; i++) {
		// Add all numbers less or equal than 1000 to an array
		if(parseInt(numberArray[i]) <= 1000) {
			valSize[j] = parseInt(numberArray[i]);
			j++;
		}
	}
	return valSize;
}

// Checking if there are any negative numbers
function checkNegatives(numberArray) {
	var negativeArray = [];
	j = 0;
	for(var i = 0; i < numberArray.length; i++) {
		if(parseInt(numberArray[i]) < 0) {
			// Adding all negative numbers to an array
			negativeArray[j] = parseInt(numberArray[i]);
			j++;
		}
	}
	// If there is anything in the array, an exception is thrown
	if(negativeArray.length > 0) {
		throw new Error("Negatives not allowed: " + negativeArray.map(Number));
	}
	return false;
}

// Calculates the sum of all given numbers
function sum(numberArray) {
	var total = 0;
	for(var i = 0; i < numberArray.length; i++) {
		total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;