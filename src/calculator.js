function add(numbers) {

	if(numbers == "") {
		return 0;
	}

	if(numbers.includes(",")) {
		var numberArray = numbers.split(",");
		return parseInt(numberArray[0]) + parseInt(numberArray[1]);
	}

	return parseInt(numbers);
}

module.exports = add;