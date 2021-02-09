const numbers = [3,4,5,6,7,8];
// const output = [];
// for(let i=0;i<numbers.length;i++)
// {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }

//console.log(output);

// function square(element)
// {
//     return element*element;
// }

// const sqr = x => x*x;

// const result = numbers.map(function(element)
// {
//     //console.log(element,index,array);
//     return element*element;
// })

const result = numbers.map(x=>x*x);

console.log(result);


const values = [2,3,4,5,6];
//filter returns array
const res = values.filter( x => x>4);

console.log(res);
//find return one value
const isThere = values.find(x => x>4);

console.log(isThere);