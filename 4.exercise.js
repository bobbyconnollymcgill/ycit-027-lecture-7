/**
 * Write a promise whose executor resolves or rejects based on a condition of your choice
 *
 * Pass in the strings "Success" and "Failure" as the resolve and reject values
 *
 * Call that promise's then() method to log the result
 *
 */

new Promise((resolve, reject) => {
  if (true) {
    resolve("Success"); // dead-code
  } else {
    reject("Failure");
  }
}).then((result) => {
  console.log(result);
});
