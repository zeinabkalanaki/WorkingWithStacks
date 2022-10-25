class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value)
  }
  pop() {
    this.items.pop()
  }

  toArray(){
    return this.items;
  }
}
const stack  = new Stack();

stack.push("Product 1")
stack.push("Product 2")
stack.push("Product 3")

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());






























