let products = [
    {pid: 100,pName: 'apple',band: '5g',price: 120000,display: 'led'},
    {pid: 101,pName: 'samsung',band: '5g',price: 45000,display: 'led'},
    {pid: 102,pName: 'blackberry',band: '4g',price: 50000,display: 'led'},
    {pid: 103,pName: 'nokia',band: '3g',price: 1200,display: 'lcd'},
    {pid: 104,pName: 'motorola',band: '4g',price: 10000,display: 'lcd'}
]
  
console.log(products.map(item => item.pName));
console.log(products.filter(item => item.display=='lcd'));
console.log(products.filter(item => item.band=='5g').map(item => item.pName));
console.log(products.filter(item=>item.price<50000 ));


console.log(products.reduce((max,item) => item.price > max.price ? item :max,products[0]));
console.log(products.reduce((max,item) => item.price > max.price ? item :max,products[0]));

