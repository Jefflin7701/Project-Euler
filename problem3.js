function isPrime(number) {
  if (number % 2 === 0){
    if (number !== 2) {
      return false;
    }
  }
  for (let i = 3; i < Math.sqrt(number); i+=2) {
      if (number % i === 0) {
        return false;
      }
  }
  return true;
}

function largestPrimeFactor(number) {
  if (isPrime(number)) {
    return number;
  }
  let largestPrime = 0;
  let sqrt = Math.floor(Math.sqrt(number));
  if (sqrt % 2 === 0) {
    sqrt+=1;
  }
  for (let i = sqrt; i >= 1; i-=1) {
    if (isPrime(i) && number % i === 0) {
      return i;
    }
    else {
      continue;
    }
  }
}

largestPrimeFactor(13195);
