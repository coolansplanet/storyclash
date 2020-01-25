const createOneHtmlItem = item => {
  const { label, id } = item;
  const li = document.createElement("li");
  const input = document.createElement("input");
  const fakeCheckbox = document.createElement("label");
  const labelText = document.createTextNode(label);
  let classes = "";
  let subItems = "";
  let child = "";
  if (item.content) {
    subItems = createHtmlItems(item);
    classes = "items-container";
    child = document.createElement("span");
    child.className = "items-container-title";
    child.appendChild(labelText);
  } else {
    child = document.createElement("label");
    child.setAttribute("for", id);
    child.appendChild(labelText);
  }

  li.className = `menu-item ${id + " " + classes}`;
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", id);
  input.style.display = "none";
  li.appendChild(input);
  li.appendChild(fakeCheckbox);
  fakeCheckbox.classList.add("fake-checkbox");
  fakeCheckbox.setAttribute("for", id);
  li.appendChild(child);
  li.append(subItems);
  item.checkbox = input;
  item.listItem = li;
  return li;
};
