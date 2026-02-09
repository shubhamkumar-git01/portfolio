// function greet(name) {
//     console.log(`hello ${name}`);
// }
// // greet("Jerry");
// function user(cb) {
//     const userName = "Tom";
//     cb(userName);
// }

// user(greet);
// //  callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// console.log('Start');
// setTimeout(() => {
//     console.log('Task done')
// })
// console.log('End');
// function printData(data) {
//     console.log(data)
// }

// function getData(callback) {
//     setTimeout(() => {
//         callback('Server data')

//     }, 4000);
// }
// getData(printData);
// // getData(function(data)
// // {
// //     console.log(data);
// // })
function first(callback) {
    console.log('This is a first');
    callback();
}
function second(callback) {
    console.log('This is a second');
    callback();
}
function third(callback) {
    console.log('This is a third');
    callback();
}
function fourth(callback) {
    console.log('This is a fourth');
    callback();
}
function final(callback) {
    console.log('This is a final');
    callback();
}
first(function() {
    console.log('something')
    second(function() {
        console.log('something')
        third(function() {
            console.log('something')
            fourth(function() {
                console.log('something')
                final(function() {
                    console.log('This is callback Hello');
                })
            })
        })
    })
})