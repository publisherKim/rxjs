function nextCallback(data) {
    // do stuff
    console.log(data);
}

function errorCallback(err) {
    // do stuff
    console.log(err);
}

function completeCallback() {
    // do stuff
    console.log(`finished!`);
}

function giveMeSomeData(next, error, complete) {
    // do stuff
    [10, 20, 30].forEach(next);
}

giveMeSomeData(
    nextCallback,
    errorCallback,
    completeCallback
);