const { concatAll, take } = require('rxjs/operators');
const { of, interval } = require('rxjs');

const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(3));
const obs3 = interval(1000).pipe(take(1));

const source = of(obs1, obs2, obs3);
// 3개의 관측값을 내보낸다. emit three observables

const example = source.pipe(concatAll());
// 이전에 완료되는 순서로 각 내부의 관찰을 구독한다. subscribe to each inner observable in order when previous completes

// const subscribe = example.subscribe(val => console.log(val));
/*
  output: 0,1,2,3,4,0,1,0
  How it works...
  Subscribes to each inner observable and emit values, when complete subscribe to next
  각각의 내부의 관찰가능을 구독하고 구독이 완료 되었을때 값을 내보낸다.
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/

const subscribe2 = source.subscribe(val => console.log(val));
