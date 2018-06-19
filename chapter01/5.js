const observer = {
    next(data) {
        console.log(data);
    },
    error(err) {
        console.log(err);
    },
    complete() {
        console.log(`finished!`);
    }
};

const observable = {
    subscribe(ob) {
        [10, 20, 30].forEach(x => ob.next(x));
    }
};


observable.subscribe(observer);