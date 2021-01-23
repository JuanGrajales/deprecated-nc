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
