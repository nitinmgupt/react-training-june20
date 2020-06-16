function outer() {
    function inner() {
        console.log("JS");
    }
    inner();
}

outer();


let outerrr= ()=>()=> console.log("Js Arrow");
console.log( outerrr);
outerrr();

(() => (() => console.log("JS Script"))())()