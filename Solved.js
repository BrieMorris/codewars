//7 ky

//remove vowels from a string
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//

//square numbers 
function squareDigits(num){
 //split up the number into digits then use map to write a function to square each digit
  return Number(('' + num).split('').map(function(val) {
    //then join the numbers back together
    return val * val;}).join(''));
}

//another option
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};



//8 ky

//find century - my solution
function century(year) {
  // divide year by 100 & round up to nearest interger
  let findCentury = Math.ceil(year / 100)
  //retun answer
  return findCentury;
}

//best practice
const century = year => Math.ceil(year/100)

//trun a str into a num - my solution
var stringToNumber = function(str){
  // use Number() function
  return Number(str);
}

// another option 
var stringToNumber = function(str){
  return parseInt(str);
}

//Basic Math operations - solution
function basicOp(operation, value1, value2){
  switch(operation){
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return "Invalid operation";
  }
  return 0;
}

//another option
function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}

//sum of positive
function positiveSum(arr) {
  let positiveNumArr = []
  //set an array
  for (let i=0; i < arr.length; i++){
    //if the # is greater than 0 put into new array
    if (arr[i] > 0){
      positiveNumArr.push(arr[i])

    }
  }
  //add #s
  let sum = 0
  for (let i=0; i < positiveNumArr.length; i++){
     console.log(sum)
    sum += positiveNumArr[i]
  }

  //return amount
  return sum
  
}

//reversed string
function solution(str){
  //split each letter as it's own unit
  let arry = str.split("")
  console.log(arry)
  //put letters in reverse order
  let reverse = arry.reverse()
  //join letters in a string
  let join = reverse.join("")
  return join
}

// another way


// Return negative - my solution 
function makeNegative(num) {
  // If num is positive, make it negative
  if (Math.sign(num) === 1) {
    return -Math.abs(num);
  }
  
  // If num is negative, return it as it is
  else if (Math.sign(num) === -1) {
    return num;
  }
  
  // If num is zero, return 0
  else {
    return 0;
  }
}


//shorter and best practice solution
function makeNegative(num) {
  return -Math.abs(num);
}

// convert boolean values to yes and no - my solution
function boolToWord( bool ){
  //is boolean true return "yes"
  if (bool === true) {
    return 'Yes'
  }
  //is boolean false retun 'no'
  else if (bool === false) {
    return 'No'
    }
}

//best practice solution 
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}


// remove spaces from string -- my solution 
function noSpace(x){
  //remove  outer spaces
  x = x.trim()
  // then remove inner spaces
  let removeSpaces = x.split(" ").join("")
  // return string without space
  return removeSpaces
}

// two examples of best practice
 function noSpace(x){
  return x.replace(/\s/g, '');
}

function noSpace(x){return x.split(' ').join('')}

// even or odd - my solution
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

//another option
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


//fix function multiply
//before 
function multiply(a, b){
  a * b
}

//my answer 
function multiply(a, b){
  return a * b
}

//turn num into string - my answer
function numberToString(num) {
  // Return a string of the number here!
  let makeString = num.toString()
  
  return makeString
}

//best practice answer - i keep adding an extra step to min 
function numberToString(num) {
  return num.toString();
}

// grasshopper summation 
var summation = function (num) {
  // Code here
  let sum = 0
  for (i= num; i >= 1; i--) {
    sum += i
  }
  return sum   
  
}

// best practice 
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }


  // find the addative inverse
  function opposite(number) {
 // find its oppisite by times it by -1
  let num = number * -1
  
  return num 
}

//best practice 
  function opposite(number) {
  return(-number);
}
  return result;
}

//remove first / last charcter from string - my answer
function removeChar(str){
 //remove the first/last character of string
 let remove = str.slice(1, -1)
  // return new string
  return remove

};

//repeat string as many times as the num - my answer & best practice 
function repeatStr (n, s) {
  //repeat s, n times
  
  return s.repeat(n);
}

//best practice
function removeChar(str) {
  return str.slice(1, -1);
}
