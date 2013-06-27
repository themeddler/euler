var largest = 0;

function isPalindrome(x,y){
    var product = x * y;
    var rev = product.toString().split('').reverse().join('');
    var prev = parseInt(rev,10);
    
    if (product == prev){
        return product;
    }
    else{
    	return false;
    }
}

for (var i = 100; i < 1000; i++){
	for(var j = 100; j < 1000; j++){
		var y = isPalindrome(i,j)
		if (y > 0){
			if (y > largest){
				largest = y
			}
		}
	}
}