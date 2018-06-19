const observer = {
    next: data => console.log(data),
    error: err => console.log(err),
    complete: () => console.log(`finished!`)
};

const observable = {
    subscribe(ob) {
        [10, 20, 30].forEach(ob.next)
    }
};

observable.subscribe(observer);
