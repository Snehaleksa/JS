const data =[
    {
        id:1,name:"Laptop",price:800,category:"Electronics",status:"delivered"
    },
    {
        id:2,name:"Book",price:20,category:"Stationery",status:"pending"
    },
    {
        id:3,name:"Phone",price:600,category:"Electronics",status:"delivered"
    },
    {
        id:4,name:"Pen",price:2,category:"Stationary",status:"pending"
    },
    {
        id:5,name:"Tablet",price:300,category:"Electronics",status:"delivered"
    },
]

 console.log(data.filter(item => item.category == "Electronics"));
// console.log(data.filter(item => item.category == "Electronics").map(item =>item.name.toUpperCase()));
console.log(data.filter(item => item.category == "Electronics").reduce((sum, item) => sum + item.price, 0));
// console.log(data.filter(item => item.price > 500 ).map(item => item.name));
//  console.log(data.sort((a,b)=>b.price-a.price));
// console.log(data.filter(item => item.status =="pending").map(item =>item.name));






