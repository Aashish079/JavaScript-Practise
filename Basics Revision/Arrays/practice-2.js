// Combining two arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// Better approach with Spread Operator
const combined = [...first, ...second];

// For copying the array just spread the array after the equal sign
// const copy = combined; won't work because it will just copy the reference
const copy = [...combined];

const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);
