const employees =[
    {id:1,name:"Alice",age:28,department:"HR",salary:50000},
    {id:2,name:"Bob",age:35,department:"IT",salary:75000},
    {id:3,name:"Charlie",age:40,department:"Finance",salary:90000},
    {id:4,name:"David",age:23,department:"IT",salary:60000},
    {id:5,name:"Eve",age:31,department:"Finance",salary:85000},
    {id:6,name:"Frank",age:26,department:"HR",salary:48000},
]
// console.log(employees.filter(item => item.age>=30));
// console.log(employees.map(item => ({name:item.name,salary:item.salary}) ));
console.log(employees.reduce((sum,item)=>sum+item.salary,0)/employees.length);
// console.log(employees.reduce((max,item) => item.salary > max.salary ? item :max,employees[0]));
// console.log(employees.sort((a,b)=>a.age-b.age));
// console.log(employees.filter(item => item.department == "IT"));


