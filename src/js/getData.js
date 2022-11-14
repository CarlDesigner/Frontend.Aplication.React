let categories = [
    {
        id: 1,
        name: "smartphones",
        description: "descrip",
    },
    {
        id: 2,
        name: "laptops",
        description: "descrip",
    },
    {
        id: 3,
        name: "fragrances",
        description: "descrip",
    },
    {
        id: 4,
        name: "skincare",
        description: "descrip",
    },
    {
        id: 5,
        name: "groceries",
        description: "descrip",
    },
    {
        id: 6,
        name: "home-decoration",
        description: "descrip",
    },
    {
        id: 7,
        name: "furniture",
        description: "descrip",
    },
    {
        id: 8,
        name: "tops",
        description: "descrip",
    },
    {
        id: 9,
        name: "womens-dresses",
        description: "descrip",
    },
    {
        id: 10,
        name: "womens-shoes",
        description: "descrip",
    },
    {
        id: 11,
        name: "mens-shirts",
        description: "descrip",
    },
    {
        id: 12,
        name: "mens-shoes",
        description: "descrip",
    },
    {
        id: 13,
        name: "mens-watches",
        description: "descrip",
    },
    {
        id: 14,
        name: "womens-watches",
        description: "descrip",
    },
    {
        id: 15,
        name: "womens-bags",
        description: "descrip",
    },
    {
        id: 16,
        name: "womens-jewellery",
        description: "descrip",
    },
    {
        id: 17,
        name: "sunglasses",
        description: "descrip",
    },
    {
        id: 18,
        name: "automotive",
        description: "descrip",
    },
    {
        id: 19,
        name: "motorcycle",
        description: "descrip",
    },
    {
        id: 20,
        name: "lighting",
        description: "descrip",
    },
];

function getData(url, headers, method, data) {
    return categories;
}

function getCategoryById(id) {
    let result = null;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id.toString() === id.toString()) {
            result = categories[i];
            break;
        }
    }
    return result;
}

export { getData, getCategoryById };
