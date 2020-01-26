# Category Filter

## Test-Project for StoryClash

I've used a "raw" and "old fasioned" way to create this project (no minify, no babel, no React), just to keep it simple and show the vanilla javascript skills. However, I've decided to use a bit of ES6.

In normal circunstances (bigger projects), I use the [BEM](http://getbem.com/naming/) naming convention on CSS classes, but in this case, as it's a small one, I've picked simple names instead.

The `categories-config` (required by the assessment) is located in the `categories.js` file. I've chosen the named "categories" for more simplicity, but the concept is the same.

I decided to not upload this project in Github, in case you need to mantain the solved assessment hidden from other people who my be doing the test too.

To run it, just install the `serve` package (globally) with node, and then go to the project's root folder and run `serve`

---

## Requirements (all fullfilled):

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
