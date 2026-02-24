const products = [
  {
    "id": 1,
    "name": "Running Shoes",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Men",
    "colors": ["Black", "Red"],
    "price": { "original": 2999, "discounted": 1999 },
    "images": { "thumbnail": "images/products/sports-1.jpg", "gallery": ["images/shoes/1.jpg"] },
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
    "images": { "thumbnail": "images/products/sports-3.jpg", "gallery": ["images/shoes-women/1.jpg"] },
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
    "images": { "thumbnail": "images/products/cricketkit.jpg", "gallery": ["images/cricket-kit/1.jpg"] },
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
    "images": { "thumbnail": "images/products/cricketbat.jpg", "gallery": ["images/cricket-bat/1.jpg"] },
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
    "images": { "thumbnail": "images/products/cricketball.jpg", "gallery": ["images/cricket-ball/1.jpg"] },
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
    "images": { "thumbnail": "images/products/basketball.jpg", "gallery": ["images/basketball/1.jpg"] },
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
    "images": { "thumbnail": "images/products/football.jpg", "gallery": ["images/football/1.jpg"] },
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
    "images": { "thumbnail": "images/products/stumps.jpg", "gallery": ["images/stumps/1.jpg"] },
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
    "images": { "thumbnail": "images/products/jacket-1.jpg", "gallery": ["images/jacket/1.jpg"] },
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
    "images": { "thumbnail": "images/products/jacket-5.jpg", "gallery": ["images/jacket-women/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Kids Wear Set.jpg", "gallery": ["images/kids/1.jpg"] },
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
    "images": { "thumbnail": "images/products/mens-jeans.jpg", "gallery": ["images/mens-jeans/1.jpg"] },
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
    "images": { "thumbnail": "images/products/womens-jeans.jpg", "gallery": ["images/womens-jeans/1.jpg"] },
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
    "images": { "thumbnail": "images/products/mens-shirt.jpg", "gallery": ["images/shirt/1.jpg"] },
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
    "images": { "thumbnail": "images/products/womens-suit.jpg", "gallery": ["images/suit/1.jpg"] },
    "keywords": ["suit", "ethnic"]
  },
  {
    "id": 17,
    "name": "Wall Clock",
    "category": "Home & Living",
    "subcategory": "Home Decor",
    "gender": "Neutral",
    "colors": ["Black"],
    "price": { "original": 1299, "discounted": 899 },
    "images": { "thumbnail": "images/products/Wall Clock.jpg", "gallery": ["images/clock/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Wall Mirror.jpg", "gallery": ["images/mirror/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Leather Belt.jpg", "gallery": ["images/belt/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Men-Wallet.jpg", "gallery": ["images/wallet/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Hand Bag.jpg", "gallery": ["images/bag/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Travel Backpack.jpg", "gallery": ["images/backpack/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Earrings.jpg", "gallery": ["images/earrings/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Bracelets.jpg", "gallery": ["images/bracelet/1.jpg"] },
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
    "images": { "thumbnail": "images/products/Kids Sports Shoes.jpg", "gallery": ["images/kids-shoes/1.jpg"] },
    "keywords": ["kids", "shoes"]
  },
  {
    "id": 26,
    "name": "Men's Sports Shoes",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Men",
    "colors": ["Grey"],
    "price": { "original": 2799, "discounted": 2199 },
    "images": { "thumbnail": "images/products/Men Sports Shoes.jpg", "gallery": ["images/shoes-men2/1.jpg"] },
    "keywords": ["shoes", "sports"]
  },
  {
    "id": 27,
    "name": "Women's Running Shoes",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Women",
    "colors": ["Purple"],
    "price": { "original": 2899, "discounted": 2299 },
    "images": { "thumbnail": "images/products/Women Running Shoes.jpg", "gallery": ["images/shoes-women2/1.jpg"] },
    "keywords": ["shoes", "running"]
  },
  {
    "id": 28,
    "name": "Professional Cricket Bat",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Wood"],
    "price": { "original": 7999, "discounted": 6499 },
    "images": { "thumbnail": "images/products/Professional Cricket Bat.jpg", "gallery": ["images/cricket-bat2/1.jpg"] },
    "keywords": ["cricket", "bat"]
  },
  {
    "id": 29,
    "name": "Leather Cricket Ball",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Red"],
    "price": { "original": 999, "discounted": 749 },
    "images": { "thumbnail": "images/products/Leather Cricket Ball.jpg", "gallery": ["images/cricket-ball2/1.jpg"] },
    "keywords": ["cricket", "ball"]
  },
  {
    "id": 30,
    "name": "Match Football",
    "category": "Sports & Fitness",
    "subcategory": "Sports Balls",
    "gender": "Neutral",
    "colors": ["White", "Black"],
    "price": { "original": 1799, "discounted": 1399 },
    "images": { "thumbnail": "images/products/Match Football.jpg", "gallery": ["images/football2/1.jpg"] },
    "keywords": ["football"]
  },
  {
    "id": 31,
    "name": "Indoor Basketball",
    "category": "Sports & Fitness",
    "subcategory": "Sports Balls",
    "gender": "Neutral",
    "colors": ["Orange"],
    "price": { "original": 1599, "discounted": 1199 },
    "images": { "thumbnail": "images/products/Indoor Basketball.jpg", "gallery": ["images/basketball2/1.jpg"] },
    "keywords": ["basketball"]
  },
  {
    "id": 32,
    "name": "Men's Winter Jacket",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "gender": "Men",
    "colors": ["Navy"],
    "price": { "original": 4599, "discounted": 3499 },
    "images": { "thumbnail": "images/products/Men Winter Jacket.jpg", "gallery": ["images/jacket-men2/1.jpg"] },
    "keywords": ["jacket", "winter"]
  },
  {
    "id": 33,
    "name": "Women's Long Coat",
    "category": "Fashion",
    "subcategory": "Outerwear",
    "gender": "Women",
    "colors": ["Beige"],
    "price": { "original": 4899, "discounted": 3799 },
    "images": { "thumbnail": "images/products/Women Long Coat.jpg", "gallery": ["images/jacket-women2/1.jpg"] },
    "keywords": ["coat", "winter"]
  },
  {
    "id": 34,
    "name": "Kids Party Wear",
    "category": "Fashion",
    "subcategory": "Kids Clothing",
    "gender": "Kids",
    "colors": ["Red"],
    "price": { "original": 2299, "discounted": 1699 },
    "images": { "thumbnail": "images/products/Kids Party Wear.jpg", "gallery": ["images/kids2/1.jpg"] },
    "keywords": ["kids", "party"]
  },
  {
    "id": 37,
    "name": "Men's Formal Shirt",
    "category": "Fashion",
    "subcategory": "Men Clothing",
    "gender": "Men",
    "colors": ["Light Blue"],
    "price": { "original": 2199, "discounted": 1599 },
    "images": { "thumbnail": "images/products/Men Formal Shirt.jpg", "gallery": ["images/shirt2/1.jpg"] },
    "keywords": ["shirt", "formal"]
  },
  {
    "id": 39,
    "name": "Decorative Wall Clock",
    "category": "Home & Living",
    "subcategory": "Home Decor",
    "gender": "Neutral",
    "colors": ["Gold"],
    "price": { "original": 1799, "discounted": 1299 },
    "images": { "thumbnail": "images/products/Decorative Wall Clock.jpg", "gallery": ["images/clock2/1.jpg"] },
    "keywords": ["clock", "decor"]
  },
  {
    "id": 40,
    "name": "Round Wall Mirror",
    "category": "Home & Living",
    "subcategory": "Home Decor",
    "gender": "Neutral",
    "colors": ["Black"],
    "price": { "original": 3899, "discounted": 2999 },
    "images": { "thumbnail": "images/products/Round Wall Mirror.jpg", "gallery": ["images/mirror2/1.jpg"] },
    "keywords": ["mirror", "decor"]
  },
  {
    "id": 41,
    "name": "Men's Leather Belt",
    "category": "Accessories",
    "subcategory": "Belts",
    "gender": "Men",
    "colors": ["Black"],
    "price": { "original": 1399, "discounted": 999 },
    "images": { "thumbnail": "images/products/Men Leather Belt.jpg", "gallery": ["images/belt2/1.jpg"] },
    "keywords": ["belt", "leather"]
  },
  {
    "id": 42,
    "name": "Slim Wallet",
    "category": "Accessories",
    "subcategory": "Wallets",
    "gender": "Men",
    "colors": ["Brown"],
    "price": { "original": 1599, "discounted": 1199 },
    "images": { "thumbnail": "images/products/Slim Wallet.jpg", "gallery": ["images/wallet2/1.jpg"] },
    "keywords": ["wallet"]
  },
  {
    "id": 43,
    "name": "Office Handbag",
    "category": "Accessories",
    "subcategory": "Bags",
    "gender": "Women",
    "colors": ["Tan"],
    "price": { "original": 3299, "discounted": 2499 },
    "images": { "thumbnail": "images/products/Office Handbag.jpg", "gallery": ["images/bag2/1.jpg"] },
    "keywords": ["bag", "office"]
  },
  {
    "id": 44,
    "name": "Casual Backpack",
    "category": "Accessories",
    "subcategory": "Bags",
    "gender": "Neutral",
    "colors": ["Blue"],
    "price": { "original": 2999, "discounted": 2299 },
    "images": { "thumbnail": "images/products/Casual Backpack.jpg", "gallery": ["images/backpack2/1.jpg"] },
    "keywords": ["bag", "casual"]
  },
  {
    "id": 45,
    "name": "Stud Earrings",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "gender": "Women",
    "colors": ["Silver"],
    "price": { "original": 1099, "discounted": 799 },
    "images": { "thumbnail": "images/products/Stud Earrings.jpg", "gallery": ["images/earrings2/1.jpg"] },
    "keywords": ["earrings"]
  },
  {
    "id": 46,
    "name": "Charm Bracelet",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "gender": "Neutral",
    "colors": ["Gold"],
    "price": { "original": 1199, "discounted": 899 },
    "images": { "thumbnail": "images/products/Charm Bracelet.jpg", "gallery": ["images/bracelet2/1.jpg"] },
    "keywords": ["bracelet"]
  },
  {
    "id": 47,
    "name": "Kids Sneakers",
    "category": "Sports & Fitness",
    "subcategory": "Footwear",
    "gender": "Kids",
    "colors": ["Red"],
    "price": { "original": 2199, "discounted": 1699 },
    "images": { "thumbnail": "images/products/Kids Sneakers.jpg", "gallery": ["images/kids-shoes2/1.jpg"] },
    "keywords": ["kids", "shoes"]
  },
  {
    "id": 48,
    "name": "Cricket Practice Stumps",
    "category": "Sports & Fitness",
    "subcategory": "Cricket Equipment",
    "gender": "Neutral",
    "colors": ["Yellow"],
    "price": { "original": 2299, "discounted": 1799 },
    "images": { "thumbnail": "images/products/Cricket Practice Stumps.jpg", "gallery": ["images/stumps2/1.jpg"] },
    "keywords": ["cricket", "stumps"]
  },
  {
    "id": 49,
    "name": "Men's Casual Shirt",
    "category": "Fashion",
    "subcategory": "Men Clothing",
    "gender": "Men",
    "colors": ["Green"],
    "price": { "original": 2099, "discounted": 1499 },
    "images": { "thumbnail": "images/products/Men Casual Shirt.jpg", "gallery": ["images/shirt3/1.jpg"] },
    "keywords": ["shirt", "casual"]
  },
  {
    "id": 51,
    "name": "Old Spice Swagger 2-in-1 Shampoo & Conditioner, Hair Gel, and Fiber Wax",
    "category": "Fashion",
    "subcategory": "Hair Care",
    "gender": "Men",
    "colors": ["Blue"],
    "price": { "original": 18000.00, "discounted": 13500.00 },
    "images": { "thumbnail": "images/hair-care2/thumb.jpg", "gallery": ["images/hair-care2/1.jpg"] },
    "keywords": ["shampoo", "hair care"]
  },
  {
    "id": 52,
    "name": "Lavanya Chandbali Gold Earring",
    "category": "Accessories",
    "subcategory": "Jewelry+",
    "gender": "Women",
    "colors": ["Blue"],
    "price": { "original": 2000, "discounted": 1990 },
    "images": { "thumbnail": "images/earrings3/thumb.jpg", "gallery": ["images/earrings3/1.jpg"] },
    "keywords": ["earrings", "gold"]
  }
];

const newArrivals = [3, 7, 12, 18, 22, 29, 34, 41];
const trending = [2, 5, 9, 14, 21, 27, 33, 45];
const topRated = [1, 6, 11, 17, 20, 26, 39, 48];