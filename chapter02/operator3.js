const createObservable = (sub) => {
    return {
        subscribe: sub
    }
};

const observer = {
    next: data => console.log(data),
    error: err => console.log(err),
    complete: () => console.log(`finished!`)
};

const arrayObservable = (ob) => [10, 20, 30].forEach(ob.next)
console.log(arrayObservable);

// observable
//     .map(x => x / 10)
//     .filter(x => x % 2 === 0)
//     .subscribe(observer)