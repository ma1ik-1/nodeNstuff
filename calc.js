function addition(a, b){
    const add = a + b;
    console.log(a + b);
}

const add = new addition(2,4);

function multiplication(a, b){
    const mul = a * b;
    console.log(mul)
}

const mul = new multiplication(2,4);

function division(a, b){
    const div = a / b;
    console.log(div)
}

const div = new division(4,2);

function subtraction(a, b){
    const sub = a - b;
    console.log(sub)
}

const sub = new subtraction(4,2);


module.exports = {
    add,
    mul,
    div,
    sub
}