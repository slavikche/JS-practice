const calculator = {
    lastResult: null,
    operationsCount: 0,
  
    add(a, b) {
      this.lastResult = a + b;
      this.operationsCount++;
      return this.lastResult;
    },
  
    subtract(a, b) {
      this.lastResult = a - b;
      this.operationsCount++;
      return this.lastResult;
    },
  
    multiply(a, b) {
      this.lastResult = a * b;
      this.operationsCount++;
      return this.lastResult;
    },
  
    divide(a, b) {
      if (b === 0) {
        return "Помилка: ділення на нуль!";
      }
      this.lastResult = a / b;
      this.operationsCount++;
      return this.lastResult;
    },
  
    reset() {
      this.lastResult = null;
      this.operationsCount = 0;
    }
  };

  console.log("Addition result:", calculator.add(10, 2));
  console.log("Subscrtion result:", calculator.subtract(10, 5));
  console.log("Multiplication result:", calculator.multiply(3, 3));
  console.log("Division result:", calculator.divide(18, 3));
  console.log("Division by zero:", calculator.divide(7, 0));
  
  console.log("Last result:", calculator.lastResult);
  console.log("Operations count:", calculator.operationsCount);
  
  calculator.reset();
  console.log(calculator.lastResult);
  console.log(calculator.operationsCount);