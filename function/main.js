const isPrime = n => {
    if(n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if(n % i==0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(2));

const  factorial = n =>  n ? n * factorial(n - 1) : 1;
console.log(factorial(5));

const fib = n => {
    const arr = new Array(0, 1);
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[ i - 1]);
    }
    return arr[n - 1] + arr[n - 2];
};
console.log(fib(51));

const isSorted = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                return false;
            }
        }
    }
    return true;
};
console.log(isSorted([-123, 0, 3, 9, 12, 32]));

const reverse = str => {
    const arr = str.split('');
    let newString = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newString += arr[ i ];
    }
    return newString;
};

const indexOf = (array, index) => {
    for (let key in array) {
        if (array[ key ] == index) {
            console.log(key);
        }
    }
};
console.log(indexOf([1, 2, 5], 2));

const isPalindrome = str => {
    const string = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    return string == str.split('').reverse().join('');
};
console.log('isPalindrome', isPalindrome('Text') );

const missing = arr => {
  const arrList = arr.sort((x, y) => x - y).map((x, i, me) => me[i+1]-x > 1 && x+1);
  return arrList.filter(Number);
};

console.log(missing([ 1, 3,  4 , 6]));

const isBalanced = (string) => {
    let openB = [];

    const openBrackets = new Set(['(', '[', '{']);

    const bracketCorrespondence = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let c of string) {
        if (openBrackets.has(c)) {
            openB.push(c);
        } else if (bracketCorrespondence[c] && openB.pop() !== bracketCorrespondence[c]) {
            return false;
        }
    }

    return !openB.length;
};

console.log(isBalanced('{)}'));
