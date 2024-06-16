
// In this example:

// replace(/[^a-zA-Z0-9]/g, '') removes non-alphanumeric characters.
// toLowerCase() converts the string to lowercase.
// split('') converts the string into an array of characters.
// reverse() reverses the array.
// join('') converts the reversed array back to a string.
// Finally, the function checks if the cleaned string is the same as its reversed version.
// You can use this isPalindrome function to check whether a given string is a palindrome or not.



//for loop

// Certainly! The expression length - 1 - i is used to get the index of the character in the second half of the string that corresponds to the character at the current index i in the first half of the string. Let me break down why this expression is used:

// length - 1:

// length - 1 gives the index of the last character in the string. In JavaScript, array indices start from 0, so the last index of an array or string of length n is n - 1.
// - i:

// We subtract i to move towards the beginning of the string (from the end). This is because in the loop, i starts from 0 and increases up to length / 2 - 1.
// Putting it all together, length - 1 - i calculates the index in the second half of the string that corresponds to the current index i in the first half. This is necessary because we are checking characters from both halves to see if they match during the palindrome check.

// For example, in a string with length 10:

// When i is 0, we compare the first character with the ninth character.
// When i is 1, we compare the second character with the eighth character.
// ... and so on.
// This way, the loop covers the comparison of characters from both halves of the string until it reaches the center.






// The expression length / 2 is used to determine the midpoint of the string. In the context of checking for palindromes, we iterate only up to the midpoint because, for a palindrome, we need to compare characters from the first half of the string with their corresponding characters in the second half.

// Here's why length / 2 is used in the loop condition:

// String Length is Even:

// When the length of the string is even, length / 2 gives the exact midpoint index.

// For example, in a string of length 8, length / 2 is 4. So, the loop runs from i = 0 to i = 3, covering the first half of the string.

// String Length is Odd:

// When the length of the string is odd, length / 2 gives the index just before the midpoint.

// For example, in a string of length 9, length / 2 is 4.5, but JavaScript truncates the decimal part when used as an index. So, the loop runs from i = 0 to i = 4, covering the first half of the string.

// By iterating only up to the midpoint, we ensure that each character from the first half is compared with its corresponding character in the second half. If the loop completes without finding a mismatch, it indicates that the string is a palindrome.







