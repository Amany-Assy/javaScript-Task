const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createCounter(init) {
    let counter = init;

    return {
        increment: () => ++counter,
        decrement: () => --counter,
        reset: () => {
            counter = init;
            return counter;
        }
    };
}

rl.question("Enter init: ", (init) => {
    rl.question("Enter calls separated by commas: ", (calls) => {

        const counter = createCounter(Number(init));

        const result = calls.split(",").map(call => {
            return counter[call.trim()]();
        });

        console.log(result);

        rl.close();
    });
});