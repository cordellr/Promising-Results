/* Executes using .then method
slowMath.add(6,2)
.then((num) => {
    console.log(num); //8 result of add
    return slowMath.multiply(num, 2);
}).then((num) => {
    console.log(num); //16 result of multiply
    return slowMath.divide(num, 4);
}).then((num) => {
    console.log(num); //4 result of divide
    return slowMath.subtract(num, 3);
}).then((num) => {
    console.log(num); //1 result of subtract
    return slowMath.add(num, 98);
}).then((num) => {
    console.log(num); //99 result of add
    return slowMath.remainder(num, 2);
}).then((num) => {
    console.log(num); //1 result of remainder
    return slowMath.multiply(num, 50);
}).then((num) => {
    console.log(num); //50 result of multiply
    return slowMath.remainder(num, 40);
}).then((num) => {
    console.log(num); //10 result of remainder
    return slowMath.add(num, 32);
}).then((num) => {
    console.log(`The final result is ${num}.`); //42 result of add
}).catch((err) => {
    console.log(err);
});
*/


//executes using async await
let doMath = async () => {
    try {
        let num = await slowMath.add(6, 2);
        console.log(num); //8
        num = await slowMath.multiply(num, 2);
        console.log(num); //16
        num = await slowMath.divide(num, 4);
        console.log(num); //4
        num = await slowMath.subtract(num, 3);
        console.log(num); //1
        num = await slowMath.add(num, 98);
        console.log(num); //99
        num = await slowMath.remainder(num, 2);
        console.log(num); //1
        num = await slowMath.multiply(num, 50);
        console.log(num); //50
        num = await slowMath.remainder(num, 40);
        console.log(num); //10
        num = await slowMath.add(num, 32);
        console.log(`The final result is ${num}.`); //42
    } catch (error) {
        console.log(error)
    }
}

doMath();