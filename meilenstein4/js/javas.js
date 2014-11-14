/*

only letters: onlyLetters(string)
only numbers and letters: onlyLettersAndNumbers(string)
year: isYear(string)
two words: isTwoWords(string)
name list: isNameList(string)

 */

function test(){
	var string="bla, bla, bla lol,g";
	if(isNameList(string))
		alert("true");
	else
		alert("false");
}

function isLetter(char){
	var value=char.charCodeAt(0);
	if((value>=65 && value<=90) || (value>=97 && value<=122) || (value>=128 && value<=165))
		return true;
	return false;
}

function isNumber(char){
	var value=char.charCodeAt(0);
	if(value>=48 && value<=57)
		return true;
	return false;
}

function isSpace(char){
	var value=char.charCodeAt(0);
	if(value==32)
		return true;
	return false;
}

function isComma(char){
	var value=char.charCodeAt(0);
	if(value==44)
		return true;
	return false;
}

function onlyLetters(string){
	var i=0;
	var valid=true;
	while(valid && i<string.length){
		if(!isLetter(string.charAt(i))){
			valid=false;
		}
		i++;
	}
	return valid;
}

function onlyLettersAndNumbers(string){
	var i=0;
	var valid=true;
	while(valid && i<string.length){
		if(!isLetter(string.charAt(i)) && !isNumber(string.charAt(i))){
			valid=false;
		}
		i++;
	}
	return valid;
}

function onlyNumbers(string){
	var i=0;
	var valid=true;
	while(valid && i<string.length){
		if(!isNumber(string.charAt(i))){
			valid=false;
		}
		i++;
	}
	return valid;
}

function isYear(string){
	var i=0;
	var valid=onlyNumbers(string);
	if(valid){
		if(parseInt(string)>new Date().getFullYear())
			valid=false;
	}
	return valid;
}

function isTwoWords(string){
	var gotSpace=false;
	var i=0;
	var valid=true;
	while(valid && i<string.length){
		if(!isLetter(string.charAt(i))){
			if(gotSpace){
				valid=false;
			}else{
				//no space at start and end
				if(i!=0 && i!=string.length-1 && isSpace(string.charAt(i))){
					gotSpace=true;
				}else{
					valid=false;
				}
			}
		}
		i++;
	}
	return (valid && gotSpace);
}

function isNameList(string){
	var newWord=true;
	var i=0;
	valid=true;
	comma=false;
	space=false;
	while(valid && i<string.length){
		if(newWord){
			if(!isLetter(string.charAt(i))){
				valid=false;
			}else{
				newWord=false;
			}
		}else{
			if(!isLetter(string.charAt(i))){
				//if(comma && space) is not possible here
				
				if(comma && !space){
					//only space is possible
					if(isSpace(string.charAt(i))){
						space=true;
					}else{
						valid=false;
					}
				}else
				if(!comma && !space){
					//it must be a comma or space
					if(isComma(string.charAt(i))){
						comma=true;
					}else{
						if(isSpace(string.charAt(i))){
							space=true;
						}else{
							valid=false;
						}
					}
				}else{
					//!comma && space is not valid
					valid=false;
				}
				
				//new state
				if(comma && space){
					newWord=true;
					comma=false;
					space=false;
				}
				
			}else{
				//reset
				comma=false
				space=false;
			}
		}
		i++;
	}
	return valid;
}