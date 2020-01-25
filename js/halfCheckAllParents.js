const halfCheckAllParents = item => {
  const halfCheckOneParent = oneItem => {
    if (!!oneItem.parent && !!oneItem.parent.checkbox) {
      oneItem.parent.checkbox.classList.add("some-children-selected");
      halfCheckOneParent(oneItem.parent);
    }
  };
  !item.parent.content.every(oneItem => {
    return oneItem.selected === item.selected;
  }) && halfCheckOneParent(item);
};
