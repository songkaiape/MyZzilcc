function clock() {
	var clk = new Date();
	$('#clock').text(clk.getHours().toString()+ ':' + clk.getMinutes().toString());
}
function greetings() {
	var clk = new Date();
	var hour = clk.getHours();
	if(hour >= 5 && hour < 11) {
		$('#greetings').html('Good Morning <i class="fa fa-coffee"></i>, Zzilcc.');
	}
	else if(hour >= 11 && hour < 17) {
		$('#greetings').html('Good Afternoon <i class="fa fa-book"></i>, Zzilcc.');
	}
	else {
		$('#greetings').html('Good Evening <i class="fa fa-moon-o"></i>, Zzilcc.');
	}
}

setInterval(clock, 200);
setInterval(greetings, 200);
