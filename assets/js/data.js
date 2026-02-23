const products = [
  {
    "id": 1,
    "name": "Running Shoes",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Men",
    "colors": ["Black", "Red"],
    "price": { "original": 2999, "discounted": 1999 },
    "images": { "thumbnail": "images/shoes/thumb.jpg", "gallery": ["images/shoes/1.jpg"] },
    "keywords": ["shoes", "running", "sports"]
  },
  {
    "id": 2,
    "name": "Training Shoes",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Women",
    "colors": ["Pink", "White"],
    "price": { "original": 2899, "discounted": 2099 },
    "images": { "thumbnail": "images/shoes-women/thumb.jpg", "gallery": ["images/shoes-women/1.jpg"] },
    "keywords": ["shoes", "training", "women"]
  },
  {
    "id": 3,
    "name": "Cricket Kit",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Blue"],
    "price": { "original": 8999, "discounted": 7499 },
    "images": { "thumbnail": "images/cricket-kit/thumb.jpg", "gallery": ["images/cricket-kit/1.jpg"] },
    "keywords": ["cricket", "kit"]
  },
  {
    "id": 4,
    "name": "Cricket Bat",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Wood"],
    "price": { "original": 5999, "discounted": 4599 },
    "images": { "thumbnail": "images/cricket-bat/thumb.jpg", "gallery": ["images/cricket-bat/1.jpg"] },
    "keywords": ["cricket", "bat"]
  },
  {
    "id": 5,
    "name": "Cricket Ball",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Red"],
    "price": { "original": 799, "discounted": 599 },
    "images": { "thumbnail": "images/cricket-ball/thumb.jpg", "gallery": ["images/cricket-ball/1.jpg"] },
    "keywords": ["cricket", "ball"]
  },

  {
    "id": 6,
    "name": "Basketball",
    "category": "Sports & Fitness",
    "subcategory": "Sports Balls",
    "gender": "Neutral",
    "colors": ["Orange"],
    "price": { "original": 1499, "discounted": 1099 },
    "images": { "thumbnail": "images/basketball/thumb.jpg", "gallery": ["images/basketball/1.jpg"] },
    "keywords": ["basketball"]
  },
  {
    "id": 7,
    "name": "Football",
    "category": "Sports & Fitness",
    "subcategory": "Sports Balls",
    "gender": "Neutral",
    "colors": ["White"],
    "price": { "original": 1599, "discounted": 1199 },
    "images": { "thumbnail": "images/football/thumb.jpg", "gallery": ["images/football/1.jpg"] },
    "keywords": ["football", "soccer"]
  },
  {
    "id": 8,
    "name": "Cricket Stumps",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Brown"],
    "price": { "original": 1999, "discounted": 1499 },
    "images": { "thumbnail": "images/stumps/thumb.jpg", "gallery": ["images/stumps/1.jpg"] },
    "keywords": ["cricket", "stumps"]
  },

  {
    "id": 9,
    "name": "Men's Jacket",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "gender": "Men",
    "colors": ["Black"],
    "price": { "original": 3999, "discounted": 2999 },
    "images": { "thumbnail": "images/jacket/thumb.jpg", "gallery": ["images/jacket/1.jpg"] },
    "keywords": ["jacket", "winter"]
  },
  {
    "id": 10,
    "name": "Women's Jacket",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "gender": "Women",
    "colors": ["Maroon"],
    "price": { "original": 4299, "discounted": 3299 },
    "images": { "thumbnail": "images/jacket-women/thumb.jpg", "gallery": ["images/jacket-women/1.jpg"] },
    "keywords": ["jacket", "women"]
  },

  {
    "id": 11,
    "name": "Kids Wear Set",
    "category": "Fashion",
    "subcategory": "Kids Clothing",
    "gender": "Kids",
    "colors": ["Blue"],
    "price": { "original": 1999, "discounted": 1499 },
    "images": { "thumbnail": "images/kids/thumb.jpg", "gallery": ["images/kids/1.jpg"] },
    "keywords": ["kids", "clothing"]
  },

  {
    "id": 12,
    "name": "Men's Jeans",
    "category": "Fashion",
    "subcategory": "Men Clothing",
    "gender": "Men",
    "colors": ["Blue"],
    "price": { "original": 2499, "discounted": 1799 },
    "images": { "thumbnail": "images/mens-jeans/thumb.jpg", "gallery": ["images/mens-jeans/1.jpg"] },
    "keywords": ["jeans", "men"]
  },
  {
    "id": 13,
    "name": "Women's Jeans",
    "category": "Fashion",
    "subcategory": "Women Clothing",
    "gender": "Women",
    "colors": ["Black"],
    "price": { "original": 2599, "discounted": 1899 },
    "images": { "thumbnail": "images/womens-jeans/thumb.jpg", "gallery": ["images/womens-jeans/1.jpg"] },
    "keywords": ["jeans", "women"]
  },

  {
    "id": 14,
    "name": "Men's Shirt",
    "category": "Fashion",
    "subcategory": "Men Clothing",
    "gender": "Men",
    "colors": ["White"],
    "price": { "original": 1999, "discounted": 1399 },
    "images": { "thumbnail": "images/shirt/thumb.jpg", "gallery": ["images/shirt/1.jpg"] },
    "keywords": ["shirt", "formal"]
  },
  {
    "id": 15,
    "name": "Women's Suit",
    "category": "Fashion",
    "subcategory": "Women Clothing",
    "gender": "Women",
    "colors": ["Green"],
    "price": { "original": 4999, "discounted": 3699 },
    "images": { "thumbnail": "images/suit/thumb.jpg", "gallery": ["images/suit/1.jpg"] },
    "keywords": ["suit", "ethnic"]
  },
  {
    "id": 16,
    "name": "Silk Saree",
    "category": "Fashion",
    "subcategory": "Women Clothing",
    "gender": "Women",
    "colors": ["Red"],
    "price": { "original": 6999, "discounted": 5499 },
    "images": { "thumbnail": "images/saree/thumb.jpg", "gallery": ["images/saree/1.jpg"] },
    "keywords": ["saree", "ethnic"]
  },

  {
    "id": 17,
    "name": "Wall Clock",
    "category": "Home & Living",
    "subcategory": "Home Decor",
    "gender": "Neutral",
    "colors": ["Black"],
    "price": { "original": 1299, "discounted": 899 },
    "images": { "thumbnail": "images/clock/thumb.jpg", "gallery": ["images/clock/1.jpg"] },
    "keywords": ["clock", "decor"]
  },
  {
    "id": 18,
    "name": "Wall Mirror",
    "category": "Home & Living",
    "subcategory": "Home Decor",
    "gender": "Neutral",
    "colors": ["Silver"],
    "price": { "original": 3499, "discounted": 2699 },
    "images": { "thumbnail": "images/mirror/thumb.jpg", "gallery": ["images/mirror/1.jpg"] },
    "keywords": ["mirror", "home"]
  },

  {
    "id": 19,
    "name": "Leather Belt",
    "category": "Accessories",
    "subcategory": "Belts",
    "gender": "Men",
    "colors": ["Brown"],
    "price": { "original": 1299, "discounted": 899 },
    "images": { "thumbnail": "images/belt/thumb.jpg", "gallery": ["images/belt/1.jpg"] },
    "keywords": ["belt", "leather"]
  },
  {
    "id": 20,
    "name": "Men's Wallet",
    "category": "Accessories",
    "subcategory": "Wallets",
    "gender": "Men",
    "colors": ["Black"],
    "price": { "original": 1499, "discounted": 1099 },
    "images": { "thumbnail": "images/wallet/thumb.jpg", "gallery": ["images/wallet/1.jpg"] },
    "keywords": ["wallet"]
  },

  {
    "id": 21,
    "name": "Hand Bag",
    "category": "Accessories",
    "subcategory": "Bags",
    "gender": "Women",
    "colors": ["Pink"],
    "price": { "original": 2999, "discounted": 2299 },
    "images": { "thumbnail": "images/bag/thumb.jpg", "gallery": ["images/bag/1.jpg"] },
    "keywords": ["bag", "handbag"]
  },

  {
    "id": 22,
    "name": "Travel Backpack",
    "category": "Accessories",
    "subcategory": "Bags",
    "gender": "Neutral",
    "colors": ["Grey"],
    "price": { "original": 3499, "discounted": 2699 },
    "images": { "thumbnail": "images/backpack/thumb.jpg", "gallery": ["images/backpack/1.jpg"] },
    "keywords": ["bag", "travel"]
  },

  {
    "id": 23,
    "name": "Earrings",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "gender": "Women",
    "colors": ["Gold"],
    "price": { "original": 999, "discounted": 699 },
    "images": { "thumbnail": "images/earrings/thumb.jpg", "gallery": ["images/earrings/1.jpg"] },
    "keywords": ["earrings", "jewelry"]
  },
  {
    "id": 24,
    "name": "Bracelets",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "gender": "Neutral",
    "colors": ["Silver"],
    "price": { "original": 899, "discounted": 599 },
    "images": { "thumbnail": "images/bracelet/thumb.jpg", "gallery": ["images/bracelet/1.jpg"] },
    "keywords": ["bracelet", "jewelry"]
  },

  {
    "id": 25,
    "name": "Kids Sports Shoes",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Kids",
    "colors": ["Blue"],
    "price": { "original": 1999, "discounted": 1499 },
    "images": { "thumbnail": "images/kids-shoes/thumb.jpg", "gallery": ["images/kids-shoes/1.jpg"] },
    "keywords": ["kids", "shoes"]
  }
];
