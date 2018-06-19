const { of } = require('rxjs');
const { take } = require('rxjs/operators');

//emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
//take the first emitted value then complete
const example = source.pipe(take(3));
//output: 1
const subscribe = example.subscribe(val => console.log(val));
