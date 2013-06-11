var sum = 0, 
	prev = 0, 
	next = 1, 
	nu = 0;


while (next <= 4000000) {
	nu = (prev + next);
	prev = next;
	next = nu;
	if (nu % 2 == 0) {
		sum += nu;
	}
}
console.log(sum);