let  names = {
    cities: ["Blr","Del","Mum","Pune"],
    print: function(delay=1000) {

        setTimeout(function() {
            console.log(this.cities.join(","))
        }, delay)

    }
}

names.print()