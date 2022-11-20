// factorial 
/**
 * I/P - 5 --> O/P 120
 * 
 */

var x = 5;

var fact = 1;

var i = 1;

while(i <= x) {
  fact = fact * i;
  i++;
}

console.log(fact);


var i = x;
var fact = 1;
while(i >= 1) {
  fact = fact * i;
  i--;
}

console.log(fact);


const a = Number(line1Arr[0]);
const b = Number(line1Arr[1]);
var lcm = 1;
    
var flag = true;
var i = 1;
while (flag) {
    // console.log(i);
    if ( (a * i) % b === 0 ) {
        lcm = a * i;
        flag = false;
    }
    i++;
}

console.log(lcm);

// Revers a string
var inpStr = userInput[0];
// 01234567
// B42WEENG
    
var reverseStr = '';

for(var i=inpStr.length - 1; i >= 0; i-- ) {
    reverseStr = reverseStr + inpStr[i];
}

console.log(reverseStr);


// Find whether a string is palindrome 

// Palindrome ---> 
// RACECAR
// Reverse --> RACECAR
// a string which gives same string when reversed is called palindrome

// I/P --> MADAM
// O/P --> PALINDROME

// I/P --> B42WEENG
// O/P --> NON PALINDROME

var inpStr = 'RACECAR';

var flag = true;
    
var i=0;
var j=inpStr.length - 1;

while( i <= inpStr.length / 2 ) {
    if ( inpStr[i] !== inpStr[j] ) {
        flag = false;
        break;
    }
    i++;
    j--;
}

if (flag) {
    console.log('True');
} else {
    console.log('False');
}


// Iterating/reversing the digits of a number
var num = 989456;
    
// I/P --> 7654
/*O/P
    4
    5
    6
    7
*/

var arr = [];

while(num > 0) {
    var digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
}

console.log(arr.join(''));


// sorting in ascending order
var line1ArrStr = '9 12 8 5 16 3 1 4'.split(' ');
    
var numArr = [];

for(var i=0;i<line1ArrStr.length;i++) {
    numArr[i] = Number(line1ArrStr[i]);
}

// Bubble Sort
for(var i=0; i<numArr.length;i++) {
    
    for(var j=0;j < numArr.length - 1;j++) {
        // j, j+1
        if ( numArr[j] > numArr[j+1] ) {
            // swap the number since jth value is greater than j+1th value
            var temp = numArr[j + 1];
            
            numArr[j+1] = numArr[j];
            
            numArr[j] = temp;
        }
        
    }
    
}

console.log(numArr);


// Sorting in descending order

var line1ArrStr = '9 12 8 5 16 3 1 4'.split(' ');
    
var numArr = [];

for(var i=0;i<line1ArrStr.length;i++) {
    numArr[i] = Number(line1ArrStr[i]);
}

// Bubble Sort
for(var i=0; i<numArr.length;i++) {
    
    for(var j=0;j < numArr.length - 1;j++) {
        // j, j+1
        if ( numArr[j] < numArr[j+1] ) {
            // swap the number since jth value is greater than j+1th value
            var temp = numArr[j + 1];
            
            numArr[j+1] = numArr[j];
            
            numArr[j] = temp;
        }
        
    }
    
}

console.log(numArr);


const line1StrArr = userInput[0].split(' ');
const n = Number(line1StrArr[0]);
const w = Number(line1StrArr[1]);

const line2 = userInput[1].split(' ');

var arr = [];

for(var i=0; i<n-1; i++) {
    
    var pos = -1;
    for( var j=i; j < i+w; j++ ) {
        if ( line2[j] === '0' ) {
            pos = j+1;
            break;
        }
    }
    
    arr.push(pos);
}

console.log(arr.join(' '));