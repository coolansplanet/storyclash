const selectedCategories = [];
const categoriesIndex = [];
const categoriesSelectionHistory = [];
const menuElement = document.querySelector(".menu .items");
const searchBoxElement = document.querySelector(".menu .search-box");
const buttons = document.querySelector(".menu .buttons");
const contentList = document.querySelector(".content ul");

menuElement.append(createHtmlItems(categories));
apply();

menuElement.addEventListener("click", e => {
  e.stopPropagation();
  const clickedElement = e.target;
  const closestMenuItem = clickedElement.closest(".menu-item");
  if (clickedElement.classList.contains("items-container-title")) {
    const itemId = closestMenuItem.classList.item(1);
    categoriesIndex[itemId].isOpen = !categoriesIndex[itemId].isOpen;
    categoriesIndex[itemId].isOpen
      ? closestMenuItem.classList.add("is-open")
      : closestMenuItem.classList.remove("is-open");
  }
});

menuElement.addEventListener("change", e => {
  e.stopPropagation();
  const changedCheckbox = e.target;
  if (changedCheckbox.tagName === "INPUT") {
    const itemId = changedCheckbox.getAttribute("id");
    const changedItem = categoriesIndex[itemId];
    changedItem.selected = changedCheckbox.checked;
    updateParentCheckboxes(changedItem);
    updateChildrenCheckboxes(changedItem);
    halfCheckAllParents(changedItem);
    showBottomButtons();
  }
});

searchBoxElement.addEventListener("input", e => {
  e.stopPropagation();
  const allCategories = Object.values(categoriesIndex);
  const searchTerm = e.target.value;
  if (!!searchTerm) {
    const matches = [];
    allCategories.forEach(oneCategory => {
      oneCategory.listItem.classList.add("is-open");
      const listItem = oneCategory.listItem;
      if (oneCategory.label.match(new RegExp(searchTerm, "i"))) {
        listItem.classList.remove("no-match");
        matches.push(oneCategory);
      } else {
        listItem.classList.add("no-match");
      }
    });
    matches.forEach(oneMatch => showMatchedParents(oneMatch));
  } else {
    allCategories.forEach(oneCategory => {
      oneCategory.listItem.classList.remove("no-match");
    });
  }
});
buttons.querySelector(".cancel").addEventListener("click", () => {
  const lastSnapshot =
    categoriesSelectionHistory[categoriesSelectionHistory.length - 1];
  Object.values(categoriesIndex).forEach(oneCategory => {
    oneCategory.selected = oneCategory.checkbox.checked =
      lastSnapshot[oneCategory.id];
    updateParentCheckboxes(oneCategory);
    halfCheckAllParents(oneCategory);
  });
  showBottomButtons();
});

buttons.querySelector(".apply").addEventListener("click", apply);
