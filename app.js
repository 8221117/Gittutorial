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

//var header = document.getElementById("main-header");

//header.style.borderBottom = "solid 3px #000";

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

/*var li = document.querySelector(".title");

li.style.backgroundColor = "Green";

li.style.fontWeight = "bold";

var header = document.querySelector("#main-header");

header.style.borderBottom = "solid 3px #000";

var input = document.querySelector("input"); // though there are lots of input elements available , it will take only the first element.

input.value = "hello world";

var submit = document.querySelector("input[type='submit']");

submit.value = "send";
submit.style.backgroundColor = "pink";

var item = document.querySelector(".list-group-item");

item.style.color = "blue"; // changes only for the first li(item 1)

var lastItems = document.querySelector(".list-group-item:last-child");

lastItems.style.color = "red"; //for last item in the list.

var secondItems = document.querySelector(".list-group-item:nth-child(2)");

secondItems.style.backgroundColor = "orange"; //for 2nd  item in the list.

//var thirdElement = document.querySelector(".list-group-item:nth-child(3)");

//thirdElement.style.display = "none";  // makes the third item invisible. */

//selectors - GETELEMENTSBYTAGNAME

//var li = document.getElementsByTagName("li");

//console.log(li);

//console.log(li[1]);
//li[1].textContent = "Hello 2";
//li[1].style.fontWeight = "bold";
//li[2].style.backgroundColor = "green";

//for (i = 0; i < li.length; i++) {
//li[i].style.backgroundColor = "yellow";
//li[i].style.fontWeight = "bold";
//}

//selectors - querySelectorAll

var titles = document.querySelectorAll(".title");

console.log(titles); // gives us the nodelist which is similar to collection , we can run array functions on node lists.

titles[0].textContent = "Hi!"; // chnages the first title's text to hi

var odd = document.querySelectorAll("li:nth-child(odd)");

for (i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green"; // makes all the odd li elements background to green
}

var lisecond = document.querySelectorAll("li");

lisecond[1].style.backgroundColor = "white"; //makes second item in li to white background.
lisecond[1].style.color = "green"; //makes second item in li to green font color.

//traversing the DOM .

var itemList = document.querySelector("#items"); // Selects the ul tag of id = items

//parentnode

//console.log(itemList.parentNode); // Gives the parent of the UL which is div here

//itemList.parentNode.style.backgroundColor = "yellow"; // changes the parent node (div with id main)to yellow.

//console.log(itemList.parentNode.parentNode); // gives the parent of div with id main as div with container class

// console.log(itemList.parentNode.parentNode.parentNode); // gives the body which is parent element of div class container.

//Parentelement (same as parent node)

console.log(itemList.parentElement); // Gives the parent of the UL which is div here

itemList.parentElement.style.backgroundColor = "yellow"; // changes the parent node (div with id main)to yellow.

console.log(itemList.parentElement.parentElement); // gives the parent of div with id main as div with container class

console.log(itemList.parentElement.parentElement.parentElement); // gives the body which is parent element of div class container.

//childnodes

//console.log(itemList.childNodes); //gIves all the  childs of ul . ie li but with linebreak as another text nodes .

//children

console.log(itemList.children); // gives all the child of ul ie li
console.log(itemList.children[1]);
itemList.children[3].style.backgroundColor = "orange";

//Firstchild (more or less same like child nodes )

console.log(itemList.firstChild); //gives the first text node (extra line break ) like child node . if we remove the linebreak before the li 1 , then it will give li 1.

//firstelementchild

console.log(itemList.firstElementChild); // gives the first li , as line breaks are not considered here like firstChild.

itemList.firstElementChild.textContent = "Boo";

//Lastchild (more or less same like child nodes )

console.log(itemList.lastChild); //gives the last text node (extra line break ) like child node . if we remove the linebreak before the li 1 , then it will give li 1.

//lastelementchild

console.log(itemList.lastElementChild); // gives the last li , as line breaks are not considered here like last Child.

itemList.lastElementChild.textContent = "Boo boo";

//nextsibling

console.log(itemList.nextSibling); //gives the text line break element as sibling

//nextElementSibling

console.log(itemList.nextElementSibling); // gives span tag .

//previoussibling
console.log(itemList.previousSibling);

//previousElementSibling

console.log(itemList.previousElementSibling); // Gives h2 element which is above the ul .

itemList.previousElementSibling.style.backgroundColor = "blue";

//createElement

var newDiv = document.createElement("div");
//add class
newDiv.className = "sam";
//add id
newDiv.id = "nandhu";

// add attribute
newDiv.setAttribute("title", "hello div");

console.log(newDiv);

//create text node

var newdivText = document.createTextNode("hello world");

// appendchild - add text to div
newDiv.style.fontSize = "30px";
newDiv.appendChild(newdivText); // now it is javascript . this we need to insert into the dom .
console.log(newDiv);

//inserting the div element into the DOM

// Now we can put it below header of div class container between line no 17 and 18 in html .
var container = document.querySelector("header .container");

var h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1); // adds newDiv before h1 in the header div class container .

//createElement
var para = document.createElement("p");

para.className = "bujju";

para.setAttribute("title", "hello para");

//create text node

var newParatext = document.createTextNode("Hello ");

para.appendChild(newParatext);

console.log(para);

var container2 = document.querySelector("div .list-group");

var li1 = document.querySelector("div .list-group-item");

container2.insertBefore(para, li1);
