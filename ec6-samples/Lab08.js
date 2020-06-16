let names = {
    cities: ["Blr","Del","Mum","Pune"],
    print : function (delay=5000) {
        console.log(this.cities.join(","))
        setTimeout(()=>{
            console.log(this.cities.join(","))
            console.log("same timer")
        })
    }
}
names.print()

//Global Object Reference
let names1 = {
    cities: ["Blr","Del","Mum","Pune"],
    print : function (delay=1000) {
        console.log(this.cities.join(","))
        setTimeout(function() {
            console.log(this)
        },delay)
    }
}
names1.print()