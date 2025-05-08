// src/data/data.js

const products = [
    {
      id: 1,
      name: "Algerian Hoodie",
      image: "/images/hoodie.jpg", // Place image in public/images/
      price: 3500,
      views: 0,
      sold: 0,
      reviews: [
        { rating: 5, comment: "Very comfortable and warm!" },
        { rating: 4, comment: "Good quality for the price." }
      ]
    },
    {
      id: 2,
      name: "Traditional Shirt",
      image: "/images/shirt.jpg",
      price: 2500,
      views: 0,
      sold: 0,
      reviews: []
    },
    {
      id: 3,
      name: "Casual Jeans",
      image: "/images/jeans.jpg",
      price: 4000,
      views: 0,
      sold: 0,
      reviews: []
    },
    {
      id: 4,
      name: "Sport Sneakers",
      image: "/images/sneakers.jpg",
      price: 5500,
      views: 0,
      sold: 0,
      reviews: [
        { rating: 5, comment: "Super stylish and comfy!" }
      ]
    },
    {
      id: 5,
      name: "Desert Scarf",
      image: "/images/scarf.jpg",
      price: 1500,
      views: 0,
      sold: 0,
      reviews: []
    }
  ];
  
  export default products;
  