const { delay, concat } = require('rxjs/operators');
const { of } = require('rxjs');

//emits 1,2,3
const sourceOne = of(1, 2, 3);
//emits 4,5,6
const sourceTwo = of(4, 5, 6);
//emit values from sourceOne, when complete, subscribe to sourceTwo
const example = sourceOne.pipe(concat(sourceTwo));
//output: 1,2,3,4,5,6
const subscribe = example.subscribe(val => console.log('Example: Basic concat:', val));

const sourceThree = sourceOne.pipe(delay(3000));
const example1 = sourceThree.pipe(concat(sourceTwo));
example1.subscribe(val => console.log('Example: Delayed source one:', val));
