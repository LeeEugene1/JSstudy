function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return console.log('입장하실수없습니다. 보호자를 데리고오세요');
    }
}
function showMovie(age){
    if(!checkAge(age)){
        return;
    }
    console.log("영화상영");
}

showMovie(18);