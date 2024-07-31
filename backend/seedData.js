const bcrypt = require("bcryptjs");

const users = [
  {
    username: "john_doe",
    email: "john@example.com",
    password: "password123"
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456"
  }
];

const products = [
  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    description: "A collection of poetry by American poet Walt Whitman.",
    price: 15.99,
    stock: 50
  },
  {
    title: "The Sun and Her Flowers",
    author: "Rupi Kaur",
    description: "A vibrant and transcendent journey about growth and healing.",
    price: 12.99,
    stock: 75
  },
  {
    title: "Milk and Honey",
    author: "Rupi Kaur",
    description: "A collection of poetry and prose about survival, love, and femininity.",
    price: 11.99,
    stock: 100
  },
  {
    title: "The Collected Poems of Emily Dickinson",
    author: "Emily Dickinson",
    description: "The complete poems of one of America's most influential poets.",
    price: 18.99,
    stock: 40
  },
  {
    title: "The Waste Land and Other Poems",
    author: "T.S. Eliot",
    description: "A masterpiece of modernist poetry by T.S. Eliot.",
    price: 14.99,
    stock: 60
  }
];

module.exports = { users, products };