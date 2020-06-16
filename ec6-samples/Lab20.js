const {called} = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};
called();
called();
called();

//called is a varaibale that is pointing to called attriute that is pointer to a anonymous function inside the anonymous class.
// and since this is const it is not going to changed once initialized.
//because its attribute, we can do object destructing and pulled it out.
// we need to supply the same attribute to be extracted out from the class.

var {called2} = new class {
    count2 = 0;
    called2 = () => {
        this.count2++;
        console.log(`Called2 : ${this.count2}`);
    }
};
called2();
called2();
called2();

//traditional way
var called3 = new class {
    count2 = 0;
    called = () => {
        this.count2++;
        console.log(`Called3 : ${this.count2}`);
    }
};
called3.called();
called3.called();
called3.called();