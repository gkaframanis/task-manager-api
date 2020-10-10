const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 4, 7]);
        reject("This is my error!");
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log("Success!", result);
}).catch((error) => {
    console.log("Error!", error);
});


//
//                                             fulfilled
//                                            /
// Promise      ------- pending  ---->>>
//                                            \
//                                             rejected
//