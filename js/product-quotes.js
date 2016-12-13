// Code for generating random product quotes on homepage

var quotesJSON = [
  {
    quote: "Don’t give up on programming.",
    author: "Mark Otto, Product Designer (GitHub)"
  },
  {
    quote: "Take risks, try new things, and accept that not all the boundary lines between devices, browsers, and the web have been drawn yet.",
    author: "Luke Wroblewski, Product Designer (Google)"
  },
  {
    quote: "The primary goal is to make web application development easier, and in the process to make [the] web become stronger.",
    author: "Miško Hevery, creator of Angular JS"
  },
  // {
  //   quote: "Design is shrinking the gap between what a product does and why it exists.",
  //   author: "Sahil Lavingia, Founder/CEO via. Gumroad"
  // },
  {
    quote: "The best way to learn how to write code is to write code.",
    author: "Kyle Simpson, You Don't Know Javascript"
  },
  {
    quote: "Keep dancing.",
    author: "Eric Elliot, Javascript Guru & Writer"
  }
];

// Generate random number between min and max quote count
var rndQuote = Math.floor(Math.random() * (quotesJSON.length));
console.log(rndQuote);

// Quote
document.getElementById("productQuote").innerHTML = "\"" + quotesJSON[rndQuote].quote + "\"";

// Quote author
document.getElementById("productQuoteAuthor").innerHTML = "– " + quotesJSON[rndQuote].author;
