function add(numbers) {

	if(numbers == "") {
		return 0;
	}

	// Checks if the string includes either comma(s) or new line(s)
	if(numbers.includes(",") || numbers.includes("\n")) {
		
		var numberArray = numbers.split(/[,\n]/);
		var negativeArray = [];
		j = 0;
		for(var i = 0; i < numberArray.length; i++) {
			if(parseInt(numberArray[i]) < 0) {
				negativeArray[j] = parseInt(numberArray[i]);
				j++;
			}
		}
		if(negativeArray.length > 0) {
			throw new Error("Negatives not allowed: " + negativeArray.map(Number));
		}
		return sum(numberArray);
	}
	else {
		// If a number is negative, an exception is thrown
		if(parseInt(numbers) < 0) {
			throw new Error("Negatives not allowed: " + numbers);
		}
		return parseInt(numbers);
	}
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