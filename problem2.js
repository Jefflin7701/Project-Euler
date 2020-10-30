function fiboEvenSum(n) {
    let termToAdd = 1;
    let currentTerm = 2;
    let sum = 2;
    while (currentTerm <= n) {
      let temp = termToAdd;
      termToAdd = currentTerm;
      currentTerm += temp;
  
      if (currentTerm % 2 == 0) {
        sum += currentTerm;
      }
    }
    return sum;
  }
  