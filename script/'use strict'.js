'use strict'
let user = {
// name:'John',
surname:'Smith',
}
user.name = 'Pete';
console.log(user);

let salaries = {

    John: 100,
    
    Ann: 160,
    
    Pete: 130
     
    }

    let sum=(Object.values(salaries).reduce((a, b) => a + b, 0));
    console.log(sum)