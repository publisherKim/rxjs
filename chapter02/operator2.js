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

const arrayObservable = createObservable(ob => [10, 20, 30].forEach(ob.next));
console.log(arrayObservable.subscribe);
const clickObservable = createObservable(ob => document.addEventListener('click', ob.next));
observable
    .map(x => x / 10)
    .filter(x => x % 2 === 0)
    .subscribe(observer)
