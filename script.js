document.addEventListener('DOMContentLoaded', function(){

	var player = "one";
	var reset = $('#reset');

	reset.click(function(){
		console.log("reset works");
		$('.cell').removeClass("red");
		$('.cell').removeClass("blue");
		$('.cell').addClass('empty');
		$('.cell').css('backgroundColor', 'white');
	});

	var column1 = ["col1-1", "col1-2", "col1-3", "col1-4", "col1-5", "col1-6"];
	var column2 = ["col2-1", "col2-2", "col2-3", "col2-4", "col2-5", "col2-6"];
	var column3 = ["col3-1", "col3-2", "col3-3", "col3-4", "col3-5", "col3-6"];
	var column4 = ["col4-1", "col4-2", "col4-3", "col4-4", "col4-5", "col4-6"];
	var column5 = ["col5-1", "col5-2", "col5-3", "col5-4", "col5-5", "col5-6"];
	var column6 = ["col6-1", "col6-2", "col6-3", "col6-4", "col6-5", "col6-6"];

	$(".col1").click(function() {
		console.log("click works");
		console.log(this);
		if ($(this).hasClass("empty") && player==="one") {
	            $(this).removeClass("empty");
	            $(this).addClass("one");
	            this.style.backgroundColor="blue";
	            player= "two";
	            console.log("done");
	   	} else if ($(this).hasClass("empty") && player==="two") {
	    		$(this).removeClass("empty");
	    		$(this).addClass("two");
	            this.style.backgroundColor="red";
	            player="one";
	    		console.log("yes");
	    }
	})
	$(".col2").click(function() {
		console.log("click works");
		console.log(this);
		if ($(this).hasClass("empty") && player==="one") {
	            $(this).removeClass("empty");
	            $(this).addClass("one");
	            this.style.backgroundColor="blue";
	            player= "two";
	            console.log("done");
	   	} else if ($(this).hasClass("empty") && player==="two") {
	    		$(this).removeClass("empty");
	    		$(this).addClass("two");
	            this.style.backgroundColor="red";
	            player="one";
	    		console.log("yes");
	    }
	})
	$(".col3").click(function() {
		console.log("click works");
		console.log(this);
		if ($(this).hasClass("empty") && player==="one") {
	            $(this).removeClass("empty");
	            $(this).addClass("one");
	            this.style.backgroundColor="blue";
	            player= "two";
	            console.log("done");
	   	} else if ($(this).hasClass("empty") && player==="two") {
	    		$(this).removeClass("empty");
	    		$(this).addClass("two");
	            this.style.backgroundColor="red";
	            player="one";
	    		console.log("yes");
	    }
	})
	$(".col4").click(function() {
		console.log("click works");
		console.log(this);
		if ($(this).hasClass("empty") && player==="one") {
	            $(this).removeClass("empty");
	            $(this).addClass("one");
	            this.style.backgroundColor="blue";
	            player= "two";
	            console.log("done");
	   	} else if ($(this).hasClass("empty") && player==="two") {
	    		$(this).removeClass("empty");
	    		$(this).addClass("two");
	            this.style.backgroundColor="red";
	            player="one";
	    		console.log("yes");
	    }
	})
	$(".col5").click(function() {
		console.log("click works");
		console.log(this);
		if ($(this).hasClass("empty") && player==="one") {
	            $(this).removeClass("empty");
	            $(this).addClass("one");
	            this.style.backgroundColor="blue";
	            player= "two";
	            console.log("done");
	   	} else if ($(this).hasClass("empty") && player==="two") {
	    		$(this).removeClass("empty");
	    		$(this).addClass("two");
	            this.style.backgroundColor="red";
	            player="one";
	    		console.log("yes");
	    }
	})
	$(".col6").click(function() {
		console.log("click works");
		console.log(this);
		if ($(this).hasClass("empty") && player==="one") {
	            $(this).removeClass("empty");
	            $(this).addClass("one");
	            this.style.backgroundColor="blue";
	            player= "two";
	            console.log("done");
	   	} else if ($(this).hasClass("empty") && player==="two") {
	    		$(this).removeClass("empty");
	    		$(this).addClass("two");
	            this.style.backgroundColor="red";
	            player="one";
	    		console.log("yes");
	    }
	})       

var array= [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5], [0,1,2,3,4,5],[0,1,2,3,4,5]]




});










