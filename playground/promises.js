const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

// // Without promise chaining, nested promises
// add(1, 2).then((sum) => {
//     console.log(sum);

//     add(sum, 5).then((sum2) => {
//         console.log(sum2);
//     }).catch((error) => {
//         console.log(error);
//     });
// }).catch((e) => {
//     console.log(e);
// });

// With promise chaining (you can return a promise from one of your then callbacks allowing you to chain another call on.)

add(1, 1).then((sum) => { // then() after the promise of add(1, 1) is fulfilled
    console.log(sum);
    return add(sum, 4); 
}).then((sum2) => { // then() after the promise of add(sum, 4) is fulfilled
    console.log(sum2);
}).catch((error) => {
    console.log(error);
});
