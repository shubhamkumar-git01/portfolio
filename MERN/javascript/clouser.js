closure
// closure
function outer() {
    let count = 0;
    return function inner () {
        count += 1;
        console.log(count);
    }
}
const fn = outer();
fn();
fn();
fn();
fn();
fn();