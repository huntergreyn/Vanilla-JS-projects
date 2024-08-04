let string = prompt('Please Enter a text :');
let target = prompt('Please Enter a text :');
let target2 = prompt('Please Enter a text :');

console.log('string', string);
console.log('target', target);
console.log('does target contain string or not ?');

if (string.includes(target)) {
    console.log(true);
} else {
    console.log(false);
}

console.log('string', string);
console.log('target2', target2);
console.log('does target1 contain string or not ?');

if (string.includes(target2)) {
    console.log(true);
} else {
    console.log(false);
}
