console.log("Lab Loaded");

//////////// ARRAYS ////////////
console.log("[Hip!, Hip!]");

// 1. Array operations

// Let’s try 5 array operations.

// 1. Create an array styles with items “Jazz” and “Blues”.
// 2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// 4. Strip off the first value of the array and show it.
// 5. Prepend "Rap" and "Reggae" to the array.

// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

// 2. Reverse input numbers

// Write the function reverseInput() that:

// * Asks the user for numeric values using prompt.
// * Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// * Returns an array of the input numbers in reverse order.

// P.S. Zero is a valid number, please don’t stop the input on zero.


// 3. Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like 
// “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Hint: use split to split the string into an array, transform it and join back


// 4. Angie's Colors

// CREATING AN ARRAY
// Create an empty array named Colors

// Add three colors to (the end of) the array

// Add another color to the front of the array

// Add one more color to the front of the array

// PRINTING ITEMS
// Print the length of the array

// Print the item at index 1. What do you expect to print? What printed?


// Remember arrays are 0 indexed. Meaning the first item in the array is at index 0
// Print the item at index 0

// Print the last color in your array


// Now try printing the last color in your array using colors.length-1
// Passing in [colors.length -1] as the index is useful when we do not know the length of the array
// This will always be the last item


// OVERRIDING ITEMS
// Replace the color at index 0 with a new color and print the new color


// Replace the color at index 2 with a new color and print the new color


// Replace the last color in your array with a new color and print it to the console
// Now try doing it again but this time use colors.length-1

// REMOVING ITEMS
// Print the array length to console
// Delete the color at the last index of your array


// Re-print the array length to console


// Print the color at index 0 to console


// Delete the color at the first index of your array


// Re-print the color at index 0


// Delete the color at index 2


// Delete the color at index 1 and store it in a variable called 'storedColor'


// Print 'storedColor' in to the console

// Print the length of our colors array

// Print the last item in our colors array


// 5. Sabbatical

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

//////////// LOOPS ////////////
console.log("Loops and Loops and Loops and Loops and Loops and well you get the idea...");

// 1. Repeat until the input is a number

// Create a function readNumber that prompts for a number until the user
// enters a valid numeric value.

// The resulting value must be returned as a number.

// The user can also stop the process by entering an empty line or pressing the // Cancel button. In that case, the function should return null.




// 2. Buzz-feed

// Print out the numbers 1-100 in your console.
// If the number is perfectly divisible by 3 then print "Fizz" instead
// If the number is perfectly divisible by 5 then print "Buzz" instead
// If the number is perfectly divisible by both 3 and 5 then print "Fizz-Buzz" instead


// 3. Poker Face

// Create a variable called "deck" and set it equal to an empty array.

// Write 4 separate for loops to create the different suits of cards and push them into the deck.


// Print your deck to the console to make sure it's working.
// Write a new loop that is designed to grab 2 cards at random and swap them so we can shuffle our deck.



// Print the results of 1 shuffle to ensure it works.
// Now run that loop 10,000 times and reprint the shuffled deck.
// Print the position of the Ace of Spades to the page.

// 4. A maximal subarray

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