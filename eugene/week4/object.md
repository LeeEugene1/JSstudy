# [4.1 object](https://ko.javascript.info/object)

## 객체
* 자바스크립트의 자료형은 오직 하나의 데이터(문자열 숫자등)만 담을수 있어 원시형(primitive type)이라 부른다.
하지만 객체형은 다양한 데이터를 담을 수 있다.(key로 구분된 데이터의 집합이나, 복잡한 개체(enity)를 저장할 수 있다.)
* 객체의 장점중 하나는 함수를 프로퍼티로 저장할수 있다는것

```javascript
let user = new Object(); //'객체 생성자' 문법
let user = {} //'객체 리터럴' 문법
```

## 리터럴과 프로퍼티
* 객체 리터럴 안에는 key와 value쌍으로 구성된 property를 여러개넣을수있다. 객체 선언시 주로 이방법을 사용한다.
* 점표기법(dot notation)으로 프로퍼티 값을 읽을 수 있다.

```javascript
let user = {
    name : "John" //첫번째 프로퍼티
    ,age : 30 //두번째 프로퍼티
    ,"likes birds" : true // 복수의 단어는 따옴표로 묶어야한다.
}
//프로퍼티 값얻기
alert(user.name);
alert(user.age);
alert(user["likes birds"]);

//set
user.name = "Yujin";
user["likes birds"] = false;

//프로퍼티 삭제
delete user.age
delete user["likes birds"]

let key = prompt('뭣이궁금한디?',name)
//변수로 접근
alert(user[key]) //점표기법(user.key)은 에러

```

## 계산된 프로퍼티
* 객체를 만들때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 계산된
프로퍼티(computed property)라고 부른다.

## 단축 프로퍼티
* 실무에선 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 종종 있다.
```javascript
function makeUser(name, age){
    return {
        name: name//변수를 사용해 프로퍼티를 만드는 경우는 아주흔함
        ,age // age: age와 같음(프로퍼티 값 단축구문)
        ,birth: 1992 // 일반프로퍼티와 단축프로퍼티를 함께 사용가능
        ,...
    }
}

let user = makeUser("John", 30);
alert(user.name) //John
```

## in 연산자로 프로퍼티 존재 여부 확인하기
* 존재하지 않는 프로퍼티에 접근하려할때 다른 언어와달리 undefined 반환
```javascript
let user = {}
user.noSuchProperty === undefined; //true
```

* 연산자 in을 사용하면 프로퍼티 존재 여부를 확인할 수 있다.
```javascript
// "key" in object

let user = {name:"John", age:30};
alert("age" in user)//true
alert('blabla' in user)//false
```

## for...in 반복문
```javascript
// for(key in object){
    // 각 프로퍼티 key를 이용해 본문실행
// }
let user = {
    name : "John"
    , age : 30
    , isAdmin : true
};

for (let key in user){
    //키(key대신에 다른 변수명 사용 ok)
    alert(key) //name, age, isAdmin
    //키에 해당하는 값
}   alert(user[key]) //John, 30, true
```
