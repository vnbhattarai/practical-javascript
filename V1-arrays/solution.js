// Arrays:

// It should have a place to store todos
var todos = ["item1", "item2", "item3"];

// It should have a way to display todos
console.log("These are my Todos:", todos);

// It should have a way to add new todos
todos.push("item4");

// It should have a way to change a todo
todos[1] = "newItem2"; // => ["item1", "newItem2", "item3", "item4"]

// It should have a way to delete a todo
todos.splice(2, 1); // => ["item1", "newItem2", "item4"]

// => Use slice for creating new array without modifying original
