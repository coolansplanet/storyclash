const updateChildrenCheckboxes = item => {
  if (item.content && item.content.length > 0) {
    item.checkbox.classList.remove("some-children-selected");
    item.content.forEach(oneItem => {
      oneItem.checkbox.checked = oneItem.selected = item.selected;
      updateChildrenCheckboxes(oneItem);
    });
  }
};
