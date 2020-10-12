const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Numbers must be non-negative")
            }
            resolve(a + b);
        }, 2000);
    });
};


// Async functions always return a Promise that get fulfilled with some value we provide.

const doWork = async () => {
    const sum = await add(1, 99); // The advantage is in syntax
    const sum2 = await add(sum, 50);
    // const sum3 = await add(sum2, -3); // To have an error
    const sum3 = await add(sum2, 3);
    return sum3;
};



doWork().then((result) => {
    console.log("Result:", result);
}).catch((error) => {
    console.log("Error", error);
});