let flavours = ["choco", "vanilla", "orange", "coffee"]
// ... is operator which dumps everything to the variable rest
let [first, ...rest] = flavours

console.log(first)
console.log(rest.join(", "))

let [,, ...restRec] = flavours

console.log(restRec.join(", "))

let [,,,,] = flavours
let [...restRec2] = flavours

console.log(restRec2.join(", "))
