

// init; condition; POST-LOOP
var countTo = prompt ('how high should we count even numbers');

var sure = confirm('are you sure you want to count to '+ countTo);

for (var i = 0; i < 101; i++){
    if (i % 2 === 0)
    console.log('the number is', i);
}

