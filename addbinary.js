//Objective is to add two numbers in binary

let a = "1010", b = "1011"


//O(n) solution using two pointers
//We start at the back of both values and sum them accordingly with a possible carry

let carry = 0
let result = []

if (a == '0') {
    return b
} else if (b == '0') {
    return a
}

let p1 = a.length - 1
let p2 = b.length - 1

while (p1 >= 0 || p2 >= 0) {
    let A = (p1 >= 0) ? a[p1--] : 0
    let B = (p2 >= 0) ? b[p2--] : 0
    
    let sum = parseInt(A) + parseInt(B) + carry
    if (sum == 3) {
        result.unshift(1)
        carry = 1
    } else if (sum == 2) {
        result.unshift(0)
        carry = 1
    } else if (sum == 1) {
        result.unshift(1)
        carry = 0
    } else if (sum == 0) {
        result.unshift(0)
        carry = 0
    }
}

if (carry > 0) {
    result.unshift(1)
}

return result.join('')