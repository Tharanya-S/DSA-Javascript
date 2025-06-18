function printName(name) {
    console.log("Hello "+ name)
}
let n = "Harry Potter"
printName("Thara")
printName("Anaya")
printName(n)

function sum(a,b) {
    let add = a + b
    console.log(add)
}

sum(3, 7);

function multiply(a, b) {
    let mul = a * b;
    console.log(mul) 
}

multiply(10, 2)

function square(x) {
    return x*x
}
let z = square(9)
console.log(square(2))
console.log(z)

//create a function to accept age and tell wheather a person is eligable to vote or not 

function eligibleToVote(age) {
    if (age < 1) {
        console.log("Age not valid")
    }
    else if (age < 18) {
        console.log("Not Eligible")
    } else {
        console.log("Eligible")
    }
}

eligibleToVote(18)
eligibleToVote(8)
eligibleToVote(-1)

//Create a function to check if the number is odd or even
function isEven(num) {
    if (num % 2 === 0) {
        console.log("Num is Even")
    } else {
        console.log("Num is Odd")
    }
}

isEven(2)
isEven(1)