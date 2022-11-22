const userDb = [
    { id: 1, name: "Taco" },
    { id: 2, name: "Smokey" },
    { id: 3, name: "Thumbelina" },
    { id: 4, name: "Coo Coo Bear" },
];

const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() < 0.05 && reject("Failed to get user"); // Reject 5% of the time
        const randomIndex = Math.floor(Math.random() * userDb.length);
        resolve(userDb[randomIndex]);
    }, 200);
});

const getGreeting = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.05 && reject("Failed to get greeting"); // Reject 5% of the time
            resolve(`Hello ${user.name}`);
        }, 200);
    });
};

const displayGreeting = (greeting) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.05 && reject("Failed to display greeting"); // Reject 5% of the time
            console.log(greeting);
            resolve();
        }, 200);
    });
};

// Write an expression that fetches a user from the database, and then displays a greeting to the user in the console
// You should include a catch block that displays an error message in the console if the operation fails
// You should include a finally block that displays the message "Operation has terminated" in the console
