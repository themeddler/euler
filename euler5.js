function hello(){
	for (var i = 20; ; i += 20){
		for (var j = 19; j > 0; j--){
			if (i % j === 0){
				if (j == 1){
					return i;
				}
				continue;
			}
			else{
				break;
			}
		}
	}
}