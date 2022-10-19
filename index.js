const balance = str => {
    let array = str.split('')
    let filter1 = array.filter(element => element === '(')
    let filter2 = array.filter(element => element === ')')
    let right = array.indexOf('(')
    let left = array.indexOf(')')
    if(filter1.length === filter2.length && right < left) {
        return true
     }
    return false
}

console.log(balance("(This has (too many closes.) ) )"))
console.log(balance("("))
console.log(balance("(Oh Noes!)("))
console.log(balance("()"))
console.log(balance("(There's a bonus) )open paren here."))