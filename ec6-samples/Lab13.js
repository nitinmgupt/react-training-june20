let name = "Nilgiris"
let elevation = 9770
let print = function() {
    console.log(`Mt.:  ${this.name} is ${this.elevation} feet tall`)
}

let mtn = { name, elevation, print }
console.log(mtn) ;
mtn.print()