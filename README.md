# Category Filter

## Test-Project for StoryClash

I've used a "raw" and "old fasioned" way to create this project (no minify, no babel, no React), just to keep it simple and show the vanilla javascript skills. However, I've decided to use ES6.

In normal circunstances (bigger projects), I use the [BEM](http://getbem.com/naming/) naming convention on classes, but in this case, as it's a small one, I've picked simple names instead.

---

### Sample Video:

https://drive.google.com/file/d/1Jb7Aa_HjPs5eYGF5qDudgFb51I0DrDcs/view?usp=sharing

## Description

The user should be able to

- Search for Categories
  - If the user searches for categories only the results that match the search term and their parent category-groups (up until root) should be visible.
- Select Categories
  - The user should be able to select/unselect categories and category-groups
  - If the user selects a category-group all subcategories and sub-category-groups should be selected
  - If the user unselects a category-group all sub-categories and sub-category-groups should be unselected
  - Categories:
    - Selected categories have a check-icon
    - Unselected categories have a empty box icon
  - Category-groups
    - selected category-groups (all children are selected) have a check-icon
    - unselected category-groups (no child is selected) have a empty box icon
    - partly selected category groups (at least one but not all children are selected) have a grey filled box icon
- Apply Selection
  - if the user changes the selection two buttons appear
    - cancel button
      - click on cancel reverts the changed selection back to the last applied selection
    - apply button
      - apply button applies the current selection
    - after click on apply/cancel both buttons should disappear again (as there are no changes to the current applied selection anymore)
- See what elements are currently applied
  - create a list/div outside the category filter where the user can see (comma separated) which elements are currently applied (category-groups and categories)

### Notes

- Provide a categories-config (json or whatever type you prefer) that contains the tree structure of the categories/category-groups
- If you want to implement different icons for each category/group - please consider this in the categories-config
- You can implement the search functionality either in js or by using ajax calls to php scripts (if you want to prove your backend skills aswell -> in this case provide the categories-config in php)
