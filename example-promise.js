console.log("A");

const p = new Promise((resolve, reject) => {
    // This function will run immediately when the promise is created

    console.log("B");

    setTimeout(() => {
        // After event loop picks up the message from the queue
        // it notifies the JS engine, and all the code inside
        // this function will now run

        console.log("C");

        resolve("ice tea");
    }, 2000);

    console.log("D");
});

console.log("E");

p.then((value) => {
    console.log("F", value, "TACO", "smokey", new Date());
});

console.log("G");

// A
// B
// D
// E
// G

// // 2 seconds go by

// C
// F ice tea

fetch();
