// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// Sum of positive

function positiveSum(arr) {
  //   console.log(arr)
  //   let arr1 = [1,2,3,4,5,5,6]
  let sum = 0;
  //   console.log("number of array elements",arr.length)
  for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
  return sum;
}

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// Remove First and Last Character
function removeChar(str) {
  //You got this!
  console.log(str);
  //   Solution 1
  //   return str.slice(1,-1)
  //   Solution 2
  return str.slice(1, str.length - 1);

  //   indices of arrays and strings
  //   slice method
  //   length property of string
  //   basic function syntax
}
