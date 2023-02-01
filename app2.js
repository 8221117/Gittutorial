var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

var filter = document.getElementById("filter");

//form submit event

form.addEventListener("submit", addItem);

//del event

itemList.addEventListener("click", removeItem);

// filter event

filter.addEventListener("keyup", filterItems);

//create element

var newInput = document.createElement("input");

newInput.className = "form-control mr-2";

newInput.id = "description";

newInput.setAttribute("type", "text");

form.appendChild(newInput);

//console.log(newInput);

//console.log(form);

var submitbtn = document.getElementById("insert");

var parent = submitbtn.parentNode;
parent.insertBefore(newInput, submitbtn);

//add item function
function addItem(e) {
  e.preventDefault();
  // console.log(1);

  //get the input value for the form input type=text

  var newItem = document.getElementById("item").value;

  //create new li element

  var li = document.createElement("li");

  // add class name to the li

  li.className = "list-group-item";

  //console.log(li);

  // add text node with input value into the li from the add form element (submit button)

  li.appendChild(document.createTextNode(newItem));

  //create delete button element

  var delBtn = document.createElement("button");

  // add class name to the delete button

  delBtn.className = "btn btn-danger btn-sm float-right delete";

  //add text node to the delete button with value x ;

  delBtn.appendChild(document.createTextNode("x"));

  // add the delete button to the li

  li.appendChild(delBtn);

  // create edit button

  var editBtn = document.createElement("button");

  //add text node to the edit button with value edit ;

  editBtn.appendChild(document.createTextNode("Edit"));

  // add class name to the edit button

  editBtn.className = "btn btn-primary btn-sm float-right edit";

  // add the edit button to the li

  li.appendChild(editBtn);

  // add description functionality .

  var newItemdescription = document.getElementById("description").value;

  // add description text node with input value into the li from the add form element (submit button)

  li.appendChild(document.createTextNode(newItemdescription));

  // itemList.appendChild(li);

  // add li to Ul

  itemList.appendChild(li);
}

// remove li Item function

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    //console.log(1);
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement; // li is the parent element of del button
      itemList.removeChild(li); //ul (itemList) is the parent of li.
    }
  }
}

// function for filter item

function filterItems(e) {
  //e.preventDefault();

  var text = e.target.value.toLowerCase();
  console.log(text);
  //get lis
  var items = itemList.getElementsByTagName("li");
  //convert to an array

  Array.from(items).forEach(function (item) {
    //var itemName = item.firstChild.textContent; // searchonly with the first box content which matches.
    var itemName = item.textContent;
    //console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
/** //create element

var newInput = document.createElement("input");

newInput.className = "form-control mr-2";

newInput.id = "description";

newInput.setAttribute("type", "text");

form.appendChild(newInput);

console.log(newInput);

console.log(form);

var newItemdescription = document.getElementById("description").value;

// add description text node with input value into the li from the add form element (submit button)

li.appendChild(document.createTextNode(newItemdescription)); **/
