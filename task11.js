const products = [
    {name:"Laptop",category:"Electronics",price:800},
    {name:"Shirt",category:"clothing",price:25},
    {name:"Smartphone",category:"Electronics",price:600},
    {name:"Jeans",category:"clothing",price:50},

]
console.log(products.filter(item=> item.category =="Electronics"));
console.log(products.reduce((max,item) => item.price > max.price ? item :max,products[0]));


