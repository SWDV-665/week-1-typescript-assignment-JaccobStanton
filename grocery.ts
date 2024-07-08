//assignment for Maryville SWDV-665 course

// grocery.ts

class Grocery {
  name: string;
  quantity: number;
  price: number;

  constructor(name: string, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  getTotalPrice(): number {
    return this.quantity * this.price;
  }
}

// Created array of grocery items
const groceries: Grocery[] = [
  new Grocery("Milk", 3, 1.5),
  new Grocery("Candy", 4, 1.2),
  new Grocery("Bread", 6, 2),
  new Grocery("Tomatoes", 8, 3.2),
  new Grocery("Yogurt", 6, 2),
  new Grocery("Flour", 7, 1.4),
  new Grocery("Eggs", 11, 0.2),
  new Grocery("TP", 2, 2.2),
  new Grocery("Soda", 1, 3.2),
];

// Function used to generate HTML output
function generateHTML(groceries: Grocery[]): string {
  let html = "<ul>";
  groceries.forEach((grocery) => {
    html += `<li>${grocery.name} - Quantity: ${
      grocery.quantity
    }, Total Price: $${grocery.getTotalPrice().toFixed(2)}</li>`;
  });
  html += "</ul>";
  return html;
}

// Export the generateHTML function for use in the HTML file
export { generateHTML, groceries };
