const createHtmlItems = item => {
  const ul = document.createElement("ul");
  item.content.forEach(oneChildItem => {
    oneChildItem.selected = false;
    oneChildItem.isOpen = false;
    oneChildItem.id = item.id + "-" + oneChildItem.id;
    oneChildItem.parent = item;
    categoriesIndex[oneChildItem.id] = oneChildItem;
    ul.appendChild(createOneHtmlItem(oneChildItem));
  });
  return ul;
};
