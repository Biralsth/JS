let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = [];
let evenNumbers = [];

numbers.map((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
});
console.log(oddNumbers);
console.log(evenNumbers);

let cartItems = [
  {
    name: "ramesh",
    products: [
      { title: "watch", price: 5000 },
      { title: "earpod", price: 3000 },
      { title: "headphone", price: 4000 },
    ],
  },

  {
    name: "kali",
    products: [
      { title: "headphone", price: 3000 },
      { title: "earpod", price: 2000 },
      { title: "necklace", price: 3000 },
    ],
  },

  {
    name: "suresh",
    products: [
      { title: "fan", price: 3000 },
      { title: "chair", price: 1000 },
      { title: "heater", price: 4000 },
    ],
  },
];

// output
// ramesh has ordred of Rs 12000
// kali has ordered of Rs 8000
// suresh has ordered of Rs 7000

cartItems.forEach((customer) => {
  let total = customer.products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  console.log(`${customer.name} has ordered of Rs ${total}`);
});
