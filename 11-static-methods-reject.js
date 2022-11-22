// Promise.reject()

// The Promise.reject() method creates a promise that is rejected with the specified reason
// The Promise.reject() method is useful when we want to create a promise that is rejected immediately

const state = {
    isSignedIn: false,
    user: null,
};

function getUserProfile() {
    if (state.isSignedIn) {
        return Promise.resolve(state.user);
    } else {
        return Promise.reject("User is not signed in");
    }
}

// Note that across all code paths, the return value of getUserProfile() is always promise. This is important for consistency and to avoid bugs
