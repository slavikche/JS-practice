import Gadget from "./gadget.js";
import Smartphone from "./Smartphone.js";

const gadget1 = new Gadget("Canon", "EOS R50", 2023);
const gadget2 = new Gadget("Panasonic", "Lumix", 1999); // Некоректний рік


const phone1 = new Smartphone("Apple", "iPhone 14", 2022, "iOS");
const phone2 = new Smartphone("Samsung", "Galaxy S23", 2023, "Android");
const phone3 = new Smartphone("Huawei", "P50", 2021, "Windows Mobile"); // Некоректна ОС



console.log(gadget1.getInfo());
console.log(gadget2.getInfo());
console.log("\n");
console.log(phone1.getInfo());
console.log(phone2.getInfo());
console.log(phone3.getInfo());
console.log("\n");

const allGadgets = [gadget1, gadget2, phone1, phone2, phone3];
const oldest = Gadget.getOldestGadget(allGadgets);
console.log("Найстаріший гаджет:", oldest.getInfo());