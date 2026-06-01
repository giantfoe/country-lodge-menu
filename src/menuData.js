export const menuItems = [
  // ==================== COFFEE SHOP MENU (6:00 AM - 11:00 AM) ====================
  {
    id: "espresso",
    name: "Espresso",
    price: 80,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Classic single shot of rich espresso.",
    tags: []
  },
  {
    id: "double-espresso",
    name: "Double Espresso",
    price: 120,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Double shot of rich espresso for extra energy.",
    tags: []
  },
  {
    id: "cafe-latte",
    name: "Cafe Latte",
    price: 130,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Espresso with steamed milk and a light layer of foam.",
    tags: []
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 140,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Espresso with equal parts steamed milk and milk foam.",
    tags: []
  },
  {
    id: "espresso-con-panna",
    name: "Espresso Con Panna",
    price: 110,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Espresso shot topped with a dollop of whipped cream.",
    tags: []
  },
  {
    id: "french-press",
    name: "French Press Coffee",
    price: 140,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Rich and full-bodied french press brewed coffee.",
    tags: []
  },
  {
    id: "irish-coffee",
    name: "Irish Coffee",
    price: 220,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Hot coffee with Irish Whiskey, topped with heavy cream.",
    alcohol: true,
    tags: ["alcohol"]
  },
  {
    id: "nutella-latte",
    name: "Nutella Latte",
    price: 140,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Steamed latte blended with creamy Nutella.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "lebanese-coffee",
    name: "Lebanese Coffee",
    price: 120,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Traditional Middle Eastern style cardamon-infused coffee.",
    tags: []
  },
  {
    id: "americano",
    name: "Americano",
    price: 120,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Espresso shots diluted with hot water.",
    tags: []
  },
  {
    id: "cinnamon-latte",
    name: "Cinnamon Latte",
    price: 145,
    category: "Coffee",
    menu: "coffeeshop",
    description: "Espresso latte infused with aromatic sweet cinnamon.",
    tags: []
  },
  {
    id: "affogato",
    name: "Affogato",
    price: 150,
    category: "Coffee",
    menu: "coffeeshop",
    description: "A scoop of premium vanilla ice cream drowned in a hot shot of espresso.",
    tags: []
  },
  {
    id: "tea",
    name: "Tea",
    price: 90,
    category: "Tea",
    menu: "coffeeshop",
    description: "Classic brewed tea of your choice.",
    tags: []
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    price: 110,
    category: "Tea",
    menu: "coffeeshop",
    description: "Spiced black tea brewed with steamed milk.",
    tags: []
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    price: 130,
    category: "Iced Drinks",
    menu: "coffeeshop",
    description: "Chilled brewed coffee served over ice.",
    tags: []
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    price: 130,
    category: "Iced Drinks",
    menu: "coffeeshop",
    description: "Espresso and cold milk served over ice.",
    tags: []
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    price: 90,
    category: "Iced Drinks",
    menu: "coffeeshop",
    description: "Refreshing cold brewed iced tea.",
    tags: []
  },
  {
    id: "flavored-iced-tea",
    name: "Flavored Iced Tea",
    price: 110,
    category: "Iced Drinks",
    menu: "coffeeshop",
    description: "Iced tea infused with fruit syrup options.",
    tags: []
  },
  {
    id: "iced-coffee-con-panna",
    name: "Iced Coffee Con Panna",
    price: 150,
    category: "Iced Drinks",
    menu: "coffeeshop",
    description: "Iced coffee topped with luxurious fresh cream.",
    tags: []
  },

  // ==================== EDEN MENU (ALL DAY) ====================
  // --- SALADS ---
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    price: 350,
    category: "Salads",
    menu: "eden",
    description: "Crisp lettuce, toasted bread, Parmesan cheese, and our homemade Caesar dressing.",
    options: [
      { name: "Add Grilled Chicken", price: 70 },
      { name: "Add Grilled Shrimp", price: 100 }
    ],
    tags: []
  },
  {
    id: "bruschetta-salmon-salad",
    name: "Bruschetta Smoked Salmon Salad",
    price: 450,
    category: "Salads",
    menu: "eden",
    description: "Herb-toasted bread with cream cheese, smoked salmon, radish, sliced onion, capers, and olive oil.",
    tags: []
  },
  {
    id: "spicy-salmon-salad",
    name: "Spicy Salmon Salad",
    price: 450, // corrected missing price in PDF text
    category: "Salads",
    menu: "eden",
    description: "Fresh raw salmon, delicately sliced and served on a bed of salad with wasabi dressing and crispy crumbs.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "crab-salad",
    name: "Crab Salad",
    price: 450,
    category: "Salads",
    menu: "eden",
    description: "A light and refreshing salad with delicate Osaka crab, crisp vegetables, and a subtle wasabi dressing.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "smoked-halloumi-rucola",
    name: "Smoked Halloumi & Rucola Salad",
    price: 420,
    category: "Salads",
    menu: "eden",
    description: "Grilled halloumi with rucola, tomato, basil, garlic, lime juice, olive oil, and caramelized walnuts, served with herb-toasted bread.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "spicy-wasabi-salad",
    name: "Spicy Wasabi Salad",
    price: 450,
    category: "Salads",
    menu: "eden",
    description: "Crisp tempura shrimp served on a bed of fresh salad with wasabi dressing and crunchy crumbs.",
    spicy: true,
    tags: ["spicy"]
  },

  // --- COLD APPETIZERS ---
  {
    id: "truffle-hummus-beef",
    name: "Truffle Hummus with Beef",
    price: 350,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Creamy Lebanese hummus infused with truffle and topped with sautéed garlic beef.",
    tags: []
  },
  {
    id: "guacamole-shrimp",
    name: "Guacamole Shrimp",
    price: 375,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Fresh avocado guacamole with glazed shrimp, coriander, garlic, lime, olive oil, and our special sauce.",
    tags: []
  },
  {
    id: "tuna-cassava-tacos",
    name: "Tuna Cassava Tacos",
    price: 250,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Crisp cassava tacos filled with fresh, flavorful tuna and vibrant taco garnishes.",
    tags: []
  },
  {
    id: "salmon-cassava-tacos",
    name: "Salmon Cassava Tacos",
    price: 375,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Crisp cassava tacos filled with premium raw salmon and bright Japanese-Latin inspired flavors.",
    tags: []
  },
  {
    id: "seabass-carpaccio",
    name: "Seabass Carpaccio",
    price: 500,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Thinly sliced fresh seabass served raw with extra virgin olive oil, fresh lemon, and a hint of truffle oil.",
    tags: []
  },
  {
    id: "marinated-salmon",
    name: "Marinated Salmon",
    price: 550,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Fresh salmon fillet, delicately marinated with aromatic herbs, citrus, and sesame seasoning.",
    tags: []
  },
  {
    id: "trio-tartare",
    name: "Trio Tartare",
    price: 600,
    category: "Cold Appetizers",
    menu: "eden",
    description: "A refined trio of finely diced salmon, tuna, and white fish, lightly seasoned with citrus, herbs, and delicate spices.",
    tags: []
  },
  {
    id: "salmon-tartare",
    name: "Salmon Tartare",
    price: 600,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Finely diced fresh salmon, delicately seasoned with citrus, herbs, and subtle spices.",
    tags: []
  },
  {
    id: "tuna-tartare",
    name: "Tuna Tartare",
    price: 600,
    category: "Cold Appetizers",
    menu: "eden",
    description: "Hand-cut tuna tossed in a spicy mayo and soy blend, served with avocado, crispy tempura flakes, chili oil, and sesame seeds.",
    spicy: true,
    tags: ["spicy"]
  },

  // --- HOT APPETIZERS ---
  {
    id: "truffle-beef-rangoon",
    name: "Truffle Beef Rangoon",
    price: 550,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Crispy dumplings filled with tender beef and truffle, finished with a rich miso glaze and special spicy sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "shrimp-dumplings",
    name: "Shrimp Dumplings",
    price: 425,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Pan-fried Japanese dumplings filled with minced shrimp, served with ponzu dipping sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "chicken-gyoza",
    name: "Chicken Gyoza",
    price: 425,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Pan-fried Japanese dumplings filled with minced chicken, served with ponzu dipping sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "crispy-crazy-chicken",
    name: "Crispy Crazy Chicken",
    price: 280,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Crispy fried chicken served with garlic mayo.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "chili-seafood",
    name: "Chili Seafood",
    price: 350,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Locally sourced seafood, flash-fried in a bold chili and five-spice blend, finished with crispy garlic and sweet chili dip.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "bbq-wings",
    name: "BBQ Wings",
    price: 275,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Grilled or fried chicken wings tossed in our homemade buffalo sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "gari-fish-tartar",
    name: "Gari Fish with Tartar Sauce",
    price: 320,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Crispy fried fish balls coated in Salone gari, served with homemade tartar sauce, capers, and pomegranate.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "truffle-potato-wedges",
    name: "Truffle Potato Wedges",
    price: 200,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Golden fried potato wedges tossed with truffle and Parmesan cheese.",
    tags: []
  },
  {
    id: "calamari-chips",
    name: "Calamari Chips",
    price: 450,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Golden-fried calamari strips, lightly seasoned and served with Japanese mayo dipping sauce.",
    tags: []
  },
  {
    id: "kimchi-fries",
    name: "Kimchi Fries",
    price: 220,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Crispy golden fries topped with bold kimchi and finished with a spicy, tangy sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "french-fries",
    name: "French Fries",
    price: 150,
    category: "Hot Appetizers",
    menu: "eden",
    description: "Crispy golden fries, lightly seasoned and served hot.",
    tags: []
  },

  // --- YAKITORI SKEWERS ---
  {
    id: "yakitori-chicken",
    name: "Yakitori Chicken Skewers",
    price: 500,
    category: "Yakitori Skewers",
    menu: "eden",
    description: "Tender chicken skewers glazed with teriyaki and served with roasted peppers and onions.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "yakitori-beef",
    name: "Yakitori Beef Skewers",
    price: 500,
    category: "Yakitori Skewers",
    menu: "eden",
    description: "Tender Beef skewers glazed with teriyaki and served with roasted peppers and onions.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "yakitori-shrimp",
    name: "Yakitori Shrimps Skewers",
    price: 500,
    category: "Yakitori Skewers",
    menu: "eden",
    description: "Tender Shrimps skewers glazed with teriyaki and served with roasted peppers and onions.",
    spicy: true,
    tags: ["spicy"]
  },

  // --- JAPANESE SELECTION ---
  // Special Maki Rolls
  {
    id: "maki-tempura-forest",
    name: "Tempura Forest Maki (8 pcs)",
    price: 560,
    category: "Japanese Selection",
    menu: "eden",
    description: "Shrimp tempura and avocado rolled for a light, crispy finish.",
    tags: []
  },
  {
    id: "maki-rainbow",
    name: "Rainbow Maki Roll (8 pcs)",
    price: 610,
    category: "Japanese Selection",
    menu: "eden",
    description: "Shrimp and avocado, wrapped with a crab and salmon mix.",
    tags: []
  },
  {
    id: "maki-aburi-salmon",
    name: "Aburi Salmon Maki (8 pcs)",
    price: 560,
    category: "Japanese Selection",
    menu: "eden",
    description: "Grilled salmon, shrimp, and avocado in a rich, smoky roll.",
    tags: []
  },
  {
    id: "maki-volcano",
    name: "Volcano Maki Roll (8 pcs)",
    price: 620,
    category: "Japanese Selection",
    menu: "eden",
    description: "Salmon, tuna, and shrimp, finished with spicy sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "maki-crispy-spicy-salmon",
    name: "Crispy Spicy Salmon Maki (8 pcs)",
    price: 620,
    category: "Japanese Selection",
    menu: "eden",
    description: "Spicy salmon mix wrapped with crispy crumbs for extra crunch.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "maki-crab-lover",
    name: "Crab Lover Maki (8 pcs)",
    price: 520,
    category: "Japanese Selection",
    menu: "eden",
    description: "Crab mix in a crispy roll, topped with mango and avocado.",
    tags: []
  },
  {
    id: "maki-philly-salmon",
    name: "Philly Salmon Maki (8 pcs)",
    price: 520,
    category: "Japanese Selection",
    menu: "eden",
    description: "Cream cheese, avocado, and sesame in a smooth, creamy salmon roll.",
    tags: []
  },
  {
    id: "maki-scallop-ravigote",
    name: "Scallop Ravigote Maki (8 pcs)",
    price: 570,
    category: "Japanese Selection",
    menu: "eden",
    description: "Scallop and mango wrapped in a crisp, delicate roll.",
    tags: []
  },
  {
    id: "maki-grilled-salmon",
    name: "Grilled Salmon Maki (8 pcs)",
    price: 620,
    category: "Japanese Selection",
    menu: "eden",
    description: "Teriyaki grilled salmon rolled with mango and avocado.",
    tags: []
  },
  {
    id: "maki-naked-tuna",
    name: "Naked Tuna Maki (8 pcs)",
    price: 620,
    category: "Japanese Selection",
    menu: "eden",
    description: "Tuna and avocado, finished with tobiko.",
    tags: []
  },
  {
    id: "maki-smoked-salmon",
    name: "Smoked Salmon Roll (8 pcs)",
    price: 540,
    category: "Japanese Selection",
    menu: "eden",
    description: "Smoked salmon wrapped around cream cheese, avocado, and lettuce.",
    tags: []
  },
  {
    id: "maki-smoking-lady",
    name: "Smoking Lady Maki (8 pcs)",
    price: 480,
    category: "Japanese Selection",
    menu: "eden",
    description: "Crab mix with fresh mango and strawberry in a creamy, fruity roll.",
    tags: []
  },
  {
    id: "maki-guacamole-seafood",
    name: "Guacamole Seafood Roll (8 pcs)",
    price: 560,
    category: "Japanese Selection",
    menu: "eden",
    description: "A rich mix of salmon, tuna, and crab, topped with creamy guacamole.",
    tags: []
  },
  {
    id: "maki-naruto-shrimp",
    name: "Naruto Shrimp Maki (8 pcs)",
    price: 530,
    category: "Japanese Selection",
    menu: "eden",
    description: "Crispy shrimp tempura rolled with avocado and mango for a perfect balance of crunch and freshness.",
    tags: []
  },

  // Club Sandwiches
  {
    id: "club-smoked-salmon",
    name: "Club Smoked Salmon (Japanese)",
    price: 570,
    category: "Japanese Selection",
    menu: "eden",
    description: "Premium smoked salmon with creamy cheese and a touch of sesame.",
    tags: []
  },
  {
    id: "club-seafood-roll",
    name: "Club Seafood Roll (Japanese)",
    price: 570,
    category: "Japanese Selection",
    menu: "eden",
    description: "A fresh mix of tuna, salmon, and crab, finished with creamy guacamole.",
    tags: []
  },
  {
    id: "club-tobiko-crazy",
    name: "Club Tobiko Crazy (Japanese)",
    price: 570,
    category: "Japanese Selection",
    menu: "eden",
    description: "Creamy crab mix and avocado, topped with vibrant tobiko for added texture and flavor.",
    tags: []
  },

  // Japanese Burrito
  {
    id: "burrito-seafood",
    name: "Seafood Burrito",
    price: 600,
    category: "Japanese Selection",
    menu: "eden",
    description: "A Japanese-style burrito filled with tuna, salmon, crab, sushi rice, seaweed, crisp vegetables, avocado, and flavorful sauce.",
    tags: []
  },
  {
    id: "burrito-chicken",
    name: "Chicken Burrito",
    price: 550,
    category: "Japanese Selection",
    menu: "eden",
    description: "Tender chicken, fresh vegetables, sushi rice, and signature sauce, wrapped in a Japanese-style burrito.",
    tags: []
  },
  {
    id: "burrito-crab",
    name: "Crab Burrito",
    price: 550,
    category: "Japanese Selection",
    menu: "eden",
    description: "A creamy crab mix with avocado and crisp vegetables, wrapped in sushi rice and seaweed.",
    tags: []
  },

  // Sashimi Platters on Ice
  {
    id: "sashimi-platter-3",
    name: "3 Kinds of Sashimi Platter",
    price: 720,
    category: "Japanese Selection",
    menu: "eden",
    description: "A chilled selection of three fresh sashimi varieties (Salmon, Tuna, Crab), beautifully served on ice.",
    tags: []
  },
  {
    id: "sashimi-platter-6",
    name: "6 Kinds of Sashimi Platter",
    price: 1200,
    category: "Japanese Selection",
    menu: "eden",
    description: "A premium sashimi platter featuring six fresh selections (Eel, Octopus, Salmon, Tuna, Crab, White Fish), elegantly served on ice.",
    tags: []
  },

  // Sashimi & Nigiri
  {
    id: "sashimi-tuna",
    name: "Tuna Sashimi",
    price: 300,
    category: "Japanese Selection",
    menu: "eden",
    description: "Fresh slices of premium tuna.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "sashimi-salmon",
    name: "Salmon Sashimi",
    price: 250,
    category: "Japanese Selection",
    menu: "eden",
    description: "Delicate slices of fresh salmon.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "sashimi-hamachi",
    name: "Hamachi Sashimi",
    price: 200,
    category: "Japanese Selection",
    menu: "eden",
    description: "Clean, buttery slices of fresh Hamachi.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "sashimi-crab",
    name: "Crab Sashimi",
    price: 180,
    category: "Japanese Selection",
    menu: "eden",
    description: "Fresh crab prepared in sashimi style.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "otero-salmon",
    name: "Otero Salmon",
    price: 210,
    category: "Japanese Selection",
    menu: "eden",
    description: "Rich, delicate salmon cut with a buttery finish.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "otero-hamachi",
    name: "Otero Hamachi",
    price: 180,
    category: "Japanese Selection",
    menu: "eden",
    description: "A tender and flavorful Hamachi selection.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "otero-tuna",
    name: "Otero Tuna",
    price: 230,
    category: "Japanese Selection",
    menu: "eden",
    description: "A rich tuna cut with deep flavor and smooth texture.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "nigiri-salmon",
    name: "Salmon Nigiri",
    price: 190,
    category: "Japanese Selection",
    menu: "eden",
    description: "Fresh salmon over seasoned sushi rice.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "nigiri-hamachi",
    name: "Hamachi Nigiri",
    price: 170,
    category: "Japanese Selection",
    menu: "eden",
    description: "Delicate Hamachi served over sushi rice.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "nigiri-tuna",
    name: "Tuna Nigiri",
    price: 200,
    category: "Japanese Selection",
    menu: "eden",
    description: "Premium tuna placed over seasoned sushi rice.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "nigiri-shrimp",
    name: "Shrimp Nigiri",
    price: 180,
    category: "Japanese Selection",
    menu: "eden",
    description: "Tender shrimp served over sushi rice.",
    nuts: true,
    tags: ["nuts"]
  },

  // Temaki Hand Rolls
  {
    id: "temaki-spicy-salmon",
    name: "Temaki Spicy Salmon",
    price: 300,
    category: "Japanese Selection",
    menu: "eden",
    description: "Fresh salmon and seasoned sushi rice in a hand-rolled cone with a spicy finish.",
    spicy: true,
    nuts: true,
    tags: ["spicy", "nuts"]
  },
  {
    id: "temaki-spicy-shrimp",
    name: "Temaki Spicy Shrimp",
    price: 250,
    category: "Japanese Selection",
    menu: "eden",
    description: "Hand-rolled sushi cone filled with shrimp, sushi rice, and spicy sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "temaki-trio",
    name: "Trio Temaki",
    price: 300,
    category: "Japanese Selection",
    menu: "eden",
    description: "A hand-rolled trio filled with crab, tuna, and salmon for a fresh mixed seafood bite.",
    tags: []
  },

  // Poke Bowls
  {
    id: "poke-salmon",
    name: "Salmon Poke Bowl",
    price: 490, // reasonable default since NLE was blank in PDF
    category: "Japanese Selection",
    menu: "eden",
    description: "Fresh salmon served over rice with vibrant vegetables and poke-style garnishes.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "poke-tuna",
    name: "Tuna Poke Bowl",
    price: 490,
    category: "Japanese Selection",
    menu: "eden",
    description: "Fresh tuna over rice with crisp vegetables and classic poke flavors.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "poke-duo",
    name: "Duo Poke Bowl (Salmon & Tuna)",
    price: 540,
    category: "Japanese Selection",
    menu: "eden",
    description: "A fresh combination of salmon and tuna served over rice with colorful toppings.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "poke-tempura-shrimp",
    name: "Shrimp Tempura Poke Bowl",
    price: 520,
    category: "Japanese Selection",
    menu: "eden",
    description: "Crispy shrimp tempura over rice with fresh vegetables and flavorful poke toppings.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "poke-vegetarian",
    name: "Vegetarian Poke Bowl",
    price: 380,
    category: "Japanese Selection",
    menu: "eden",
    description: "A wholesome bowl of rice topped with fresh vegetables and vibrant poke-style flavors.",
    nuts: true,
    vegetarian: true,
    tags: ["nuts", "vegetarian"]
  },

  // Udon Noodles
  {
    id: "udon-seafood",
    name: "Seafood Udon",
    price: 650,
    category: "Japanese Selection",
    menu: "eden",
    description: "Thick udon noodles in a savory broth, served with a selection of seafood.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "udon-chicken",
    name: "Chicken Udon",
    price: 550,
    category: "Japanese Selection",
    menu: "eden",
    description: "Thick udon noodles in a flavorful dashi broth, topped with tender chicken and fresh vegetables.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "udon-shrimp",
    name: "Shrimp Udon",
    price: 650,
    category: "Japanese Selection",
    menu: "eden",
    description: "Thick udon noodles in a rich savory broth, topped with juicy shrimp, crisp vegetables, and fresh scallions.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "udon-vegetable",
    name: "Vegetable Udon",
    price: 550,
    category: "Japanese Selection",
    menu: "eden",
    description: "Thick udon noodles in a light savory broth with a vibrant mix of seasonal vegetables.",
    nuts: true,
    vegetarian: true,
    tags: ["nuts", "vegetarian"]
  },

  // --- MAIN COURSE ---
  {
    id: "jerk-chicken",
    name: "Jerk Chicken with Coconut Rice",
    price: 850,
    category: "Main Course",
    menu: "eden",
    description: "Spiced grilled jerk chicken served with coconut rice and fried plantain.",
    tags: []
  },
  {
    id: "slow-cooked-lamb",
    name: "Slow-Cooked Lamb",
    price: 950,
    category: "Main Course",
    menu: "eden",
    description: "Tender lamb, slow-braised in an aromatic cardamom curry and finished with crispy onions.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "chicken-katsu",
    name: "Chicken Katsu",
    price: 700,
    category: "Main Course",
    menu: "eden",
    description: "Golden panko-crusted chicken cutlet, fried until crisp and juicy, served with Japanese katsu sauce.",
    nuts: true,
    tags: ["nuts"]
  },
  {
    id: "salmon-truffle",
    name: "Salmon Truffle",
    price: 1550,
    category: "Main Course",
    menu: "eden",
    description: "Grilled salmon served with rich truffle mushroom pasta for an indulgent finish.",
    tags: []
  },
  {
    id: "cajun-chicken",
    name: "Cajun Chicken",
    price: 800,
    category: "Main Course",
    menu: "eden",
    description: "Chicken leg in Cajun spices, served with white rice and creamy Cajun sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "grilled-seabass",
    name: "Grilled Seabass",
    price: 900,
    category: "Main Course",
    menu: "eden",
    description: "Perfectly grilled seabass with crispy skin and tender flesh, finished with lemon-infused olive oil.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "roasted-fish",
    name: "Roasted Fish",
    price: 800,
    category: "Main Course",
    menu: "eden",
    description: "Roasted white fish served with mashed potato, grilled vegetables, and creamy spinach sauce.",
    tags: []
  },
  {
    id: "grilled-tiger-prawns",
    name: "Grilled Tiger Prawns",
    price: 1100,
    category: "Main Course",
    menu: "eden",
    description: "Char-grilled tiger prawns marinated with soy, garlic, and citrus, served with mashed potatoes and vegetables.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "grilled-ankaki-lobster",
    name: "Grilled An-Kaki Lobster",
    price: 1600,
    category: "Main Course",
    menu: "eden",
    description: "Grilled lobster served with a sweet-and-sour kaki vegetable sauce and potato wedges.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "half-roast-chicken",
    name: "Half Roast Chicken",
    price: 750,
    category: "Main Course",
    menu: "eden",
    description: "Tender half chicken, seasoned and roasted to golden perfection, served with flavorful Salone-style fried rice for a hearty meal.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "beef-skewer-salone",
    name: "Beef Skewer, Salone Style",
    price: 700,
    category: "Main Course",
    menu: "eden",
    description: "Charcoal-grilled beef skewers in Salone-style marinade, served with fried rice.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "seafood-garlic-butter",
    name: "Seafood Garlic Butter",
    price: 1200,
    category: "Main Course",
    menu: "eden",
    description: "A rich seafood selection finished in fragrant garlic butter on a bed of Fried rice.",
    tags: []
  },
  {
    id: "grilled-shrimp-skewers",
    name: "Grilled Shrimp Skewers",
    price: 800,
    category: "Main Course",
    menu: "eden",
    description: "Juicy marinated shrimp grilled on skewers and served with salone style fried rice, tossed with fresh vegetables.",
    tags: []
  },

  // --- LIVE STEAK SECTION ---
  {
    id: "tenderloin-steak",
    name: "Tenderloin Steak",
    price: 1400,
    category: "Live Steak Section",
    menu: "eden",
    description: "Grilled beef tenderloin cooked to your preferred doneness, served with roasted vegetables and baby potatoes.",
    spicy: true,
    options: [
      {
        type: "select",
        name: "Choose Your Sauce",
        choices: ["Creamy Mustard Sauce", "Green Peppercorn Sauce", "Mushroom Sauce", "Chimichurri Sauce", "Béarnaise Sauce"],
        required: true
      },
      {
        type: "select",
        name: "Optional Side Changes",
        choices: ["Keep Default (Roasted Veg & Baby Potatoes)", "Side salad and fries", "Herb potato wedges and sweet corn"],
        required: false
      }
    ],
    tags: ["spicy"]
  },
  {
    id: "salone-style-steak",
    name: "Salone Style Steak",
    price: 950,
    category: "Live Steak Section",
    menu: "eden",
    description: "Juicy grilled beef steak seasoned with bold Sierra Leonean spices and served with a rich onion-pepper sauce.",
    spicy: true,
    options: [
      {
        type: "select",
        name: "Choose Your Sauce",
        choices: ["Green Peppercorn Sauce", "Creamy Mustard Sauce", "Mushroom Sauce", "Chimichurri Sauce", "Béarnaise Sauce"],
        required: true
      },
      {
        type: "select",
        name: "Optional Side Changes",
        choices: ["Keep Default", "Side salad and fries", "Herb potato wedges and sweet corn"],
        required: false
      }
    ],
    tags: ["spicy"]
  },
  {
    id: "tbone-steak",
    name: "T-Bone Steak",
    price: 1850,
    category: "Live Steak Section",
    menu: "eden",
    description: "A 500g grilled T-bone steak cooked to your preferred doneness, served with roasted vegetables and baby potatoes.",
    spicy: true,
    options: [
      {
        type: "select",
        name: "Choose Your Sauce",
        choices: ["Green Peppercorn Sauce", "Creamy Mustard Sauce", "Mushroom Sauce", "Chimichurri Sauce", "Béarnaise Sauce"],
        required: true
      }
    ],
    tags: ["spicy"]
  },
  {
    id: "tomahawk-steak",
    name: "Tomahawk Steak (For Two)",
    price: 3000,
    category: "Live Steak Section",
    menu: "eden",
    description: "Imported tomahawk steak for two, served with roasted vegetables and baby potatoes.",
    spicy: true,
    options: [
      {
        type: "select",
        name: "Choose Your Sauce",
        choices: ["Green Peppercorn Sauce", "Creamy Mustard Sauce", "Mushroom Sauce", "Chimichurri Sauce", "Béarnaise Sauce"],
        required: true
      }
    ],
    tags: ["spicy"]
  },
  {
    id: "imported-ribs",
    name: "Imported Ribs",
    price: 1400,
    category: "Live Steak Section",
    menu: "eden",
    description: "Grilled imported ribs served with roasted vegetables and baby potatoes.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "casserole-steak",
    name: "Casserole Steak",
    price: 1200,
    category: "Live Steak Section",
    menu: "eden",
    description: "Slow-cooked tender beef simmered with vegetables in a rich, savory gravy, served with sweet potatoes.",
    tags: []
  },

  // --- BURGERS ---
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    price: 500,
    category: "Our Burgers",
    menu: "eden",
    description: "Crispy fried chicken with hot sauce and cabbage slaw, served with fries.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "classic-beef-burger",
    name: "Classic Beef Burger",
    price: 500,
    category: "Our Burgers",
    menu: "eden",
    description: "Grilled beef burger with special sauce, lettuce, tomato, and onion, served with fries.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "double-cheese-burger",
    name: "Double Cheese Burger",
    price: 550,
    category: "Our Burgers",
    menu: "eden",
    description: "Grilled beef burger with mozzarella, special sauce, lettuce, tomato, and onion, served with fries.",
    tags: []
  },
  {
    id: "egg-burger",
    name: "Egg Burger",
    price: 520,
    category: "Our Burgers",
    menu: "eden",
    description: "Grilled beef burger with fried egg, special sauce, lettuce, tomato, and onion, served with fries.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "truffle-beef-burger",
    name: "Truffle Beef Burger",
    price: 600,
    category: "Our Burgers",
    menu: "eden",
    description: "Grilled beef burger with sautéed mushrooms, truffle mayo, lettuce, and onion, served with truffle potato wedges.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "japanese-beef-burger",
    name: "Japanese Beef Burger",
    price: 600,
    category: "Our Burgers",
    menu: "eden",
    description: "Grilled beef burger with Japanese mayo, Asian mushrooms, lettuce, and cream cheese, served with fries.",
    tags: []
  },

  // --- PASTA ---
  {
    id: "spaghetti-bolognese",
    name: "Spaghetti Bolognese",
    price: 620,
    category: "Pasta",
    menu: "eden",
    description: "Classic Italian spaghetti with rich meat sauce, tomato, garlic, onions, herbs, and Parmesan.",
    tags: []
  },
  {
    id: "fettuccine-alfredo",
    name: "Fettuccine Alfredo",
    price: 650,
    category: "Pasta",
    menu: "eden",
    description: "Tender fettuccine with sautéed chicken breast in a creamy Alfredo sauce, finished with Parmesan.",
    tags: []
  },
  {
    id: "gamberetti-pasta",
    name: "Gamberetti Pasta",
    price: 680,
    category: "Pasta",
    menu: "eden",
    description: "Penne pasta with sautéed shrimp, garlic, onion, and chili, tossed in a rich tomato cream sauce.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "penne-arrabbiata",
    name: "Penne Arrabbiata",
    price: 600,
    category: "Pasta",
    menu: "eden",
    description: "Penne pasta in a spicy pomodoro sauce with garlic, chili flakes, toasted bread, and Parmesan.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "truffle-mushroom-pasta",
    name: "Truffle Wild Mushroom Pasta",
    price: 700,
    category: "Pasta",
    menu: "eden",
    description: "Penne pasta in a creamy truffle sauce with sautéed wild mushrooms.",
    vegetarian: true,
    tags: ["vegetarian"]
  },
  {
    id: "aglio-olio",
    name: "Aglio e Olio Pasta",
    price: 550,
    category: "Pasta",
    menu: "eden",
    description: "Spaghetti tossed with olive oil, garlic, chili, and Parmesan.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },

  // --- PIZZA ---
  {
    id: "pizza-margherita",
    name: "Margherita Pizza",
    price: 400,
    category: "Pizza",
    menu: "eden",
    description: "Freshly baked dough topped with our signature pizza sauce, cheese, olive oil, and oregano.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "pizza-bbq-chicken",
    name: "BBQ Chicken Pizza",
    price: 490,
    category: "Pizza",
    menu: "eden",
    description: "Freshly baked dough topped with pizza sauce, cheese, sautéed chicken, olives, sweet peppers, sweet corn, olive oil, and oregano.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "pizza-shrimp-hawaiian",
    name: "Shrimp Hawaiian Pizza",
    price: 520,
    category: "Pizza",
    menu: "eden",
    description: "Freshly baked dough topped with pizza sauce, sautéed shrimp, pineapple, sweet corn, cheese, olive oil, and oregano.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "pizza-vegetarian",
    name: "Vegetarian Pizza",
    price: 400,
    category: "Pizza",
    menu: "eden",
    description: "Freshly baked dough topped with pizza sauce, cheese, olives, sweet corn, mushrooms, onions, sweet peppers, olive oil, and oregano.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "pizza-beef-corn",
    name: "Beef and Corn Pizza",
    price: 500,
    category: "Pizza",
    menu: "eden",
    description: "Freshly baked dough topped with pizza sauce, cheese, seasoned minced beef, onions, sweet corn, olives, olive oil, and oregano.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "pizza-pepperoni",
    name: "Pepperoni Pizza",
    price: 500,
    category: "Pizza",
    menu: "eden",
    description: "Freshly baked dough topped with pizza sauce, cheese, sliced pepperoni, olive oil, and oregano.",
    spicy: true,
    tags: ["spicy"]
  },

  // --- LEBANESE CORNER ---
  {
    id: "fattoush",
    name: "Fattoush Salad",
    price: 350,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Lettuce, tomato, cucumber, radish, spring onion, mint, and parsley, with lemon, sumac, and crispy Lebanese bread.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "tabbouleh",
    name: "Tabbouleh",
    price: 300,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Fresh parsley, tomato, spring onion, mint, fine bulgur, lemon, olive oil, and salt.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "hummus",
    name: "Hummus",
    price: 220,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Creamy Lebanese hummus blended with tahini, lime, and a touch of salt.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "moutabbal-nuts",
    name: "Moutabbal with Nuts",
    price: 260,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Smoky eggplant blended with tahini, topped with crispy Lebanese bread, pomegranate, sumac, and walnuts.",
    nuts: true,
    vegetarian: true,
    tags: ["nuts", "vegetarian"]
  },
  {
    id: "kibbeh",
    name: "Kibbeh (3 pcs)",
    price: 350,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Traditional Lebanese kibbeh with a crisp exterior and flavorful minced beef filling.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "cheese-roll",
    name: "Cheese Roll (Lebanese)",
    price: 240,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Crispy Lebanese pastry rolls filled with melted cheese.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "wings-provencal",
    name: "Wings Provençal",
    price: 280,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Sautéed chicken wings with garlic, coriander, and fresh lemon juice.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "spicy-potatoes",
    name: "Spicy Fried Potatoes",
    price: 240,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Golden fried potato cubes tossed with garlic, coriander, and chili.",
    spicy: true,
    vegetarian: true,
    tags: ["spicy", "vegetarian"]
  },
  {
    id: "beef-makanek",
    name: "Beef Makanek",
    price: 340,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Pan-fried Lebanese beef sausages with onion and pomegranate molasses.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "beef-soujuk",
    name: "Beef Soujuk",
    price: 360,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Pan-fried spicy beef sujuk with tomato, garlic, onion, and lemon.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "beef-shawarma-platter",
    name: "Beef Shawarma Platter",
    price: 550,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Oriental-marinated beef with tahini sauce, pickles, tomato, parsley, and onion, served on Lebanese bread.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "chicken-shawarma-platter",
    name: "Chicken Shawarma Platter",
    price: 550,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Oriental-marinated chicken with garlic paste, pickles, tomato, and onion, served on Lebanese bread.",
    spicy: true,
    tags: ["spicy"]
  },
  {
    id: "beef-samboussek",
    name: "Beef Samboussek",
    price: 280,
    category: "Lebanese Corner",
    menu: "eden",
    description: "Crispy pastry parcels filled with seasoned minced beef, herbs, and aromatic spices, fried to golden perfection.",
    spicy: true,
    tags: ["spicy"]
  },

  // --- AFRICAN CORNER (Available 11:00 AM - 6:00 PM) ---
  {
    id: "african-dish-day",
    name: "African Dish of the Day",
    price: 400,
    category: "African Corner",
    menu: "eden",
    description: "Traditional local specialty dish. Please ask our service staff for today's special selection.",
    timeLimit: { start: "11:00", end: "18:00" },
    tags: []
  },

  // --- DESSERTS ---
  {
    id: "dessert-board",
    name: "Daily Dessert Selection",
    price: 450,
    category: "Desserts Corner",
    menu: "eden",
    description: "Freshly made daily selections. Ask our lovely staff for today's house recommendation.",
    tags: []
  },
  {
    id: "ice-cream-bowl",
    name: "Ice Cream Bowl (3 scoops)",
    price: 240,
    category: "Desserts Corner",
    menu: "eden",
    options: [
      {
        type: "select",
        name: "Flavors",
        choices: ["Vanilla", "Chocolate", "Strawberry", "Mixed (One of each)"],
        required: true
      }
    ],
    description: "Three generous scoops of premium ice cream of your choice.",
    tags: []
  },

  // --- BEVERAGES ---
  {
    id: "soda-drinks",
    name: "Soda & Soft Drinks",
    price: 65,
    category: "Beverages",
    menu: "eden",
    options: [
      {
        type: "select",
        name: "Choose Drink",
        choices: ["Cola", "Fanta", "Sprite", "Vimto"],
        required: true
      }
    ],
    description: "Refreshing cold canned sodas.",
    tags: []
  },
  {
    id: "diet-cola",
    name: "Diet Cola",
    price: 85,
    category: "Beverages",
    menu: "eden",
    description: "Canned sugar-free diet cola.",
    tags: []
  },
  {
    id: "coke-zero",
    name: "Coke Zero",
    price: 85,
    category: "Beverages",
    menu: "eden",
    description: "Zero sugar Coca-Cola.",
    tags: []
  },
  {
    id: "water-small",
    name: "Small Mineral Water",
    price: 30,
    category: "Beverages",
    menu: "eden",
    description: "Refreshing bottled pure mineral water.",
    tags: []
  },
  {
    id: "water-large-local",
    name: "Large Local Water",
    price: 50,
    category: "Beverages",
    menu: "eden",
    description: "Large bottle of local mineral water.",
    tags: []
  },
  {
    id: "water-large-imported",
    name: "Large Imported Water",
    price: 80,
    category: "Beverages",
    menu: "eden",
    description: "Large bottle of imported premium spring water.",
    tags: []
  },
  {
    id: "water-glass-bottle",
    name: "Large Water (Glass Bottle)",
    price: 140,
    category: "Beverages",
    menu: "eden",
    description: "Large glass bottle of premium spring water.",
    tags: []
  },
  {
    id: "fresh-juice",
    name: "Fresh Fruit Juice",
    price: 90,
    category: "Beverages",
    menu: "eden",
    description: "Freshly squeezed seasonal fruit juice.",
    tags: []
  },
  {
    id: "organic-hibiscus-bissap",
    name: "Organic Hibiscus Juice (Bissap)",
    price: 90,
    category: "Beverages",
    menu: "eden",
    description: "Traditional local sweetened hibiscus flower infusion.",
    tags: []
  },
  {
    id: "fresh-ginger-juice",
    name: "Fresh Ginger Juice",
    price: 90,
    category: "Beverages",
    menu: "eden",
    description: "Zesty, cold-pressed fresh ginger juice.",
    tags: []
  },

  // Milkshakes & Smoothies
  {
    id: "milkshake-vanilla",
    name: "Vanilla Milkshake",
    price: 150,
    category: "Beverages",
    menu: "eden",
    description: "Creamy vanilla milkshake blended with premium ice cream.",
    tags: []
  },
  {
    id: "milkshake-chocolate",
    name: "Chocolate Milkshake",
    price: 150,
    category: "Beverages",
    menu: "eden",
    description: "Rich dark chocolate milkshake.",
    tags: []
  },
  {
    id: "milkshake-strawberry",
    name: "Strawberry Milkshake",
    price: 150,
    category: "Beverages",
    menu: "eden",
    description: "Sweet strawberry ice cream milkshake.",
    tags: []
  },
  {
    id: "milkshake-oreo",
    name: "Oreos Milkshake",
    price: 150,
    category: "Beverages",
    menu: "eden",
    description: "Vanilla milkshake blended with crunchy Oreo cookies.",
    tags: []
  },
  {
    id: "smoothie-fruity",
    name: "Fruity Smoothie",
    price: 150,
    category: "Beverages",
    menu: "eden",
    description: "Creamy blended fresh seasonal fruits smoothie.",
    tags: []
  },
  {
    id: "smoothie-pineapple",
    name: "Pineapple Smoothie",
    price: 150,
    category: "Beverages",
    menu: "eden",
    description: "Tropical fresh pineapple blended smoothie.",
    tags: []
  },

  // Beer
  {
    id: "beer-star",
    name: "Star Beer",
    price: 75,
    category: "Beverages",
    menu: "eden",
    description: "Local classic Sierra Leonean lager.",
    alcohol: true,
    tags: ["alcohol"]
  },
  {
    id: "beer-heineken",
    name: "Heineken",
    price: 100,
    category: "Beverages",
    menu: "eden",
    description: "Imported premium Dutch lager.",
    alcohol: true,
    tags: ["alcohol"]
  },
  {
    id: "beer-guinness",
    name: "Guinness Stout",
    price: 75,
    category: "Beverages",
    menu: "eden",
    description: "Rich and dark stout beer.",
    alcohol: true,
    tags: ["alcohol"]
  },

  // Mocktails
  {
    id: "mocktail-love-potion",
    name: "Love Potion Mocktail",
    price: 160,
    category: "Beverages",
    menu: "eden",
    description: "Orange juice, fresh strawberry, banana, and sweet peach syrup.",
    tags: []
  },
  {
    id: "mocktail-very-berry",
    name: "Very Berry Mocktail",
    price: 160,
    category: "Beverages",
    menu: "eden",
    description: "Mixed fresh berries, orange juice, and peach nectar.",
    tags: []
  },
  {
    id: "mocktail-colada",
    name: "Virgin Colada",
    price: 160,
    category: "Beverages",
    menu: "eden",
    description: "Fresh pineapple juice blended with creamy coconut milk.",
    tags: []
  },
  {
    id: "mocktail-minted-lemonade",
    name: "Minted Lemonade",
    price: 160,
    category: "Beverages",
    menu: "eden",
    description: "Lemonade and mint leaves blended with lots of crushed ice and Sprite.",
    tags: []
  },
  {
    id: "mocktail-chapman",
    name: "Chapman",
    price: 160,
    category: "Beverages",
    menu: "eden",
    description: "Orange juice, Sprite, Angostura bitters, and grenadine syrup.",
    tags: []
  },

  // Red Wines
  {
    id: "wine-chianti",
    name: "Bottega Acino d’Oro Chianti (House Wine)",
    price: 1200,
    category: "Beverages",
    menu: "eden",
    description: "Classic Italian red with notes of red cherry, plum and gentle spice. Medium-bodied and smooth.",
    options: [
      {
        type: "select",
        name: "Size",
        choices: ["Bottle - Nle 1,200", "Glass - Nle 260"],
        required: true
      }
    ],
    alcohol: true,
    tags: ["alcohol"]
  },
  {
    id: "wine-bordeaux",
    name: "Fontbreuil – Bordeaux Supérieur 2023",
    price: 2400,
    category: "Beverages",
    menu: "eden",
    description: "A smooth Bordeaux showing black cherry, cassis and subtle vanilla notes.",
    alcohol: true,
    tags: ["alcohol"]
  },
  {
    id: "wine-chablis",
    name: "Émile Durand – Chablis 2024",
    price: 6000,
    category: "Beverages",
    menu: "eden",
    description: "A refined and mineral-driven white with notes of citrus, white fruits and subtle floral character.",
    alcohol: true,
    tags: ["alcohol"]
  },
  {
    id: "champagne-moet",
    name: "Moët & Chandon Brut Imperial Bottle",
    price: 6000,
    category: "Beverages",
    menu: "eden",
    description: "Prestigious French Champagne with bright fruitiness and an elegant maturity.",
    alcohol: true,
    tags: ["alcohol"]
  }
];
