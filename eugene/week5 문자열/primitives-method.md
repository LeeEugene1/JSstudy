# [5.1 원시값의 메서드](https://ko.javascript.info/primitives-methods)

* 원시형의 종류는 string, number, bigint, boolean, symbol, null, undefined형으로 총 7가지이다.
* 자바스크립트는 원시값을 마치 객체처럼 다룰 수 있게 해준다. 객체에서처럼 메서드호출 가능, 명심!! 원시값 != 객체
* 원시값을 객체처럼 사용하기의 필요성:자바스크립트는 날짜, 오류, html dyth등을 다룰수있는 다양한 내장객체를 제공하고 이 객체들은 고유한 프로퍼티와 메서드를 가지지만 시스템자원이 많이 소모된다는 단점이있다. 객체는 원시값보다 무겁고 내부구졸르 유지하기위해 추가 자원을 사용하기 때문이다.

* 레퍼객체(object wrapper):원시값이 메서드나 프로퍼티에 접근할 수 있도록 언어차원에서 허용 특수한 개체. 원시값을 유지하면서 매서드호출, 임시객체가 만들어진다. 이 객체는 곧 삭제된다.
```javascript
// 대문자 메서드
let str = "hello"
alert(str.toUpperCase())//HELLO

//반올림 메서드
let n = 1.23456;
alert(n.toFixed(2))//1.23
```

* 과제, 문자열(str)에 프로퍼티(test)를 추가할 수 있을까?
```javascript
let str = "Hello"
str.test = 5
alert(str.test)
//str의 프로퍼티에 접근하려하면 레퍼객체가 만들어진다.
//비엄격모드에선 레퍼객체에 test가 추가되지만 래퍼객체는 바로삭제되기때문에 undefined
//엄격모드에서는 에러
```
d
