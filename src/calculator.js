function add(numbers) {

	if(numbers == "") {
		return 0;
	}

	if(numbers.includes(",")) {
		var numberArray = numbers.split(",");
		var sum = 0;
		for(var i = 0; i < numberArray.length; i++) {
			sum += parseInt(numberArray[i]);
		}
		return sum;
	}

	return parseInt(numbers);
}

module.exports = add;