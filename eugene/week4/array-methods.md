# [5.5 array-methods](https://ko.javascript.info/array-methods)

## 배열과 메서드
* 배열은 다양한 메서드를 제공한다.

## 요소 추가/제거 메서드
* arr.push(...items) - 맨 끝에 요소추가
* arr.pop() - 맨 끝에 요소제거
* arr.shift() - 맨 앞 요소제거
* arr.unshift() - 맨 앞 요소추가

* arr.splice() - 만능열쇠? 요소 추가,제거,교체 모두가능, 단 기존배열을 건들게됨
```javascript
//제거
let arr = ["I", "study", "Javascript"]
arr.splice(1,1)//인덱스 1로부터 요소한개를 제거
alert(arr)//["I", "Javscript"]

//교체
let arr2 = ["I", "study", "Javascript", "right", "now"];
//처음(0) 3개(3)의 요소를 지우고, 이 자리를 다른요소로 대체
arr2.splice(0,3,"Let's", "dance")
alert(arr2)//["Let's","dance","right","now"]

arr2.splice(0,2)
alert(arr2)//["Let's","dance"]

//splice메서드의 deleteCount를 0으로 설정하면 요소를 제거하지않으면서 새로운 요소 추가가능
let arr3 = ["I", "study", "Javascript"];
arr3.splice(2,0,"complex","language")
alert(arr3)//["I", "studay", "complex", "language", "Javascript"]
```

* slice - splice와 다르게 기존 배열을 건들지않음!!!
날려버려 slice(index가아니라 진짜 숫자 start)
arr.slice().sort() => sort()는 배열을건드는에 앞에 slice()가 오면은 기존배열 못건듬


* concat(...items) - 기존배열의 요소를 사용해 새로운 배열을 만들거나, 요소추가. items가 배열이면 인수만 추가

* forEach 반복작업, 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해준다.
```javascript
["A", "B", "C"].forEach(alert)//alert("A"), alert("B"), alert("C")

["C", "D", "E"].forEach((item, index, array)=>{
    alert(`${item} is at index ${index} in ${array}`)
    //alert(C is at index 0 in C,D,E)
    //alert(D is at index 1 in C,D,E)
    //alert(E is at index 2 in C,D,E)
})
```
* find
특정조건에 부합하는 객체를 배열내에서 찾을수있음
함수가 true를 반환하면 해당요소가 반환, 없으면 undefined
```javascript
let users = [
    {id:1, name:"John"}
    ,{id:2, name:"pete"}
    ,{id:3, name:"Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name)
```

* filter
find와 달리 조건을 충족하는 요소가 여러개라면 사용(find는 단하나
find와 문법은유사하나 조건에 맞는 요소 전체를 담은 배열반환
```javascript
    let users = [
        {id:1, name:"John"}
        ,{id:2, name:"Pete"}
        ,{id:3, name:"Mary"}
    ];

    //앞쪽 사용자 두명 반환
    let someUsers = users.filter(item => item.id <3);
    alert(someUsers.length)//2
```

* map
배열 요소 전체를 대상으로 함수를 호출하고, 함수호출결과를 배열로 반환
```javascript
let lengths = ["AAA","BB","CCCCC"].map(item => item.length);
alert(lengths)//3,2,5
```

* indexOf();index반환 없으면-1
* includes();true/false 반환
```javascript
let arr = [1,0,false];
alert(arr.indexOf(0))//1
alert(arr.indexOf(false))//2
alert(arr.indexOf(null))//-1

alert(arr.includes(1))//true
```

* Array.isArray(arr) - arr이 배열인지 여부판단, 
typeof로는 일반객체와 배열 구별불가하기에 유용한 메서드

* split
긴 형태의 문자열을 배열형태로 전환해 처리하고싶을때?
```javascript
let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ')
alert(arr)//["Bilbo", "Gandalf", "Nazgul"]

for(let name of arr){
    alert(`${name}에게 보내는 메시지`)//알지?
}

//글자단위로 분리하기
let str = "test"
str.split('')//t,e,s,t
```
* join 
split의 반대역할을 하는 메서드 glue역할!

*sort()
[1,2,15].sort()의 결과 요소는 문자열로 취급되기때문에 1,15,2가 출력됨(문자열 비교는 사전편집순 '2'>'15')
새로운 정렬기준을 만드려면 sort()에 새로운 함수를 넘겨줘야함
```javascript
//정렬알고리즘인 퀵소트
function quicksort(a,b){
    console.log(a + '<>' + b)//1랑 2랑 비교, 이긴 2랑 15랑 비교 
    return a - b
}

// function compare(a,b){
//     if (a > b) return 1; 긍정이면 b가 a앞으로이동
//     if (a == b) return 0; 동일하면그대로
//     if (a < b) return -1 부정이면 a가 b앞으로
// }
return 
-1 0 1

let arr = [1,15,2]
arr.sort(compare)
alert(arr) //1,2,15
```