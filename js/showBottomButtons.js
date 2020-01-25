const showBottomButtons = () => {
  const allCategories = Object.values(categoriesIndex);
  let bothAreIdentical = false;
  let previousSnapshot =
    categoriesSelectionHistory[categoriesSelectionHistory.length - 1];

  let currentCheckingPosition = 0;
  do {
    let oneCategory = allCategories[currentCheckingPosition];
    bothAreIdentical =
      oneCategory.selected === previousSnapshot[oneCategory.id];
    currentCheckingPosition++;
  } while (bothAreIdentical && currentCheckingPosition < allCategories.length);

  if (bothAreIdentical) {
    buttons.classList.add("hide");
  } else {
    buttons.classList.remove("hide");
  }
};
