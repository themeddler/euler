function largestPrime(num){
    var largest = 0;
    var max = Math.sqrt(num);
    
    for (i = 3; i <= Math.sqrt(num); i += 2){
        not = false;
        if (num % i === 0){
            if (i % 2 !== 0){
                for (j = 3; j <= Math.sqrt(i); j += 2){
                    if ( i % j === 0 ){
                        not = true;
                    }
                }
                if (not === false){
                    largest = i;
                }
            }
        }
    }
    return largest;
}