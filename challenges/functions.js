console.log("\n\n-----FUNCTIONS-----\n\n");

// ==== Callbacks ====
console.log("\n-----Callbacks-----\n");

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  return consume(num1, num2, (num1, num2) => num1 + num2);
}

function multiply(num1, num2) {
  return consume(num1, num2, (num1, num2) => num1 * num2);
}

function greeting(first_name, last_name) {
  return consume(first_name, last_name, (first_name, last_name) => `Hello ${first_name} ${last_name}, nice to meet you!`);
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
console.log("\n-----Closures-----\n");

// Explain in your own words why nestedfunction can access the variable internal.
console.log(
  "Explain in your own words why nestedfunction can access the variable internal. \n\nExplanation: because the variable internal is created in side the same block code as the nestedFunction making it a global variable to the nestedFunction and other functions or items inside the myFunction function... just like external is a global variable to all functions in the document.\n"
);

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
