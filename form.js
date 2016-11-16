/**
 *  Creates the elements for a new form and returns the <form> element
 *  @return {Node} a DOM node whih contains the nodes the form is made of (see below)
 */

  // FORM HTML:
  //
  //    <form id="form" style="width: 300px; border-style: solid; border-color: black; border-width: 1px;">
  //      <label>Object </label> <input id="object-input" name="object" type="text" placeholder="Object name">
  //      <br>
  //      <label>Quantity </label> <input id="quantity-input" name="quantity" type="text" placeholder="Please insert a positive number">
  //      <br>
  //      <input id="submit" type="button" value="Confirm" onmousedown="addItems()">
  //    </form>

function newForm() {

  var form = document.createElement("form")
  form.style = "heigth:100px;width:300px;border-style:solid;border-color:black;border-width:1px"
  form.id = "form"

  var ObjLabel = document.createElement("label")
  ObjLabel.textContent = "Object "

  var ObjInput = document.createElement("input")
  ObjInput.id = "object-input"
  ObjInput.name = "object"
  ObjInput.type = "text"
  ObjInput.placeholder = "Object name"

  var QtyLabel = document.createElement("label")
  QtyLabel.textContent = "Quantity "

  var QtyInput = document.createElement("input")
  QtyInput.id = "quantity-input"
  QtyInput.name = "quantity"
  QtyInput.type = "text"
  QtyInput.placeholder = "Please insert a positive number"

  var submit = document.createElement("input")
  submit.id = "submit"
  submit.type = "button"
  submit.value = "Confirm"
  submit.setAttribute("onmousedown", "addItems()")

  // adding all items under "form" in the DOM tree
  form.appendChild(ObjLabel)
  form.appendChild(ObjInput)
  form.appendChild(document.createElement("br"))
  form.appendChild(QtyLabel)
  form.appendChild(QtyInput)
  form.appendChild(document.createElement("br"))
  form.appendChild(submit)

  return form
}

/**
 *  Deletes the form specified as parameter, and replaces it with a placeholder comment
 *  @param {Node} parent the Node which contains the form to delete
 */

function deleteForm(parent) {
  parent.innerHTML = "<!-- The form is created here -->"
}
