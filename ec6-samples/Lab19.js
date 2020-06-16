function normalFunction() {
    console.log("I");
    console.log("can not");
    console.log("be");
    console.log("stopped");
}

normalFunction();

function * generatorFunction() {
    console.log('This will be executed first.');

    yield 'JS - Powerful ';

    console.log('printed after the pause');

    yield 'Language.';
}


const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
// try to comment below and see
console.log(generatorObject.next().value);