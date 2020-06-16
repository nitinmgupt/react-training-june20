let peaks = ["Tallac", "Ralston", "Rose"]
let canyons = ["Ward", "Blackwood"]
let place = [...peaks, ...canyons]

console.log(place.join(', '))
console.log(place)

// nested array
let place2 = [peaks, canyons]
console.log(place2.join(', '))
console.log(place2)
