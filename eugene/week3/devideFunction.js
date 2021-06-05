//분리전

//분리후
function showPrimes(n){
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;//2,3,5,7
        console.log(i)
    }
}

//소수인지 아닌지 검증하는 코드
function isPrime(n){
    for (let i = 2; i < n; i++){
        if( n % i == 0) return false;//정수면실패
    }
    return true;//소수면통과
}
// console.log(isPrime(9.1))
showPrimes(9.1)