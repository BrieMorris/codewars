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




