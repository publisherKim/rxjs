const readable = getReadableStreamSomehow();

function nextDataCallback(chunk) {
    console.log(`Received ${chunk.length} byes of code`);
}

function errorDataCallback(err) {
    console.log(`Bad stuff happend: ${err}`);
}

function doneDataCallback() {
    console.log(`There will be no more data`);
}

readable.on('data', nextDataCallback);
readable.on('err', errorDataCallback);
readable.on('end', doneDataCallback);