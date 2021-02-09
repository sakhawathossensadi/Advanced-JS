const students = [
    {id:12,name:"Jhon"},
    {id:13,name:"Shon"},
    {id:14,name:"Rock"},
    {id:15,name:"Robert"},
    {id:16,name:"Remo"}
];

// const names =[];
// for(let i=0;i<students.length;i++)
// {
//     const student = students[i];
//     names.push(student.name);
// }
// console.log(names);

const names =  students.map(s => s.name);
console.log(names);

const ids = students.filter(s => s.id>14);
console.log(ids);