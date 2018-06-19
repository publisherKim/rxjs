const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

//emit value every 1s
const delay = interval(1000);
//take the first 5 emitted values
const example = delay.pipe(take(5));
//output: 0,1,2,3,4
const subscribe = example.subscribe(val => console.log(val));