// 주의 method 체인을 정의할때 arrow function으로 정의하면 this scope에 유의하자.
const map = function (transformFn) {
    const inputObservable = this;
    const outputObservable = createObservable((outputObserver) => {
        console.log(inputObservable);
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

const createObservable = (sub) => {
    return {
        subscribe: sub,
        map: map
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
        .subscribe(observer)
);