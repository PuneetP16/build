  //EASY

//1
// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// const power = (a,b) => a ** b
// power(2,3)

//2

// Given length of a regular hexagon, your function should return area of the hexagon.

// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// const areaOfHexagon = a => (3 * Math.sqrt(3) * (a**2))/2
// areaOfHexagon(10)


// 3

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

// const noOfLetters = sentence => {
//   let count = 0;
//   for (let char of sentence) {
//     if (char !== " ")
//       count += 1
//   }
//   return count
// }

// noOfLetters('We are neoGrammers')


// const noOfWords = sentence => sentence.split(' ').push()

// noOfWords('We are neoGrammers')

// 4

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)


// const findMin = (...numbers) => Math.min(...numbers)  
// findMin(3,5,9,1)
// findMin(3,5,9,9,5,3,6,7,8,20)

// 5

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// const findMax = (...numbers) => Math.max(...numbers)  
// findMax(3,5)
// findMax(3,5,9,1)

// 6

// Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

// const typeOfTriangle = (a, b, c) => { 
//   if ((a+b+c) != 180) {
//     return `Not a Triangle`
//   }
//   else {
//   if (a == 60 && a === b && b === c) {
//     return `Equilateral Triangle`
//   }

//   if (a === b || b === c) {
//     return `isosceles Triangle`
//   }

//   if (a == 30 && b === 60 && c === 90) {
//     return `Scalene Triangle`
//   }
//   }
// }


// // typeOfTriangle(60, 60, 60);
// // typeOfTriangle(30, 60, 90);
// typeOfTriangle(30, 30, 90);


// Medium


//1 


// Given an array, your function should return the length of the array.

// const arrayLength = (list) => list.push()
// arrayLength([1,5,3,7,8])


//2

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2


// const indexOf = (list, item) => list.indexOf(item)
// indexOf([1,6,3,5,8,9], 3)



//3

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]


// const replace = (arr, firstNum, secondNum) => { arr = arr.toString() 
// return arr.replace(/5/g, secondNum)
// }


// replace([1,5,3,5,6,8], 5, 10)


// 4

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]


// const mergeArray = (arr1, arr2) => [...arr1, ...arr2]
// mergeArray([1,3,5], [2,4,6])


// 5

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c


// const charAt = (str, i) => str[i] 

// charAt("neoGcamp", 4)


// 6

// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021


//logic
// 1. get day, month and year in variables as int from both dates.
      // a. using split function and map(Number) get dates in array as int.
      // b. destructure array into day, month and year.
 //2. branching
  // if year is equal, check for month, if month is equal check for day, if day is equal, return any date.
    //if year is not equal, return date which has lower year value.
    //if year is equal and month is not equal, return date which has lower month value.
    //if both year and month are equal and day is not equal, return date which has lower day value.

// const minDate = (dateOne, dateTwo) => {
    //destructuring
    // let [dayOne, monthOne, yearOne] = dateOne.split("/").map(Number);
    // let [dayTwo, monthTwo, yearTwo] = dateTwo.split("/").map(Number);
    // if year is equal, check for month, if month is equal check for day, if day is equal, return any date.
    //if year is not equal, return date which has lower year value.
    //if year is equal and month is not equal, return date which has lower month value.
    //if both year and month are equal and day is not equal, return date which has lower day value.
//     if (yearOne === yearTwo) 
//       if (monthOne === monthTwo)
//         if (dayOne === dayTwo)
//           return dateOne;
//         else return (dayOne < dayTwo) ? dateOne:dateTwo;
//        else return (monthOne < monthTwo) ? dateOne:dateTwo;
//     else return (yearOne < yearTwo) ? dateOne:dateTwo;
//   }
//     // console.log(typeof dayOne)
// console.log(minDate('02/05/2021', '24/01/2021'))
// console.log(minDate('20006/01/2021', '2005/011/20211'))
// console.log(minDate('20/01/2021', '2005/011/20211'))
// console.log(minDate('20006/01/22021', '2005/011/20211'))
// console.log(minDate('20006/025251/20212', '2005/011/20211'))




// Advanced

// 1

// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor


//logic
// word and sentence: string of character and spaces
// shifting index: number

//create two array of 26 aplphabets one contaning small a to z and another containing capital A to Z each.

//for each character of word, find index of that character in the respective array
// add the shifting number
// find character with that number as index
//log that number
// if number is greater than 26, restart the count from 1

// a == a.toLowerCase() ? alph[(alph.indexOf(a) + shift) % 25]:alph.toUpperCase()[(alph.toUpperCase().indexOf(a) + shift) % 25]

const alph = 'abcdefghijklmnopqrstuvwxyz';
const b = "b"
const encodeStringOneLiner = (word, shift) => word.split('')  
                                              .map(a => (alph+
                                              alph.toUpperCase()).split('')
                                              .some(b => b === a) 
                                              ? a == a.toLowerCase() 
                                              ? alph[(alph.indexOf(a) + shift) % 25]:alph.toUpperCase()[(alph.toUpperCase().indexOf(a) + shift) % 25]:a).join('')
  
console.log('Oneliner Output: ', encodeStringOneLiner("neogcampNEOGcAMP! $gh dfdf$$%^", 2))

console.log((alph+alph.toUpperCase()).split('').some(a => a === "#"))

const  capAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z']
const smallAlpha = capAlpha.map((char) => char.toLowerCase() )
// console.log(capAlpha.indexOf('a'))


const encodeString = (string, shiftNum) => {
  let encodedString = '';
  for (let char of string) {
    if (char === ' ')
      encodedString += char;

    else if (char === char.toLowerCase()) {
      let initialIndex = smallAlpha.indexOf(char);
        if (initialIndex + shiftNum > 25) {
          let modifiedIndex = (initialIndex + shiftNum) % 25;
            encodedString += smallAlpha[modifiedIndex];
        }
        else {
          let modifiedIndex = initialIndex + shiftNum;
            encodedString += smallAlpha[modifiedIndex];
        }
      }

    else if (char === char.toUpperCase()) {
        let initialIndex = capAlpha.indexOf(char);
          if (initialIndex + shiftNum > 25) {
            let modifiedIndex = (initialIndex + shiftNum) % 25;
            encodedString += capAlpha[modifiedIndex];
        }
        else {
          let modifiedIndex = initialIndex + shiftNum;
            encodedString += capAlpha[modifiedIndex];
        }  
      }

    else encodedString += char;
    }
    
return encodedString
}

console.log(encodeString("neogcamp", 2))
console.log(encodeString("NeogCamp zinda baad", 2))
console.log(encodeString("neogcamp", 2))



// 2

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers


const toSentenceCase = sentence => sentence.split(' ').map(a=>a[0].toUpperCase()+a.slice(1, a.length)).join(' ')


console.log(toSentenceCase('we are neoGrammers'))


// let text = "HELLO WORLD";
// let letter = text.charAt(1);
// console.log(letter)

// 3

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArray = array => array.sort((a,b) => a-b)

console.log(sortArray([100,83,32,9,45,61]))



// 4

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen


// 4- reverse the sring

const reverseCharactersOfWord = str => str.split(" ").map(e => e.split("").reverse().join("")).join(' ')

console.log(reverseCharactersOfWord("we are neoGrammers"))






// // Deep Copying and Shallow copying 
// let person = {name: 'Lydia'};
// let arr = [1,2,3];
// const members = [person, ...arr];
// person = null;
// // console.log(person.name)
// console.log("here")
// console.log(members[0].name)
// console.log(person); // Guess the Output



// const flower= {name:"Lily",color:"white"}
// const clone = Object.assign({},flower)
// console.log(clone)
// console.log(flower==clone)
// // clone.name="Camellia"
// console.log(flower.name)
// console.log(clone.name)


// const flower2= [{name:"Lily",color:"white"}]
// const clone2 = Object.assign({},flower2)
// console.log(flower2[0]===clone2[0])
// clone2[0].name="Tulip"
// console.log(flower2[0].name)
// console.log(clone2[0].name)
// console.log(clone2)