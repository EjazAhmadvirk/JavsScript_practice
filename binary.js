function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in right half
        } else {
            right = mid - 1; // Search in left half
        }
    }

    return -1; // Not found
}

// Example usage:
const numbers = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(numbers, 30)); // Output: 2
console.log(binarySearch(numbers, 100)); // Output: -1
