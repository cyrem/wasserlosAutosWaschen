/*

only letters: onlyLetters(string)
only numbers and letters: onlyLettersAndNumbers(string)
year: isYear(string)
two words: isTwoWords(string)
name list: isNameList(string)

 */

//function test(){
//	var string="bla, bla, bla lol,g";
//	if(isNameList(string))
//		alert("true");
//	else
//		alert("false");
//}
var titelReg = "^[a-z0-9äöüÄÖÜ ]+$";
var interpretReg = "^[a-zäöüÄÖÜ ]+$";
var drehbuchReg = "^[a-zäöüÄÖÜ]+\\s[a-zäöüÄÖÜ]+$";
//var erschJahrReg = "^\d{4}$";
var songSchauReg = "^[a-zäöüÄÖÜ ,]+$";

function valString(element, valStr) {
	var retVal = new RegExp(valStr, "i").exec(element.value);
	if (retVal)return true;
	return false;
}

function valDate(element) {
//	var retVal = new RegExp(valStr).exec(element.value);
	var d = new Date();
	var n = d.getFullYear(); 
	if ((!isNaN(element.value)) && element.value >0 && element.value <= n)return true;
	return false;
}

function setErrors(arr){
	if(arr.length > 0){
	var ele;
		for(i=0;i<arr.length;i++){
			ele =document.getElementsByName(arr[i])[0];	
			ele.className = "error";
		}
		document.getElementsByName(arr[0])[0].focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
	}else{
		document.forms[0].submit();
	}	
}

function resetErrors(arr){
	if(arr.length > 0){
		var ele;
		for(i=0;i<arr.length;i++){
			ele =document.getElementsByName(arr[i])[0];	
			ele.className = "";
		}
		document.getElementsByName(arr[0])[0].focus();
	}
}


function valMusic() {
	var clear = [];
	var errors = [];
	
	if(!valString(document.getElementsByName("interpreter")[0], interpretReg)){
		errors.push("interpreter");
	}else{
		clear.push("interpreter");
	}
	if(!valString(document.getElementsByName("albumtitel")[0], titelReg)){
		errors.push("albumtitel");
	}else{
		clear.push("albumtitel");
	}
	if(!valDate(document.getElementsByName("musicerscheinungsjahr")[0])){
		errors.push("musicerscheinungsjahr");
	}else{
		clear.push("musicerscheinungsjahr");
	}
	if(!isNameList(document.getElementsByName("songs")[0].value)){
		errors.push("songs");
	}else{
		clear.push("songs");
	}
	
	resetErrors(clear);
	setErrors(errors);
}

function valMovie() {
	var clear = [];
	var errors = [];
	
	if(!valString(document.getElementsByName("filmtitel")[0], titelReg)){
		errors.push("filmtitel");
	}else{
		clear.push("filmtitel");
	}
	if(!valString(document.getElementsByName("regie")[0], drehbuchReg)){
		errors.push("regie");
	}else{
		clear.push("regie");
	}
	if(!valString(document.getElementsByName("drehbuch")[0], drehbuchReg)){
		errors.push("drehbuch");
	}else{
		clear.push("drehbuch");
	}
	if(!valDate(document.getElementsByName("filmerscheinungsjahr")[0])){
		errors.push("filmerscheinungsjahr");
	}else{
		clear.push("filmerscheinungsjahr");
	}
	if(!isNameList(document.getElementsByName("schauspieler")[0].value)){
		errors.push("schauspieler");
	}else{
		clear.push("schauspieler");
	}
	
	resetErrors(clear);
	setErrors(errors);
	 
}





function isLetter(char) {
	var value = char.charCodeAt(0);
	if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122)
			|| (value >= 128 && value <= 165))
		return true;
	return false;
}
//
//function isNumber(char) {
//	var value = char.charCodeAt(0);
//	if (value >= 48 && value <= 57)
//		return true;
//	return false;
//}
//
function isSpace(char) {
	var value = char.charCodeAt(0);
	if (value == 32)
		return true;
	return false;
}

function isComma(char) {
	var value = char.charCodeAt(0);
	if (value == 44)
		return true;
	return false;
}
//
//function onlyLetters(string) {
//	var i = 0;
//	var valid = true;
//	while (valid && i < string.length) {
//		if (!isLetter(string.charAt(i))) {
//			valid = false;
//		}
//		i++;
//	}
//	return valid;
//}
//
//function onlyLettersAndNumbers(string) {
//	var i = 0;
//	var valid = true;
//	while (valid && i < string.length) {
//		if (!isLetter(string.charAt(i)) && !isNumber(string.charAt(i))) {
//			valid = false;
//		}
//		i++;
//	}
//	return valid;
//}
//
//function onlyNumbers(string) {
//	var i = 0;
//	var valid = true;
//	while (valid && i < string.length) {
//		if (!isNumber(string.charAt(i))) {
//			valid = false;
//		}
//		i++;
//	}
//	return valid;
//}
//
//function isYear(string) {
//	var i = 0;
//	var valid = onlyNumbers(string);
//	if (valid) {
//		if (parseInt(string) > new Date().getFullYear())
//			valid = false;
//	}
//	return valid;
//}
//
//function isTwoWords(string) {
//	var gotSpace = false;
//	var i = 0;
//	var valid = true;
//	while (valid && i < string.length) {
//		if (!isLetter(string.charAt(i))) {
//			if (gotSpace) {
//				valid = false;
//			} else {
//				// no space at start and end
//				if (i != 0 && i != string.length - 1
//						&& isSpace(string.charAt(i))) {
//					gotSpace = true;
//				} else {
//					valid = false;
//				}
//			}
//		}
//		i++;
//	}
//	return (valid && gotSpace);
//}
//
function isNameList(string) {
	if(string == "")
		return false;
	var newWord = true;
	var i = 0;
	valid = true;
	comma = false;
	space = false;
	while (valid && i < string.length) {
		if (newWord) {
			if (!isLetter(string.charAt(i))) {
				valid = false;
			} else {
				newWord = false;
			}
		} else {
			if (!isLetter(string.charAt(i))) {
				// if(comma && space) is not possible here

				if (comma && !space) {
					// only space is possible
					if (isSpace(string.charAt(i))) {
						space = true;
					} else {
						valid = false;
					}
				} else if (!comma && !space) {
					// it must be a comma or space
					if (isComma(string.charAt(i))) {
						comma = true;
					} else {
						if (isSpace(string.charAt(i))) {
							space = true;
						} else {
							valid = false;
						}
					}
				} else {
					// !comma && space is not valid
					valid = false;
				}

				// new state
				if (comma && space) {
					newWord = true;
					comma = false;
					space = false;
				}

			} else {
				// reset
				comma = false
				space = false;
			}
		}
		i++;
	}
	return valid;
}