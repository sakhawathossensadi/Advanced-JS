const bonus = 10;

function add(num1,num2)
{
    let result = num1+num2+bonus;
    console.log("Sum : "+result);
    console.log("Bonus : "+bonus);
    return result;
}

//console.log(result);
const sum = add(3,7);
console.log("Result : "+sum);
console.log("Bonus : "+bonus);