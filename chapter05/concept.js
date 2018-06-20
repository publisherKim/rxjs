/*
    Reactive Programing은 기본적으로 모든 것을 스트림(stream)으로 본다. 이벤트, ajax call, 등 모든 데이터의 흐름을 시간순서에 의해 전달되어지는 스트림으로 처리한다. 
    즉, 스트림이란, 시간순서에 의해 전달되어진 값들의 collection 정도로 이해해 보자.
    각각의 스트림은 새로 만들어(branch)져서 새로운 스트림이 될 수도 있고, 여러개의 스트림이 합쳐(merge) 질수 도 있다.
    스트림은 map, filter과 같은 함수형 메소드를 이용하여, immutable하게 처리할 수 있다.
    스트림을 listening 함으로써 데이터의 결과값을 얻는다. 이를 subscribe라고 표현한다.
*/