const products = [
  {
    id: 1,
    name: "Cappuccino",
    category: "cappuccino",
    price: 50000,
    image: "http://localhost:3000/assets/Cappuccino.png",
    rating: 4.8,
    description: "Espresso with steamed milk foam",
    sizes: [
      { label: "Small", value: "small", extraPrice: 0 },
      { label: "Medium", value: "medium", extraPrice: 5000 },
      { label: "Large", value: "large", extraPrice: 10000 }
    ],
    sugarLevels: [
      { label: "No Sugar", value: "none" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" }
    ]
  },
  {
    id: 2,
    name: "Coffee",
    category: "coffee",
    price: 45000,
    image: "http://localhost:3000/assets/coffee.png",
    rating: 4.5,
    description: "Classic black coffee",
    sizes: [
      { label: "Small", value: "small", extraPrice: 0 },
      { label: "Medium", value: "medium", extraPrice: 3000 },
      { label: "Large", value: "large", extraPrice: 7000 }
    ],
    sugarLevels: [
      { label: "No Sugar", value: "none" },
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" }
    ]
  },
  {
    id: 3,
    name: "Espresso",
    category: "espresso",
    price: 40000,
    image: "https://example.com/espresso.png",
    rating: 4.6,
    description: "Strong and rich espresso shot",
    sizes: [
      { label: "Single", value: "single", extraPrice: 0 },
      { label: "Double", value: "double", extraPrice: 5000 }
    ],
    sugarLevels: [
      { label: "No Sugar", value: "none" },
      { label: "Low", value: "low" }
    ]
  }
];

module.exports = products;
