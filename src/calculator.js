function add(numbers) {

	if(numbers == "") {
		return 0;
	}

	// Checks if the string includes either comma(s) or new line(s)
	if(numbers.includes(",") || numbers.includes("\n")) {
		
		var numberArray = numbers.split(/[,\n]/);
		
		var valSize = [];
		valSize = validateSize(numberArray, valSize);

		if(checkNegatives(valSize) == false) {
			return sum(valSize);
		}
	}
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
}

function validateSize(numberArray, valSize) {
	j = 0;
	for(var i = 0; i < numberArray.length; i++) {
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