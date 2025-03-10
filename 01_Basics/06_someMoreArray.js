let arr =[];
arr.push(200);
arr.push(10);
arr.push('Titas');
arr.push(true);

console.log(arr);

function reverseArray(arr) {
    return arr.reverse();
}

// Example usage
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

function findMinMax(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}

// Example usage
console.log(findMinMax([3, 1, 8, 2, 6])); // { min: 1, max: 8 }


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

// Example usage
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false



