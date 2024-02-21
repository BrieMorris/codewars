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



