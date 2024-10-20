let output = document.querySelector(“#output”);
let array = [1, 2, 3, 4];

function getNumbers() {
return new Promise((resolve) => {
setTimeout(() => {
resolve(array); // Resolves after 3 seconds
}, 1000);
});
}

function updateOutput(numbers) {
output.innerText = numbers.join(", ");
}

getNumbers()
.then((numbers) => {
return new Promise((resolve) => {
setTimeout(() => {
const evenNumbers = numbers.filter((n) => n % 2 === 0);
updateOutput(evenNumbers); // Output: 2, 4
resolve(evenNumbers);
}, 1000);
});
})
.then((evenNumbers) => {
return new Promise((resolve) => {
setTimeout(() => {
const multipliedNumbers = evenNumbers.map((n) => n * 2);
updateOutput(multipliedNumbers); // Output: 4, 8
resolve(multipliedNumbers);
}, 1000);
});
});