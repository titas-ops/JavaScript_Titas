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


function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}

// Example usage
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]


function findMissingNumber(arr, n) {
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

// Example usage
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3


function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

// Example usage
console.log(secondLargest([10, 20, 4, 45, 99])); // 45


