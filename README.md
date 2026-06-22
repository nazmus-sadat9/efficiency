# light-snap.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
1. snap utilities 
2. makeEvent function
3. makeTag function
4. Selectors

## randNum utility
```JavaScript
import { snap } from "light-snap"; // ES Module
const { snap } = require("light-snap"); // CommonJS

// the arguments are type, minimum and maximum number.
const num = snap.randNum("int", 1, 15);

console.log(num);
```

## makeEvent function
```JavaScript
// the arguments are element, event type, callback
makeEvent("#button", "click", () => {
  console.log("clicked!");
});
```

## makeTag function
```JavaScript
// the arguments are html tag name and object 
const box = makeTag("div", {
  text: "hello world", // inner text
  classes: ["box"] // class names 
});

document.body.appendChild(box); // add in body
```

## Selectors
```JavaScript
// query selector 
query(".box");

// id selector
id("box");
```

## copy utility
```JavaScript
import { snap } from "light-snap"; // ES Module
const { snap } = require("light-snap"); // CommonJS

// make a button tag 
const btn = makeTag("button", {
  text: "copy"
});

// async function
makeEvent(btn, "click", async () => {

  const result = await snap.copy("hello world"); // return true or false

});
```

## Location utility
```JavaScript
import { snap } from "light-snap"; // ES Module
const { snap } = require("light-snap"); // CommonJS

async function location() {
  const cords = await snap.getLocation(); // return a object of lat and lon.

  console.log(cords.lat); // lat or lon 
}

location();
```

## Installation
```
npm install light-snap
```

## CDNs 
```html
<script src="https://unpkg.com/light-snap"></script> 

<!-- or --> 

<script src="https://cdn.jsdelivr.net/npm/light-snap"></script>
```

## Update
```
npm install light-snap
```
