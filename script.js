import { renderHTML } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.3/element.js';

const products = [
    { id: 1, name: "Product A", price: "$10" },
    { id: 2, name: "Product B", price: "$20" },
    { id: 3, name: "Product C", price: "$30" }
];

const productList = document.getElementById('product-list');

// Generate HTML for product list
const productHTML = products.map(
    product => `<div><h3>${product.name}</h3><p>Price: ${product.price}</p></div>`
).join('');

// Render the product list into the container
renderHTML(productList, productHTML);