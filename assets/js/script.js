

function getDistinctCategories(products) {
  return [...new Set(products.map(p => p.category))];
}

const categories = (getDistinctCategories(products)).sort();

console.log(categories);

function getSubcategoriesByCategory(products, category) {
  return [
    ...new Set(
      products
        .filter(p => p.category === category)
        .map(p => p.subcategory)
    )
  ];
}

const categoriesDropdownPanel = document.getElementById('categories_dropdown_panel');

const categories_scrollbar = document.getElementById('categories_scrollbar');


categories.forEach(category => {
  const categoryList = document.createElement('ul');
  categoryList.classList.add('dropdown-panel-list');

  const categoryTitle = document.createElement('li');
  categoryTitle.classList.add('menu-title');

  const categoryItem = document.createElement('a');
  categoryItem.href = '#';
  categoryItem.textContent = category;
  categoryTitle.appendChild(categoryItem);

  categoryList.appendChild(categoryTitle);

  const subcategories = getSubcategoriesByCategory(products, category);
  subcategories.forEach(subcategory => {
    const subcategoryItem = document.createElement('li');
    subcategoryItem.classList.add('panel-list-item');
    subcategoryItem.innerHTML = `<a href="#">${subcategory}</a>`;
    categoryList.appendChild(subcategoryItem);

    const subcategoryItemScrollbar = document.createElement('div');
    subcategoryItemScrollbar.classList.add('category-item');
    const subcategoryItemScrollbarImg = document.createElement('div');
    subcategoryItemScrollbarImg.classList.add('category-img-box');
    subcategoryItemScrollbarImg.innerHTML = `<img src="./assets/images/icons/>${subcategory}" alt="${subcategory}" width="30">`;
    const subcategoryItemScrollbarContentbox = document.createElement('div');
    subcategoryItemScrollbarContentbox.classList.add('category-content-box');
    const subcategoryItemScrollbarContentflex = document.createElement('div');
    subcategoryItemScrollbarContentflex.classList.add('category-content-flex');
    subcategoryItemScrollbarContentflex.innerHTML = `<h3 class="category-item-title">${subcategory}</h3>`;
    subcategoryItemScrollbarContentflex.innerHTML = `<p class="category-item-amount">(${getItemCountBySubcategory(subcategory)})</p>`;
    subcategoryItemScrollbarContentflex.innerHTML = `<a href="#" class="category-btn">Show all</a>`;
    subcategoryItemScrollbarContentbox.appendChild(subcategoryItemScrollbarContentflex);
    subcategoryItemScrollbar.appendChild(subcategoryItemScrollbarImg);
    subcategoryItemScrollbar.appendChild(subcategoryItemScrollbarContentbox);
    categories_scrollbar.appendChild(subcategoryItemScrollbar);
  });
  categoriesDropdownPanel.appendChild(categoryList);
});


function getItemCountBySubcategory(subcategory) {
  return products.filter(p => p.subcategory === subcategory).length;
}

categories.forEach(category => {
  const categoryList = document.createElement('ul');
  categoryList.classList.add('dropdown-panel-list');

  const categoryTitle = document.createElement('li');
  categoryTitle.classList.add('menu-title');

  const categoryItem = document.createElement('a');
  categoryItem.href = '#';
  categoryItem.textContent = category;
  categoryTitle.appendChild(categoryItem);

  categoryList.appendChild(categoryTitle);

  const subcategories = getSubcategoriesByCategory(products, category);
  subcategories.forEach(subcategory => {
    const subcategoryItem = document.createElement('li');
    subcategoryItem.classList.add('panel-list-item');
    subcategoryItem.innerHTML = `<a href="#">${subcategory}</a>`;
    categoryList.appendChild(subcategoryItem);
  });
  categoriesDropdownPanel.appendChild(categoryList);
});