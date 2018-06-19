/*
    combineLastest
    interval
    http: //reactivex.io/documentation/ko/operators/combinelatest.html
    특정시점의 value를 조합하기
    sec                 1       2       3       4       5       6       7       8       9       10
    timeValOne          0       0       0       0       1       1       1       1       2       2                     
    timeValTwo          null    0       0       0       0       1       1       1       1       2
    timeValThree        null    null    0       0       0       0       1       1       1       2
    출력                x       x       o       x       o       o       o       x       o       o       ...
    button.html
    개별버튼의 클릭수 합산
*/