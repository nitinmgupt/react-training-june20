let sandwich =  {
    bread: "honey_oat",
    veg: "carrot_vada",
    cheese: "amul",
    toppings: ["lettuce", "tomato", "mustard"]
};

let {bread, veg} = sandwich ;
console.log(bread, veg) ;

bread = "garlic"  ;  // overwritten.
veg = "soya" ;

console.log(bread, veg) ;
console.log(sandwich.bread, sandwich.veg);