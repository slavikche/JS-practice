import Gadget from "./gadget.js";

export default class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
      }
    
      get operatingSystem() {
        return this._operatingSystem;
      }
    
      set operatingSystem(value) {
        const allowedOS = ["iOS", "Android", "HarmonyOS"];
        if (allowedOS.includes(value)) {
          this._operatingSystem = value;
        } else {
          console.log("Помилка: недоступна операційна система");
          console.log("\n");
        }
      }
    
      getInfo() {
        return `Смартфон: ${this.brand} ${this.model}, Рік випуску: ${this.year}, ОС: ${this.operatingSystem}`;
      }
    }
    
    