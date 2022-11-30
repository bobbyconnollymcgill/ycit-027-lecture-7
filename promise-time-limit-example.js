const pTimeLimit = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("took too long");
    }, 3000);
});

const pCallCarolKing = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("oh no!");
        resolve("hey! I'm here");
    }, 3110);
});

const pRace = Promise.any([pTimeLimit, pCallCarolKing]);

pRace
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("error", error);
    });
