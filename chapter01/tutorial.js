const button = document.querySelector('button');

function logClick(x){
    // console.log(`clicked ${x.x}`);
    const arr = [10, , 20, 30, 40, 50, 60];
    console.log('before');
    arr.forEach((x) => console.log(x));
    console.log('after');
}

button.addEventListener('click', logClick);

