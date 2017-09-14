document.addEventListener('DOMContentLoaded', function(){

	var column1 = ["#col1-1", "#col1-2", "#col1-3", "#col1-4", "#col1-5", "#col1-6"];
	var column2 = ["#col2-1", "#col2-2", "#col2-3", "#col2-4", "#col2-5", "#col2-6"];
	var column3 = ["#col3-1", "#col3-2", "#col3-3", "#col3-4", "#col3-5", "#col3-6"];
	var column4 = ["#col4-1", "#col4-2", "#col4-3", "#col4-4", "#col4-5", "#col4-6"];
	var column5 = ["#col5-1", "#col5-2", "#col5-3", "#col5-4", "#col5-5", "#col5-6"];
	var column6 = ["#col6-1", "#col6-2", "#col6-3", "#col6-4", "#col6-5", "#col6-6"];
	var player = true;
	var reset = $('#reset');
	var winner;

	reset.click(function(){
		console.log("reset works");
		$("h1").text("Remember How To Play Connect 4?");
		$('.cell').addClass('empty');
		$('.cell').css('backgroundColor', 'white');
		$('.shell').show();
		player = true;
	});
//done with classes
	// $(".col1").click(function(){
	// 	console.log("col1 click works");
	// 	for(var i=0;i<column1.length;i++){
	// 		if($(column1[i]).hasClass("empty") && player===true){
	// 			console.log("knows white");
	// 			$(column1[i]).css("background-color", "black");
	// 			$(this).addClass("full");
	// 			$(this).removeClass("empty");
	// 			announceWinner();
	// 			player=false;
	// 			break;
	// 		} else if($(column1[i]).hasClass("empty") && player===false){
	// 			$(column1[i]).css("background-color", "gold");
	// 			$(this).addClass("full");
	// 			$(this).removeClass("empty");
	// 			announceWinner();
	// 			player=true;
	// 			break;
	// 		} else if ($(column1[i]).hasClass("full")) {
	// 			continue;
	// 		}
	// 	}
	// });
//changing css color
	// $(".col1").click(function(){
	// 	console.log("col1 click works");
	// 	for(var i=0;i<column1.length;i++){
	// 		if($(column1[i]).css("background-color")==="white" && player===true){
	// 			console.log("knows white");
	// 			$(column1[i]).css("background-color", "black");
	// 			announceWinner();
	// 			player=false;
	// 		} else if($(column1[i]).css("background-color")==="white" && player===false){
	// 			$(column1[i]).css("background-color", "gold");
	// 			announceWinner();
	// 			player=true;
	// 		} else if($(column1[i]).css("background-color")==="black" || ($(column1[i]).css("background-color")==="gold")) {
	// 			continue;
	// 		}
	// 	}
	// });




	$(".cell").click(function() {
		console.log("click works");
		if ($(this).hasClass("empty") && player===true) {
	            $(this).removeClass("empty");
	            $(this).addClass("full");
	            this.style.backgroundColor="black";
	            announceWinner();
	            player= false;
	   	} else if ($(this).hasClass("empty") && player===false) {
	    		$(this).removeClass("empty");
	    		$(this).addClass("full");
	            this.style.backgroundColor="gold";
	            announceWinner();
	            player=true;
	    }
	})


	var row1 = $('div.row1');
	var row2 = $('div.row2');
	var row3 = $('div.row3');
	var row4 = $('div.row4');
	var row5 = $('div.row5');
	var row6 = $('div.row6');
	var gameBoardArray = [row1, row2, row3, row4, row5, row6];

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
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "gold" &&
	        gameBoardArray[i][0].children[j+1].style.backgroundColor === "gold" &&
	        gameBoardArray[i][0].children[j+2].style.backgroundColor === "gold" &&
	        gameBoardArray[i][0].children[j+3].style.backgroundColor === "gold"){
	      	console.log("gold wins");
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
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "gold" &&
	        gameBoardArray[i+1][0].children[j].style.backgroundColor === "gold" &&
	        gameBoardArray[i+2][0].children[j].style.backgroundColor === "gold" &&
	        gameBoardArray[i+3][0].children[j].style.backgroundColor === "gold"){
	      	console.log('gold wins');
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
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "gold" &&
	        gameBoardArray[i+1][0].children[j+1].style.backgroundColor === "gold" &&
	        gameBoardArray[i+2][0].children[j+2].style.backgroundColor === "gold" &&
	        gameBoardArray[i+3][0].children[j+3].style.backgroundColor === "gold"){
	      	console.log('gold wins');
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
	      if(gameBoardArray[i][0].children[j].style.backgroundColor === "gold" &&
	        gameBoardArray[i-1][0].children[j+1].style.backgroundColor === "gold" &&
	        gameBoardArray[i-2][0].children[j+2].style.backgroundColor === "gold" &&
	        gameBoardArray[i-3][0].children[j+3].style.backgroundColor === "gold"){
	        	console.log('gold wins');
	      		return true;
	      	}
	    }
	  }
	}
	function announceWinner(){
		console.log("announceWinner")
		if(player===true && checkWinner()===true){
			$(".shell").hide();
			$("h1").text("Congrats Black Won!!");
		}else if(player===false && checkWinner()===true){
			$(".shell").hide();
			$("h1").text("Congrats Gold Won!!");
		}
	}
	announceWinner();
});







