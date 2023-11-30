

// function getSum(){
//     return new Promise((resolve, reject) => {
//   const num1 = document.querySelector([`data-no1`])
//   const num2 = document.querySelector([`data-no2`])
// }


    let myPromise = new Promise (args)
    function args (resolve, reject) {
        let num1 = +prompt( " Enter first number")
        let num2 = +prompt( " Enter Second number")
    //     if (typeof num1 === 'number' && typeof num2 === 'number')
    //     resolve(`The output is ${num1} + ${num2} = ${num1 + num2}`);
    // else {
    //     if (typeof num1 !== 'number' && typeof num2 !== 'number');
    //     else (typeof num1 !== 'number' || typeof num2 !== 'number')
    // }
    // reject ( `${num1} ${num2} is not a number`)

    switch (true) {
        case numb:
            resolve(`The output is ${num1} + ${num2} = ${num1 + num2}`)
            break;
    
        case Number.isNaN(num1) && Number.isNaN(num2):
            reject(`${num1} or ${num2} is not a number`)    
        break;
    
        default:
            reject(`${num1} or ${num2} is not a number`)
            break;
    }

    }   

    myPromise.then(
        completed => alert(completed),
        reject => alert(reject)
        )