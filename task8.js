const studentRecords = [
    { name: "Alice", scores: [95, 87, 92] },
    { name: "Bob", scores: [78, 85, 80] }, 
    { name: "Charlie", scores: [88, 90, 91] },
    { name: "David", scores: [60, 58, 65] }
];

console.log(studentRecords.map(item=> item.name.toUpperCase()));
console.log(studentRecords.filter(item=> item.name=="Alice").reduce((sum,item)=> sum+item,0));





