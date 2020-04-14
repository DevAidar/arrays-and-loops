console.log("Lab Loaded");

//////////// ARRAYS ////////////
console.log("----------------------------------------------------------------------------------------------------\n[Hip!, Hip!]\n----------------------------------------------------------------------------------------------------");

// 1. Array operations
console.log("--------------------------------------------------\n1. Array operations\n--------------------------------------------------");

// Let’s try 5 array operations.

// 1. Create an array styles with items “Jazz” and “Blues”.
let styles = ["Jazz", "Blues"];
console.log(styles);
// 2. Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");
console.log(styles);
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[parseInt(styles.length / 2)] = "Classics";
console.log(styles);
// 4. Strip off the first value of the array and show it.
console.log(styles.shift());
console.log(styles);
// 5. Prepend "Rap" and "Reggae" to the array.
styles.unshift("Rap", "Reggae");
console.log(styles);


// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

// 2. Reverse input numbers
console.log("--------------------------------------------------\n2. Reverse input numbers\n--------------------------------------------------");

// Write the function reverseInput() that:

let reverseInput = () => {
    let nums = [];
    let i = 0;
    while(!isNaN(Number(nums[i++] = window.prompt("Enter a number"))) && nums[i - 1] != null && nums[i - 1] != "");
    nums.pop();
    return nums.reverse();
}

console.log(reverseInput());

// * Asks the user for numeric values using prompt.
// * Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// * Returns an array of the input numbers in reverse order.

// P.S. Zero is a valid number, please don’t stop the input on zero.


// 3. Translate border-left-width to borderLeftWidth
console.log("--------------------------------------------------\n3. Translate border-left-width to borderLeftWidth\n--------------------------------------------------");

// Write the function camelize(str) that changes dash-separated words like
// “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Hint: use split to split the string into an array, transform it and join back

let camelize = (str) => {
    while (str.indexOf('-') != -1)
        str = str.slice(0, str.indexOf('-')) + str[str.indexOf('-') + 1].toUpperCase() + str.slice(str.indexOf('-') + 2);

    return str;
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 4. Angie's Colors
console.log("--------------------------------------------------\n4. Angie's Colors\n--------------------------------------------------");

// CREATING AN ARRAY
// Create an empty array named Colors
let Colors = [];
// Add three colors to (the end of) the array
Colors.push("BLUE", "RED", "GREEN");
// Add another color to the front of the array
Colors.unshift("PURPLE");
// Add one more color to the front of the array
Colors.push("YELLOW");
// PRINTING ITEMS
// Print the length of the array
console.log(Colors.length);
// Print the item at index 1. What do you expect to print? What printed?
console.log(Colors[1]);

// Remember arrays are 0 indexed. Meaning the first item in the array is at index 0
// Print the item at index 0
console.log(Colors[0]);

// Print the last color in your array
console.log(Colors[Colors.length - 1]);


// Now try printing the last color in your array using colors.length-1
// Passing in [colors.length -1] as the index is useful when we do not know the length of the array
// This will always be the last item
console.log(Colors[Colors.length - 1]);


// OVERRIDING ITEMS
// Replace the color at index 0 with a new color and print the new color
Colors[0] = "Orange";
console.log(Colors[0]);

// Replace the color at index 2 with a new color and print the new color
Colors[2] = "Pink";
console.log(Colors[2]);

// Replace the last color in your array with a new color and print it to the console
// Now try doing it again but this time use colors.length-1
Colors[Colors.length - 1] = "Marine";
console.log(Colors[Colors.length - 1]);

// REMOVING ITEMS
// Print the array length to console
console.log(Colors.length);
// Delete the color at the last index of your array
Colors.pop();

// Re-print the array length to console
console.log(Colors.length);

// Print the color at index 0 to console
console.log(Colors[0]);

// Delete the color at the first index of your array
Colors.shift();

// Re-print the color at index 0
console.log(Colors[0]);

// Delete the color at index 2
Colors.splice(2, 1);

// Delete the color at index 1 and store it in a variable called 'storedColor'
let storedColor = Colors.pop();

// Print 'storedColor' in to the console
console.log(storedColor);

// Print the length of our colors array
console.log(Colors.length);

// Print the last item in our colors array
console.log(Colors[Colors.length - 1]);


// 5. Sabbatical
console.log("--------------------------------------------------\n5. Sabbatical\n--------------------------------------------------");

// Learning to code around your full time job is taking over your life. You
// realise that in order to make significant steps quickly, it would help to go
// to a coding bootcamp.

// You decide that rather than leaving work totally, you will request a
// sabbatical so that you can go back to work post-bootcamp and be paid while
// you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// * val = your value to the organisation
// * happ = her happiness level at the time of asking
// * The number of letters from 'sabbatical' that are present in string 'x'.

// Note that if x contains three instances of the letter 'l', that still scores
// three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return
// 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

// sabb('Can I have a sabbatical?', 5, 5) = 'Sabbatical! Boom!'
// sabb('Why are you shouting?', 7, 2) = 'Back to your desk, boy.'
// sabb('What do you mean I cant learn to code??', 8, 9) = 'Sabbatical! Boom!'
// sabb('Please calm down', 9, 1) = 'Back to your desk, boy.'

let sabb = (str, val, happ) => {
    let sum;
    for (letter of str)
        sum += ("sabbatical".indexOf(letter) != -1) ? 1 : 0;

    return (sum + happ + val > 22) ? "Sabbatical! Boom!" : "Back to your desk, boy.";
};

console.log(sabb('Can I have a sabbatical?', 5, 5));
console.log(sabb('Why are you shouting?', 7, 2));
console.log(sabb('What do you mean I cant learn to code??', 8, 9));
console.log(sabb('Please calm down', 9, 1));

//////////// LOOPS ////////////
console.log("----------------------------------------------------------------------------------------------------\nLoops and Loops and Loops and Loops and Loops and well you get the idea...\n----------------------------------------------------------------------------------------------------");

// 1. Repeat until the input is a number
console.log("--------------------------------------------------\n1. Repeat until the input is a number\n--------------------------------------------------");

// Create a function readNumber that prompts for a number until the user
// enters a valid numeric value.

// The resulting value must be returned as a number.

// The user can also stop the process by entering an empty line or pressing the // Cancel button. In that case, the function should return null.


let number;
while (isNaN(Number(number = window.prompt("Enter a number to quit!"))) && number != null);
console.log((number == null || number == "") ? null : Number(number));


// 2. Buzz-feed
console.log("--------------------------------------------------\n2. Buzz-feed\n--------------------------------------------------");

// Print out the numbers 1-100 in your console.
// If the number is perfectly divisible by 3 then print "Fizz" instead
// If the number is perfectly divisible by 5 then print "Buzz" instead
// If the number is perfectly divisible by both 3 and 5 then print "Fizz-Buzz" instead

for (let i = 1; i <= 100; i++)
    console.log((i % 3 != 0 && i % 5 != 0) ? i : ((i % 3 == 0 && i % 5 == 0) ? "Fizz-Buzz" : ((i % 3 == 0) ? "Fizz" : "Buzz")));

// 3. Poker Face
console.log("--------------------------------------------------\n3. Poker Face\n--------------------------------------------------");

// Create a variable called "deck" and set it equal to an empty array.
const FACES = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const SUITS = ["Hearts", "Clubs", "Diamonds", "Spades"];
let deck = [];

// Write 4 separate for loops to create the different suits of cards and push them into the deck.
let index = 0;
for (face of FACES)
    deck[index] = `${face} of ${SUITS[parseInt(index++ / 13)]}`;
for (face of FACES)
    deck[index] = `${face} of ${SUITS[parseInt(index++ / 13)]}`;
for (face of FACES)
    deck[index] = `${face} of ${SUITS[parseInt(index++ / 13)]}`;
for (face of FACES)
    deck[index] = `${face} of ${SUITS[parseInt(index++ / 13)]}`;

// Print your deck to the console to make sure it's working.
console.log(deck);
// Write a new loop that is designed to grab 2 cards at random and swap them so we can shuffle our deck.
let randomIndexes = [parseInt(Math.random() * deck.length), parseInt(Math.random() * deck.length)];
let temp = deck[randomIndexes[0]];
deck[randomIndexes[0]] = deck[randomIndexes[1]];
deck[randomIndexes[1]] = temp;

// Print the results of 1 shuffle to ensure it works.
console.log(deck);
// Now run that loop 10,000 times and reprint the shuffled deck.
for (let i = 0; i < 10000; i++) {
    let randomIndexes = [parseInt(Math.random() * deck.length), parseInt(Math.random() * deck.length)];
    let temp = deck[randomIndexes[0]];
    deck[randomIndexes[0]] = deck[randomIndexes[1]];
    deck[randomIndexes[1]] = temp;
}
// Print the position of the Ace of Spades to the page.
console.log(deck);

// 4. A maximal subarray
console.log("--------------------------------------------------\n4. A maximal subarray\n--------------------------------------------------");

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (sum of 2 + 3)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6 (sum of 2 + -1 + 2 + 3)
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3  (sum of 2 + 1)
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (take all)

// If all items are negative, it means that we take none (the subarray is
// empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0
