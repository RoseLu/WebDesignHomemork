/*1*/
// function max(x, y) {
// 	if (x > y) {
// 		return "the largest number of x and y is: " + x;
// 	} else if (x < y) {
// 		return "the largest number of x and y is: " + y;
// 	} else {
// 		return "the two numbers are both equal to: " + x;
// 	}
// }

// var x = prompt("Please type x: ");
// var y = prompt("Please type y: ");
// alert(max(x, y));

/*2*/
// function maxOfThree(x, y, z) {
// 	var max;
//     if (x > y) {
//     	if (x > z) {
//     		max = x;
//     	} else {
//     		max = z;
//     	}
//     } else {
//     	if (y > z) {
//     		max = y;
//     	} else {
//     		max = z;
//     	}
//     }
//     return "The max of three number is:" + max;
// }
// var x = prompt("Please type x:");
// var y = prompt("Please type y:");
// var z = prompt("Please type z:");
// alert(maxOfThree(x,y,z));

/*3*/
// function vowelOrNot(x) {
// 	if (typeof x != "string" || x.length != 1) {
// 		return "input is not a character";
// 	}
// 	var mySet = new Set();
// 	mySet.add("a");
// 	mySet.add("e");
// 	mySet.add("i");
// 	mySet.add("o");
// 	mySet.add("u");
// 	mySet.add("A");
// 	mySet.add("E");
// 	mySet.add("I");
// 	mySet.add("O");
// 	mySet.add("U");
// 	if (mySet.has(x)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// var x = prompt("Please type in a character:");
// if (vowelOrNot(x)) {
// 	alert("It is a vowel");
// } else {
// 	alert("It is not a vowel");
// }

/*4*/
// function translate(s) {
// 	var mySet = new Set();
// 	mySet.add("a");
// 	mySet.add("e");
// 	mySet.add("i");
// 	mySet.add("o");
// 	mySet.add("u");
// 	mySet.add("A");
// 	mySet.add("E");
// 	mySet.add("I");
// 	mySet.add("O");
// 	mySet.add("U");

// 	var arr = s.split("");
// 	var result = "";
// 	var i;
// 	for (i = 0; i < arr.length; i++) {
//         result += arr[i];
//         if (arr[i] == " " || mySet.has(arr[i])) {
//         	continue;
//         } else {
//         	result += "o" + arr[i];
//         }
// 	}
// 	alert("The transalte result is: " + result);
// }
// var s = prompt("Please type some text");
// if (s == null || s.length == 0 || s == "") {
// 	alert("Your input is empty!");
// } else {
// 	translate(s);
// }

/*5*/
// function isArray(arr) {
// 	if (arr == null || typeof arr == "undefined") {
// 		return false;
// 	}
// 	return arr.constructor === Array;
// }
// function stringToIntegerArray(str) {
// 	if (str == null || str.length == 0) {
// 		alert("Array is Empty. Please type!");
// 		return;
// 	}
// 	var dataStrArray = str.split(",").map(Number);
//     return dataStrArray;
// }
// function sum(arr) {
//     var i;
//     var sum = 0;
//     for (i = 0; i < arr.length; i++) {
//     	sum = sum + arr[i];
//     }
//     alert("The sum of the array is :" + sum);
// }
// function multiply(arr) {
//     var i;
//     var product = 1;
//     for (i = 0; i < arr.length; i++) {
//     	product *= arr[i];
//     }
//     alert("The product of the array is :" + product);
// }
// var str = prompt("Please input an integer array (seperate by comma) ");
// var arr = stringToIntegerArray(str);
// sum(arr);
// multiply(arr);
/*6*/
// function reverse(str) {
// 	if (str == null || str.length == 0) {
// 		alert("String cannot be empty!");
// 		return;
// 	}
// 	var arr = str.split("");
// 	alert(arr.reverse().join(""));
// }
// var str = prompt("Please type in a string: ");
// reverse(str);
/*7*/
// function translateChristmasCard(christmasCard) {
// 	var arr = christmasCard.split(" ");
// 	var result = "";
// 	var i;
// 	for (i = 0; i < arr.length; i++) {
// 		if (dictionary.hasOwnProperty(arr[i])) {
// 			result += dictionary[arr[i]] + " ";
// 		}
// 	}
// 	alert(result.trim());
// }
// var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
// var christmasCard = prompt("Please type: merry christmas and happy new year");
// translateChristmasCard(christmasCard);
/*8*/
// function findLongestWord(str) {
// 	var maxLength = 0;
// 	var arr = str.split(" ");
// 	var i;
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i].length > maxLength) {
// 			maxLength = arr[i].length;
// 		}
// 	}
// 	return maxLength;
// }
// var str = prompt("Please type in a string: ");
// alert(findLongestWord(str));
/*9*/
// function filterLongWords(str, i) {
// 	var resultArray = [];
// 	var arr = str.split(" ");
// 	var minLength = parseInt(i);
// 	if (arr.length == 0) {
// 		return resultArray;
// 	}
// 	var i;

// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i].length > minLength) {
// 			resultArray.push(arr[i]);
// 		}
// 	}
// 	return resultArray;
// }
// var str = prompt("Please type in a string");
// var i = prompt("Please type in the min length of a word");
// alert("Result is: " + filterLongWords(str, i));
/*10*/
function charFreq(str) {
	var result = new Object();
	if (str == null || str.length == 0) {
		return result;
	}
	var arr = str.split("");
	var i;
	for (i = 0; i < arr.length; i++) {
		if (result.hasOwnProperty(arr[i])) {
			result[arr[i]] += 1;
		} else {
			result[arr[i]] = 1;
		}
	}
	return result;
}
function printObject(object) {
	var res = "";
	for (var property in object) {
		res += property + ":" + object[property] + '\n';
	}
	return res;
}
var str = prompt("Please type in a string");
alert(printObject(charFreq(str)));


