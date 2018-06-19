const res = fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

function successCallback(v) {
    console.log(`we got back ${v}`);
}

function failureCallback(err) {
    console.log(`:( ${err}`);
}

res.then(successCallback, failureCallback);