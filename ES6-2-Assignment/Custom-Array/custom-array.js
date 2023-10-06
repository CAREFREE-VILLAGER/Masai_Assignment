function CustomArray() {
    this.size = arguments.length;
    for (let i = 0; i < this.size; i++) {
      this[i] = arguments[i];
    }
  }
  
  CustomArray.prototype.push = function (element) {
    this[this.size] = element;
    this.size++;
  };
  
  CustomArray.prototype.pop = function () {
    if (this.size === 0) return undefined;
    const removedElement = this[this.size - 1];
    delete this[this.size - 1];
    this.size--;
    return removedElement;
  };
  
  CustomArray.prototype.top = function () {
    if (this.size === 0) return undefined;
    return this[this.size - 1];
  };
  
  CustomArray.prototype.print = function () {
    let result = '[';
    for (let i = 0; i < this.size; i++) {
      result += this[i];
      if (i < this.size - 1) result += ', ';
    }
    result += ']';
    console.log(result);
  };
  
  CustomArray.prototype.printReverse = function () {
    let result = '[';
    for (let i = this.size - 1; i >= 0; i--) {
      result += this[i];
      if (i > 0) result += ', ';
    }
    result += ']';
    console.log(result);
  };
  
  //Examples of using the custom array :--->

  const myArray = new CustomArray(1, 2, 3, 4);

  myArray.push(7);  // i have added 7 to array

  myArray.print(); 
  myArray.pop(); // removed last element(7)

  myArray.print(); 
  console.log(myArray.top()); // prints the element at last place

  myArray.printReverse();  // prited array in reverse
  console.log(myArray.size); 
  