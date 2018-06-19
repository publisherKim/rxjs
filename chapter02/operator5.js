const map = function (transformFn) {
    const inputObservable = this;
    const outputObservable = createObservable((outputObserver) => {
        inputObservable.subscribe({
            next: x => {
                const y = transformFn(x); // 20 --> 2
                outputObserver.next(y); // 2
            },
            error: err => outputObserver.error(err),
            complete: () => outputObserver.complete(`finished!`)
        });
    });
    return outputObservable;
}

const filter = function (condiFn) {
    const inputObservable = this;
    const outputObservable = createObservable((outputObserver) => {
        inputObservable.subscribe({
            next: x => {
                if(condiFn(x)) {
                    outputObserver.next(x);
                }
            },
            error: err => outputObserver.error(err),
            complete: () => outputObserver.complete(`finished!`)
        });
    });
    return outputObservable;
}

const createObservable = (sub) => {
    return {
        subscribe: sub,
        map: map,
        filter: filter
    }
};

const observer = {
    next: data => console.log(data),
    error: err => console.log(err),
    complete: () => console.log(`finished!`)    
};

const arrayObservable = createObservable(ob => [10, 20, 30].forEach(ob.next));
console.log(
    arrayObservable
        .map(x => x * 10)
        .filter(x => x % 3 === 0)
        .subscribe(observer)
);