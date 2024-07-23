// Give a number 'n', find the nth element of the Fibonacci sequence.
function recursivefib(n) {
  if(n < 2) {
    return n
  }
  return recursivefib(n-1) + recursivefib(n-2)
}
console.log(recursivefib(0))
console.log(recursivefib(1))
console.log(recursivefib(6))
console.log(recursivefib(20))
console.log(recursivefib(7))