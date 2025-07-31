let person = {
  name: "Ejaz",
  age: 21,
  greet: function() {
    return "Hello!";
  }
};

console.log(person.name);
console.log(person["age"]);
console.log(person.greet());
// Output: Hello Ejaz
console.log(person.greet()); // Output: Hello!
console.log(person.greet()); // Output: Hello!