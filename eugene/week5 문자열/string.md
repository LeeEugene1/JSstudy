# [5.3 문자열](https://ko.javascript.info/string)

* 문자열은 작은따옴표나 큰따옴표, 백틱으로 감쌀수 있다.

```javascript
function sum(a, b){
    return a + b
}
alert(`안녕하쎼요`)//"안녕하쎼요"

//템플릿 리터럴
alert(`1+2 = ${sum(1,2)}`)//3
```

* 백틱은 여러줄에 걸쳐 작성가능
```javascript
let guestList = `손님:
 * John
 * Pete
 * Mary
`;

alert(guestList);
```

* 특수기호
\n : 엔터
\t : 탭
\\ : 역슬레시
\', \" : 따옴표

* 문자열의 길이 문자열.length

let str = `Hello`
* 첫번째 접근하기: str[0], str.charAt(0) 둘의차이 접근하려는 위치에 글자가없을경우 []는 undefined, charAt은 빈문자열반환
* 마지막글자 접근하기 : str[str.length -1]

* 문자열 반복
```javascript
for(let char of "Hello"){
    alert(char)//H,e,l,l,o
}
```

* 문자열의 불변성
기존 문자열은 수정불가능

* 대소문자 변경하기
문자열.toUpperCase()
문자열.toLowerCase()

* 부분문자열찾기 indexOf, includes, startsWith, endsWith
```javascript
let str = 'Widget width id'
str.indexOf('Widget') // 0
str.indexOf('widget') // -1 없어서
str.indexOf('id') // 1; Wid~
str.indexOf('id', 2) // 2번째 id의 index는? 12

// 사용법
if (str.indexOf("Widget") != -1) {
    alert("찾았다!"); // 의도한 대로 동작합니다.
}

str.includes("Widget")//true
str.includes("bye")//false
str.includes("id", 3) //3번째 위치에 id가없으므로 false

str.startsWith('Wid')//true
str.endsWith('id')//true
```

* 부분 문자열 추출하기 slice(start [, end]), substring(start [, end]), str.substr(start [, length])
```javascript
//slice가 유연하기때문에 slice만 외워도충분!!!!!
let str = "stringify"
str.slice(0,5) // strin
str.slice(0,1) // s
str.slice(2) //2번째부터 끝까지 ringify
str.slice(-4,-1) //끝에서 4번째부터 시작해서 끝에서 1번째 위치까지 gif

//slice 와 substring은 유사하지만 start가 end보다 커도 괜찮다는데 차이가 있다.
//그리고 음수 인수를 허용하지않는다. 음수는 0처리
str.substring(2,6) //ring
str.substring(6,2) //ring
str.slice(6,2) //""

str.substr(2,4)//ring 두번째글자부터 글자 4개
str.substr(-4,2)//끝에서 4번째 위치에서부터 글자 2개 gi
```
