$(document).ready(function () {
	$('nav > div').on('click',function(){  //nav immediate child 
		var display = $(this).children().eq(0).css('display')  //從點到的menu底下 拿第一個小孩 再拿display 
		if(display === 'none') {
			$('nav > div > div').css('display', 'none');    //先全部收起來變成none 點到的再出來
			$(this).children().css('display', 'block');
		}
		else {
			$(this).children().css('display', 'none');
		}
	});
});