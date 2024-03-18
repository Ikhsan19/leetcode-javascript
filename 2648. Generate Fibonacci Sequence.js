var fibGenerator = function*() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};

const gen = fibGenerator();
const callCount = 5;
for (let i = 0; i < callCount; i++) {
    console.log(gen.next().value);
}