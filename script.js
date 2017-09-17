document.addEventListener('DOMContentLoaded', function(){
	
	var column1 = ["#col1-6", "#col1-5", "#col1-4", "#col1-3", "#col1-2", "#col1-1"];
	var column2 = ["#col2-6", "#col2-5", "#col2-4", "#col2-3", "#col2-2", "#col2-1"];
	var column3 = ["#col3-6", "#col3-5", "#col3-4", "#col3-3", "#col3-2", "#col3-1"];
	var column4 = ["#col4-6", "#col4-5", "#col4-4", "#col4-3", "#col4-2", "#col4-1"];
	var column5 = ["#col5-6", "#col5-5", "#col5-4", "#col5-3", "#col5-2", "#col5-1"];
	var column6 = ["#col6-6", "#col6-5", "#col6-4", "#col6-3", "#col6-2", "#col6-1"];
	var column7 = ["#col7-6", "#col7-5", "#col7-4", "#col7-3", "#col7-2", "#col7-1"];

	var row1 = $('div.row1');
	var row2 = $('div.row2');
	var row3 = $('div.row3');
	var row4 = $('div.row4');
	var row5 = $('div.row5');
	var row6 = $('div.row6');

	var player = true;
	var reset = $('#reset');
	var winner;
	var gameBoardArray = [row1, row2, row3, row4, row5, row6];
	
	reset.click(function(){
		console.log("reset works");
		$("h1").text("Chase's Connect 4!");
		$("h1").css('color', 'black');
		$('.cell').addClass('empty');
		$('.cell').css('backgroundColor', 'white');
		$('.shell').show();
		$('.rules').show();
		$(".gif").hide();
		$(".gif2").hide();
		player = true;
	});

	$(".col1").click(function(){
		for(var i=0;i<column1.length;i++){
			if($(column1[i]).hasClass("empty") && player===true){
				$(column1[i]).css("background-color", "black");
				$("h1").css('color', 'orange');
				$(column1[i]).addClass("full");
				$(column1[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column1[i]).hasClass("empty") && player===false){
				$(column1[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column1[i]).addClass("full");
				$(column1[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column1[i]).hasClass("full")) {
				continue;
			}
		}
	});

	$(".col2").click(function(){
		for(var i=0;i<column2.length;i++){
			if($(column2[i]).hasClass("empty") && player===true){
				$(column2[i]).css("background-color", "black");
				$("h1").css('color', 'orange');
				$(column2[i]).addClass("full");
				$(column2[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column2[i]).hasClass("empty") && player===false){
				$(column2[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column2[i]).addClass("full");
				$(column2[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column2[i]).hasClass("full")) {
				continue;
			}
		}
	});

	$(".col3").click(function(){
		for(var i=0;i<column3.length;i++){
			if($(column3[i]).hasClass("empty") && player===true){
				$(column3[i]).css("background-color", "black");
				$("h1").css('color', 'darkorange');
				$(column3[i]).addClass("full");
				$(column3[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column3[i]).hasClass("empty") && player===false){
				$(column3[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column3[i]).addClass("full");
				$(column3[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column3[i]).hasClass("full")) {
				continue;
			}
		}
	});

	$(".col4").click(function(){
		for(var i=0;i<column4.length;i++){
			if($(column4[i]).hasClass("empty") && player===true){
				$(column4[i]).css("background-color", "black");
				$("h1").css('color', 'darkorange');
				$(column4[i]).addClass("full");
				$(column4[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column4[i]).hasClass("empty") && player===false){
				$(column4[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column4[i]).addClass("full");
				$(column4[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column4[i]).hasClass("full")) {
				continue;
			}
		}
	});

	$(".col5").click(function(){
		for(var i=0;i<column5.length;i++){
			if($(column5[i]).hasClass("empty") && player===true){
				$(column5[i]).css("background-color", "black");
				$("h1").css('color', 'darkorange');
				$(column5[i]).addClass("full");
				$(column5[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column5[i]).hasClass("empty") && player===false){
				$(column5[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column5[i]).addClass("full");
				$(column5[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column5[i]).hasClass("full")) {
				continue;
			}
		}
	});

	$(".col6").click(function(){
		for(var i=0;i<column6.length;i++){
			if($(column6[i]).hasClass("empty") && player===true){
				$(column6[i]).css("background-color", "black");
				$("h1").css('color', 'darkorange');
				$(column6[i]).addClass("full");
				$(column6[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column6[i]).hasClass("empty") && player===false){
				$(column6[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column6[i]).addClass("full");
				$(column6[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column6[i]).hasClass("full")) {
				continue;
			}
		}
	});

	$(".col7").click(function(){
		for(var i=0;i<column7.length;i++){
			if($(column7[i]).hasClass("empty") && player===true){
				$(column7[i]).css("background-color", "black");
				$("h1").css('color', 'darkorange');
				$(column7[i]).addClass("full");
				$(column7[i]).removeClass("empty");
				announceWinner();
				player=false;
				break;
			} else if($(column7[i]).hasClass("empty") && player===false){
				$(column7[i]).css("background-color", "darkorange");
				$("h1").css('color', 'black');
				$(column7[i]).addClass("full");
				$(column7[i]).removeClass("empty");
				announceWinner();
				player=true;
				break;
			} if ($(column7[i]).hasClass("full")) {
				continue;
			}
		}
	});

	function checkWinner(e){
	  console.log("inside check winner checkWinner");
	  //Check rows
	  for(var i = 0; i < 6; i++){
	    for(var j = 0; j < 4; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "black" &&
	        gameBoardArray[i][0].children[j+1].style.backgroundColor === "black" &&
	        gameBoardArray[i][0].children[j+2].style.backgroundColor === "black" &&
	        gameBoardArray[i][0].children[j+3].style.backgroundColor === "black"){
	      	console.log("black wins");
	      	winner = 'black';
	      return true;
	      }
	    }
	  }
	  for(var i = 0; i < 6; i++){
	    for(var j = 0; j < 4; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i][0].children[j+1].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i][0].children[j+2].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i][0].children[j+3].style.backgroundColor === "darkorange"){
	      	console.log("darkorange wins");
	      return true;
	      }
	    }
	  } //check columns
	  for(var i = 0; i < 3; i++){
	    for(var j = 0; j< 7; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "black" &&
	        gameBoardArray[i+1][0].children[j].style.backgroundColor === "black" &&
	        gameBoardArray[i+2][0].children[j].style.backgroundColor === "black" &&
	        gameBoardArray[i+3][0].children[j].style.backgroundColor === "black"){
	      	console.log('black wins');
	      return true;
	      }
	    }
	  }
	  for(var i = 0; i < 3; i++){
	    for(var j = 0; j< 7; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i+1][0].children[j].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i+2][0].children[j].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i+3][0].children[j].style.backgroundColor === "darkorange"){
	      	console.log('darkorange wins');
	      return true;
	      }
	    }
	  } //check down-right
	  for(var i = 0; i < 3; i++){
	    for(var j = 0; j< 4; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "black" &&
	        gameBoardArray[i+1][0].children[j+1].style.backgroundColor === "black" &&
	        gameBoardArray[i+2][0].children[j+2].style.backgroundColor === "black" &&
	        gameBoardArray[i+3][0].children[j+3].style.backgroundColor === "black"){
	      	console.log('black wins')
	      return true;
	      }
	    }
	  }
	  for(var i = 0; i < 3; i++){
	    for(var j = 0; j< 4; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i+1][0].children[j+1].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i+2][0].children[j+2].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i+3][0].children[j+3].style.backgroundColor === "darkorange"){
	      	console.log('darkorange wins');
	      return true;
	      }
	    }
	  } //check down-left
	  for(var i = 3; i < 6; i++){
	    for(var j = 0; j< 4; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "black" &&
	        gameBoardArray[i-1][0].children[j+1].style.backgroundColor === "black" &&
	        gameBoardArray[i-2][0].children[j+2].style.backgroundColor === "black" &&
	        gameBoardArray[i-3][0].children[j+3].style.backgroundColor === "black"){
	        console.log('black wins');
	      return true;
	      }
	    }
	  }
	  for(var i = 3; i < 6; i++){
	    for(var j = 0; j< 4; j++){
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i-1][0].children[j+1].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i-2][0].children[j+2].style.backgroundColor === "darkorange" &&
	        gameBoardArray[i-3][0].children[j+3].style.backgroundColor === "darkorange"){
	        	console.log('darkorange wins');
	      		return true;
	      	}
	    }
	  }
	}
	function announceWinner(){
		console.log("announceWinner")
		if(player===true && checkWinner()===true){
			$(".shell").hide();
			$('.rules').hide();
			$("h1").text("Black Won!!");
			$(".gif").show();
		}else if(player===false && checkWinner()===true){
			$(".shell").hide();
			$('.rules').hide();
			$("h1").text("Orange Won!!");
			$(".gif2").show();
		}
	}
	announceWinner();
});