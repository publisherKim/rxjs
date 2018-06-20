/*
    node 8 
    rxjs 6.2.1 
    이상의 경우 pipe문법에 유의하자
    interval(1000).take(2) is not working

    첫번째 이벤트가 지속적으로 발생하는 경우에는 두번째 이벤트는 실행되지 않는다.
    종료 시점을 제어할 필요가 있다.
*/