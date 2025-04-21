export default class Gadget {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    
    getInfo() {
      return `Гаджет: ${this.brand} ${this.model} ${this.year}`;
    }

    get year() {
      return this._year;
    }

    set year(value) {
      const currentYear = new Date().getFullYear();
      if (typeof value === 'number' && value >= 2000 && value <= currentYear) {
        this._year = value;
      } else {
        console.log("Помилка: некоректний рік");
      }
    }
  

    static getOldestGadget(gadgetsArray) {
      let oldest = gadgetsArray[0];
  
      for (let gadget of gadgetsArray) {
        if (gadget.year < oldest.year) {
          oldest = gadget;
        }
      }
  
      return oldest;
    }
    
  }