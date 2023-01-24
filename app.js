//console.log("I love GIT");

// EXAMINE THE DOCUMENT OBJECT //

//console.log(document);

//console.dir(document);

console.log(document.domain);

console.log(document.URL); // gives url of the page
console.log(document.title); //gives title of the page

//we can also change the title

document.title = 123;
console.log(document.title);
console.log(document.doctype);

//to see head and body element

console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]); // gives the element present in 10 th index . here it gives h1 element.

//document.all[10].textContent = "Hello"; (this is not recommened)
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// SELECTING METHODS
//console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");

console.log(headerTitle);

//headerTitle.textContent = "hello";

//console.log(headerTitle);

//headerTitle.innerText = "good bye"; // innertext pays attention to styling in the element in console but text content doesn't pay attention to the styling.

//headerTitle.innerHTML = "<h3>hello</h3>"; //creates a h3 element inside the h1 element

//selectors - getElementById

var header = document.getElementById("main-header");

header.style.borderBottom = "solid 3px #000";

//selectors - GETELEMENTSBYCLASS

var items = document.getElementsByClassName("list-group-item");

console.log(items);

console.log(items[1]);
items[1].textContent = "Hello 1";
items[1].style.fontWeight = "bold";
items[0].style.backgroundColor = "Yellow";

//gives error

//items.style.backgroundColor = "#00FF";

for (i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

//selectors - queryselector

var li = document.querySelector(".title");

li.style.backgroundColor = "Green";

li.style.fontWeight = "bold";
