let arr = [1, 2, 3];

let obj ={
    name: 'Sweety',
    age:124,
}

function sum () {
    // console.log({arguments});

    Object.values(arguments).map(val=>
        console.log(val));
    return 5;
}
console.log(sum(2, 3));