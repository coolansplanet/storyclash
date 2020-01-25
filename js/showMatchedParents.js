const showMatchedParents = oneMatch => {
  if (!!oneMatch.parent && !!oneMatch.parent.listItem) {
    oneMatch.parent.listItem.classList.remove("no-match");
    showMatchedParents(oneMatch.parent);
  }
};
