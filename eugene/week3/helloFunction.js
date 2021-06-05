//외부변수가 지역변수로인해 변경되는경우
let userName = 'eugene'
function changeName(){
    userName = 'bob'
}
console.log(userName)
changeName()
console.log(userName)

//외부변수와 지역변수가 따로노는경우
let userName_notChanged = 'yumin'
function noChangeName(){
    let userName_notChanged = 'yujin'
}
console.log(userName_notChanged);
noChangeName();
console.log(userName_notChanged);