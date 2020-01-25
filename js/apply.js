const apply = () => {
  saveSelectionStateInHistory();
  contentList
    .querySelectorAll("*")
    .forEach(oneListItem => oneListItem.remove());
  const noItemsAreSelected = Object.values(categoriesIndex).every(
    oneCategory => !oneCategory.selected
  );
  content.forEach(oneItem => {
    if (noItemsAreSelected || categoriesIndex[oneItem.id].selected) {
      const newListItem = document.createElement("li");
      newListItem.append(document.createTextNode(oneItem.label));
      contentList.appendChild(newListItem);
    }
  });
  showBottomButtons();
};
