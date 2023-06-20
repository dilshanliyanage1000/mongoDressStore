// Select the database to use.
use('DressStore');

// Insert a few documents into the sales collection.
db.getCollection('products').insertMany(
    [{
            "name": "T-shirt",
            "description": "Comfortable cotton t-shirt",
            "price": 19.99,
            "published": true,
            "category": "Men",
            "id": "6490e9de76cf031759391fc4"
        },
        {
            "name": "Jeans",
            "description": "Slim-fit denim jeans",
            "price": 49.99,
            "published": true,
            "category": "Men",
            "id": "6490e9e676cf031759391fc6"
        },
        {
            "name": "Dress",
            "description": "Elegant evening dress",
            "price": 79.99,
            "published": true,
            "category": "Women",
            "id": "6490e9ea76cf031759391fc8"
        },
        {
            "name": "Sneakers",
            "description": "Sports shoes for running",
            "price": 89.99,
            "published": true,
            "category": "Men",
            "id": "6490e9ef76cf031759391fca"
        },
        {
            "name": "Handbag",
            "description": "Fashionable leather handbag",
            "price": 129.99,
            "published": true,
            "category": "Women",
            "id": "6490e9f476cf031759391fcc"
        },
        {
            "name": "Tie",
            "description": "Silk tie for formal occasions",
            "price": 29.99,
            "published": true,
            "category": "Men",
            "id": "6490e9f876cf031759391fce"
        },
        {
            "name": "Skirt",
            "description": "Floral print midi skirt",
            "price": 59.99,
            "published": true,
            "category": "Women",
            "id": "6490e9fc76cf031759391fd0"
        },
        {
            "name": "Shorts",
            "description": "Casual denim shorts",
            "price": 34.99,
            "published": true,
            "category": "Men",
            "id": "6490ea0076cf031759391fd2"
        },
        {
            "name": "Blouse",
            "description": "Chiffon blouse with ruffles",
            "price": 39.99,
            "published": true,
            "category": "Women",
            "id": "6490ea0476cf031759391fd4"
        },
        {
            "name": "Sweater",
            "description": "Knitted sweater for colder days",
            "price": 69.99,
            "published": true,
            "category": "Men",
            "id": "6490ea0976cf031759391fd6"
        },
        {
            "name": "High heels",
            "description": "Stylish high heels for special occasions",
            "price": 99.99,
            "published": true,
            "category": "Women",
            "id": "6490ea0c76cf031759391fd8"
        },
        {
            "name": "Hoodie",
            "description": "Comfortable hoodie with front pocket",
            "price": 49.99,
            "published": true,
            "category": "Men",
            "id": "6490ea1076cf031759391fda"
        },
        {
            "name": "Swimsuit",
            "description": "Two-piece swimsuit",
            "price": 29.99,
            "published": true,
            "category": "Women",
            "id": "6490ea1576cf031759391fdc"
        },
        {
            "name": "Socks",
            "description": "Cotton ankle socks",
            "price": 9.99,
            "published": true,
            "category": "Men",
            "id": "6490ea2076cf031759391fde"
        },
        {
            "name": "Purse",
            "description": "Small leather purse with zipper",
            "price": 24.99,
            "published": true,
            "category": "Women",
            "id": "6490ea2476cf031759391fe0"
        },
        {
            "name": "Polo shirt",
            "description": "Classic polo shirt with collar",
            "price": 39.99,
            "published": true,
            "category": "Men",
            "id": "6490ea2776cf031759391fe2"
        },
        {
            "name": "Maxi dress",
            "description": "Flowy maxi dress for summer",
            "price": 69.99,
            "published": true,
            "category": "Women",
            "id": "6490ea2b76cf031759391fe4"
        },
        {
            "name": "Jacket",
            "description": "Stylish leather jacket",
            "price": 149.99,
            "published": true,
            "category": "Men",
            "id": "6490ea2e76cf031759391fe6"
        },
        {
            "name": "Blazer",
            "description": "Tailored blazer for a sophisticated look",
            "price": 89.99,
            "published": true,
            "category": "Women",
            "id": "6490ea3276cf031759391fe8"
        },
        {
            "name": "Sweatpants",
            "description": "Comfortable sweatpants for lounging",
            "price": 29.99,
            "published": true,
            "category": "Men",
            "id": "6490ea3676cf031759391fea"
        },
        {
            "name": "Graphic T-shirt",
            "description": "Cool graphic print t-shirt for teens",
            "price": 14.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea7876cf031759391fec"
        },
        {
            "name": "Denim Jacket",
            "description": "Stylish denim jacket for trendy teens",
            "price": 39.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea7b76cf031759391fee"
        },
        {
            "name": "Backpack",
            "description": "Spacious backpack for school and outings",
            "price": 29.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea7e76cf031759391ff0"
        },
        {
            "name": "Sneakers",
            "description": "Sporty sneakers for active teens",
            "price": 49.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea8176cf031759391ff2"
        },
        {
            "name": "Skateboard",
            "description": "Durable skateboard for skate enthusiasts",
            "price": 59.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea8576cf031759391ff4"
        },
        {
            "name": "Hoodie",
            "description": "Comfortable hoodie with a trendy design",
            "price": 24.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea8d76cf031759391ff6"
        },
        {
            "name": "Printed Leggings",
            "description": "Colorful printed leggings for fashion-forward teens",
            "price": 19.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea9476cf031759391ff8"
        },
        {
            "name": "Wireless Earbuds",
            "description": "Wireless earbuds for music on the go",
            "price": 79.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea9876cf031759391ffa"
        },
        {
            "name": "Denim Shorts",
            "description": "Stylish denim shorts for summer",
            "price": 34.99,
            "published": true,
            "category": "Teens",
            "id": "6490ea9b76cf031759391ffc"
        },
        {
            "name": "Gaming Console",
            "description": "Popular gaming console for gaming enthusiasts",
            "price": 299.99,
            "published": true,
            "category": "Teens",
            "id": "6490f0fe76cf031759392018"
        }
    ]
);