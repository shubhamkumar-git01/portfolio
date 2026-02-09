const p = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log('Hello');
        resolved('promise resolved');
        reject('promise rejected');
    }, 3000);
});

p.then(data => console.log(data));
p.catch(err => {console.log(err);
});

