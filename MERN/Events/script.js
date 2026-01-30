let count = 0;
const body = document.querySelector('body');

const p = document.querySelector('#counter');
const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');

addBtn.addEventListener('click', () => {
    count += 1;
    p.innerText = `Count : ${count}`;
});

subtractBtn.addEventListener('click', () => {
    count -= 1;
    p.innerText = `Count : ${count}`;
});

const p2 = document.createElement('p');
p2.innerText = "Hello this is a paragraph";
body.append(p2);

const resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset';
body.append(resetBtn);

resetBtn.addEventListener('click', () => {
    count = 0;
    p.innerText = `Count : ${count}`;
});
