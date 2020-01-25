const updateParentCheckboxes = item => {
  const parentItem = item.parent;
  const updateItem = selected =>
    (parentItem.selected = parentItem.checkbox.checked = selected);

  if (!!parentItem.parent) {
    if (
      parentItem.content.every(oneItem => {
        return oneItem.selected === item.selected;
      })
    ) {
      updateItem(item.selected);
      parentItem.checkbox.classList.remove("some-children-selected");
    } else {
      updateItem(false);
    }
    updateParentCheckboxes(parentItem);
  }
};
