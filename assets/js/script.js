

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
    subcategoryItemScrollbarImg.innerHTML = `<img src="./assets/images/icons/${subcategory}.png" alt="${subcategory}" width="30">`;
    const subcategoryItemScrollbarContentbox = document.createElement('div');
    subcategoryItemScrollbarContentbox.classList.add('category-content-box');
    const subcategoryItemScrollbarContentflex = document.createElement('div');
    subcategoryItemScrollbarContentflex.classList.add('category-content-flex');
    subcategoryItemScrollbarContentflex.innerHTML = `<h3 class="category-item-title">${subcategory}</h3>`;
    subcategoryItemScrollbarContentflex.innerHTML += `<p class="category-item-amount">(${getItemCountBySubcategory(subcategory)})</p>`;
    subcategoryItemScrollbarContentbox.appendChild(subcategoryItemScrollbarContentflex);
    subcategoryItemScrollbarContentbox.innerHTML += `<a href="#" class="category-btn">Show all</a>`;
    subcategoryItemScrollbar.appendChild(subcategoryItemScrollbarImg);
    subcategoryItemScrollbar.appendChild(subcategoryItemScrollbarContentbox);
    categories_scrollbar.appendChild(subcategoryItemScrollbar);
  });
  categoriesDropdownPanel.appendChild(categoryList);
});

function getItemCountBySubcategory(subcategory) {
  return products.filter(p => p.subcategory === subcategory).length;
}

const loopcountForShowcase = 0;

const showcaseNewArrivals1 = document.getElementById('showcase_new_arrivals1');
const showcaseNewArrivals2 = document.getElementById('showcase_new_arrivals2');

newArrivals.forEach(productId => {
  const product = products.find(p => p.id === productId);
  const sbhtml  = `
      <div class="showcase" style="position: relative;">
        <div class="showcase-actions" style="position: absolute; top: 30px; right: 10px;">
          <button class="btn-action wishlist-btn" style="margin-bottom: 10px;" data-id="${product.id}">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button class="btn-action add-to-cart-btn" style="margin-top: 10px;" data-id="${product.id}">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
        <a href="#" class="showcase-img-box">
          <img src="assets/${product.images.thumbnail}" alt="${product.name}" class="showcase-img" width="75" height="75">
        </a>
        <div class="showcase-content">
          <a href="#">
            <h4 class="showcase-title">${product.name}</h4>
          </a>
          <a href="#" class="showcase-category">${product.subcategory}</a>
          <div class="price-box">
            <p class="price">₹${product.price.discounted}</p>
            <del>₹${product.price.original}</del>
          </div>
        </div>
      </div>`;
  
  if(newArrivals.indexOf(productId) < 4) {
    showcaseNewArrivals1.innerHTML += sbhtml;
  } else {
    showcaseNewArrivals2.innerHTML += sbhtml;
  }
});

const showcaseTrending1 = document.getElementById('showcase_trending1');
const showcaseTrending2 = document.getElementById('showcase_trending2');

trending.forEach(productId => {
  const product = products.find(p => p.id === productId);
  const sbhtml  = `
      <div class="showcase" style="position: relative;">
        <div class="showcase-actions" style="position: absolute; top: 30px; right: 10px;">
          <button class="btn-action wishlist-btn" style="margin-bottom: 10px;" data-id="${product.id}">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button class="btn-action add-to-cart-btn" style="margin-top: 10px;" data-id="${product.id}">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
        <a href="#" class="showcase-img-box">
          <img src="assets/${product.images.thumbnail}" alt="${product.name}" class="showcase-img" width="75" height="75">
        </a>
        <div class="showcase-content">
          <a href="#">
            <h4 class="showcase-title">${product.name}</h4>
          </a>
          <a href="#" class="showcase-category">${product.subcategory}</a>
          <div class="price-box">
            <p class="price">₹${product.price.discounted}</p>
            <del>₹${product.price.original}</del>
          </div>
        </div>
      </div>`;
  
  if(trending.indexOf(productId) < 4) {
    showcaseTrending1.innerHTML += sbhtml;
  } else {
    showcaseTrending2.innerHTML += sbhtml;
  }
});

const showcasetoprated1 = document.getElementById('showcase_top_rated1');
const showcasetoprated2 = document.getElementById('showcase_top_rated2');

topRated.forEach(productId => {
  const product = products.find(p => p.id === productId);
  const sbhtml  = `
      <div class="showcase" style="position: relative;">
        <div class="showcase-actions" style="position: absolute; top: 30px; right: 10px;">
          <button class="btn-action wishlist-btn" style="margin-bottom: 10px;" data-id="${product.id}">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button class="btn-action add-to-cart-btn" style="margin-top: 10px;" data-id="${product.id}">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
        <a href="#" class="showcase-img-box">
          <img src="assets/${product.images.thumbnail}" alt="${product.name}" class="showcase-img" width="75" height="75">
        </a>
        <div class="showcase-content">
          <a href="#">
            <h4 class="showcase-title">${product.name}</h4>
          </a>
          <a href="#" class="showcase-category">${product.subcategory}</a>
          <div class="price-box">
            <p class="price">₹${product.price.discounted}</p>
            <del>₹${product.price.original}</del>
          </div>
        </div>
      </div>`;
  
  if(topRated.indexOf(productId) < 4) {
    showcasetoprated1.innerHTML += sbhtml;
  } else {
    showcasetoprated2.innerHTML += sbhtml;
  }
});

const product_grid = document.getElementById('product-grid');

products.forEach(product => {
  if(newArrivals.indexOf(product.id) === -1 && trending.indexOf(product.id) === -1 && topRated.indexOf(product.id) === -1 && product.id !== 51 && product.id !== 52) {
  const sbhtml = `
      <div class="showcase">
                <div class="showcase-banner">
                  <img src="assets/${product.images.thumbnail}" alt="${product.name}" width="300" class="product-img default">
                  <img src="assets/${product.images.thumbnail}" alt="${product.name}" width="300" class="product-img hover">
                  <div class="showcase-actions">
                    <button class="btn-action wishlist-btn" data-id="${product.id}">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
                    <button class="btn-action" data-id="${product.id}">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
                    <button class="btn-action" data-id="${product.id}">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
                    <button class="btn-action add-to-cart-btn" data-id="${product.id}">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
                <div class="showcase-content">
                  <a href="#" class="showcase-category">${product.subcategory}</a>
                  <a href="#">
                    <h3 class="showcase-title">${product.name}</h3>
                  </a>
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
                  <div class="price-box">
                    <p class="price">₹${product.price.discounted}</p>
                    <del>₹${product.price.original}</del>
                  </div>
                </div>
              </div>`;
    product_grid.innerHTML += sbhtml;
  }
});

document.addEventListener("click", function (e) {
  const button = e.target.closest(".wishlist-btn");
  if (!button) return;
  const productId = button.dataset.id;
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const icon = button.querySelector("ion-icon");

  if (wishlist.includes(productId)) {
    // Remove from wishlist
    wishlist = wishlist.filter(id => id !== productId);
    icon.setAttribute("name", "heart-outline");
  } else {
    // Add to wishlist
    wishlist.push(productId);
    icon.setAttribute("name", "heart");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  const wishlistCounter = document.querySelector("#wishlist-counter .count");
  wishlistCounter.textContent = wishlist.length;
});

document.addEventListener("DOMContentLoaded", function () {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  document.querySelectorAll(".wishlist-btn").forEach(button => {
    const productId = button.dataset.id;
    const icon = button.querySelector("ion-icon");
    if (wishlist.includes(productId)) {
      icon.setAttribute("name", "heart"); // filled heart
    } else {
      icon.setAttribute("name", "heart-outline"); // outlined heart
    }

    const wishlistCounter = document.querySelector("#wishlist-counter .count");
    wishlistCounter.textContent = wishlist.length;
  });
});

document.addEventListener("click", function (e) {
  const button = e.target.closest(".add-to-cart-btn");
  if (!button) return;
  const productId = button.dataset.id;
  let wishlist = JSON.parse(localStorage.getItem("cart")) || [];
  const icon = button.querySelector("ion-icon");

  if (wishlist.includes(productId)) {
    // Remove from wishlist
    wishlist = wishlist.filter(id => id !== productId);
    icon.setAttribute("name", "bag-handle-outline");
  } else {
    // Add to wishlist
    wishlist.push(productId);
    icon.setAttribute("name", "bag-handle");
  }

  localStorage.setItem("cart", JSON.stringify(wishlist));

  const wishlistCounter = document.querySelector("#cart-counter .count");
  wishlistCounter.textContent = wishlist.length;
});

document.addEventListener("DOMContentLoaded", function () {
  const wishlist = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    const productId = button.dataset.id;
    const icon = button.querySelector("ion-icon");
    if (wishlist.includes(productId)) {
      icon.setAttribute("name", "bag-handle"); // filled heart
    } else {
      icon.setAttribute("name", "bag-handle-outline"); // outlined heart
    }
    
    const wishlistCounter = document.querySelector("#cart-counter .count");
    wishlistCounter.textContent = wishlist.length;
  });
});