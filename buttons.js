maxSpace = 30
usedSpace = 15
formDisplayed = false
names = document.getElementById('item-label')
stocks = document.getElementById('item-stocks')

/**
 *  Updates the max space counter in the deactiated text box
 */
function updateSpaceCounter() {
  document.getElementById('count').value = maxSpace
  return
}

/**
 *  Called by button "Confirm" in the form - adds the object
 *  specified in the form and updates the object table
 */
var addItems = function() {
  var newItem = document.getElementById("object-input").value;
  var quantity = document.getElementById("quantity-input").value
  if (newItem == "" || quantity == "") {
    // no text inserted
    return;
  }
  quantity = parseInt(quantity)
  if (isNaN(quantity) || quantity < 0) {
    // user inserted non-numerical input
    return;
  }
  if (spaceEnough() && usedSpace + quantity <= maxSpace) {
    // updating the occupied space counter
    usedSpace += quantity;
    // There is room for more
    var alreadyIn = false
    var nch = names.childNodes;
    var sch = stocks.childNodes;
    for (i=0; i<nch.length && !alreadyIn; i++) {
      if (nch[i].textContent == newItem) {
        // the item was already in the list
        oldQuantity = parseInt(sch[i].textContent)
        quantity += oldQuantity
        sch[i].textContent = quantity;
        alreadyIn = true
      }
    }
    if (!alreadyIn) {
      // the item was not in the list;
      if(quantity == 0 && confirm("Should i create an empty record for item " + newItem + "?") == false) {
        // user specified a quantity of 0 and he doesn't want to create a record on the table.
        return;
      }
      // let's add a new column for that item...
      var newLabel = document.createElement('td')
      newLabel.innerHTML = newItem
      names.appendChild(newLabel);
      // ...and set its quantity:
      var newStocks = document.createElement('td')
      newStocks.innerHTML = quantity
      stocks.appendChild(newStocks)
    }
    filledForm = document.getElementById("form").parentElement
    deleteForm(filledForm)
    formDisplayed = false
  } else {
    alert("You need " + -(maxSpace - usedSpace - quantity) + " more spaces before adding " + quantity + " " + newItem);
  }
  return;
}

/**
 *  Asks user how much space he wants to add and increases maximum storage space
 */
function addSpace() {
  spaceEnough()
  var newSpace = parseInt(prompt("How much space should we add?"))
  if (newSpace > 0) {
    maxSpace += newSpace
  } else {
    alert("Please insert a positive number")
  }
  updateSpaceCounter()
  return;
}

/**
 *  Called by button "AddItems" - creates a new form based on
 *  function "newForm" in form.js
 */
function showForm() {
  if (spaceEnough() && !formDisplayed) {
    var form = newForm()
    var container = document.getElementById("form-container")
    container.appendChild(form)
    container.style.display = "block"
    formDisplayed = true
  }
  return
}

/**
 *  Warns the user if maximum storage space has been reached
 *  @return {boolean} true if there is some space left, false if not.
 */
function spaceEnough() {
  space = (usedSpace < maxSpace)
  if (!space) {
    alert("WARNING! Your Warehouse is full.");
  }
  return space
}
