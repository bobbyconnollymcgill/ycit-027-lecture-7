// Write 3 functions that return promises: walkHomeFromSchool, doHomework, and eatDinner
// The executors of these functions should resolve to: "Walked home from school", "Did homework", and "Ate dinner" respectively

// Combine the promises returned by the functions above into a single promise chain

function walkHomeFromSchool() {
    return new Promise((resolve) => {
        resolve("fsdgr");
    });
}

function doHomework() {
    return new Promise((resolve) => {
        resolve("dgsghdhr");
    });
}

function eatDinner() {
    return new Promise((resolve) => {
        resolve("ate dinner");
    });
}

walkHomeFromSchool()
    .then(() => {
        return doHomework();
    })
    .then(() => {
        return eatDinner();
    })
    .then((result) => {
        // echo block (echoes the fulfilled value from the last promise in the chain)
        console.log(result);
    });
