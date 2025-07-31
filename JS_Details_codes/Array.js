let fruits = ["apple", "banana", "mango"];
fruits.push("orange");      // Add to end
fruits.pop();               // Remove from end
fruits.unshift("grape");    // Add to start
fruits.shift();             // Remove from start

console.log(fruits[0]);     // Access item
console.log(fruits.length); // Get length
fruits.splice(1, 1);       // Remove item at index 1