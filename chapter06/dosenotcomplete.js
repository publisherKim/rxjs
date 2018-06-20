const { interval, of, concat } = require('rxjs');

//when source never completes, the subsequent observables never runs
const source = concat(interval(1000), of('This', 'Never', 'Runs'));
//outputs: 0,1,2,3,4....
const subscribe = source.subscribe(val =>
  console.log(
    'Example: Source never completes, second observable never runs:',
    val
  )
);