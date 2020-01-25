const saveSelectionStateInHistory = () => {
  const snapshot = [];
  Object.values(categoriesIndex).forEach(oneCategory => {
    snapshot[oneCategory.id] = oneCategory.selected;
  });
  categoriesSelectionHistory.push(snapshot);
};
