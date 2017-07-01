function regMessage(){
	alert("You have successfully Registered!!!")
};

$(document).ready(function(){
		$("#addUser").click(function(){
			var first = $("#fname").val();
			var last = $("#lname").val();
			var email = $("#em").val();
			var desc = $("textarea").val();
			
			console.log(first, last, email, desc);

			$(".mycard").append("<div class = 'cardContainer'>" + "<img src='./whatsapp-profile-picture.jpg' alt='whatsapp profile picture'>" + "<p><b>" + first + " " + last + "</b></p>" + "<p>" + email+"</p><p>" + desc + "</p><br>" +
				"<a href='#''>" + "<i class='fa fa-twitter'>" + "</i>" + "</a><a href='#'>" + "<i class='fa fa-linkedin'>" + "</i>" + "</a>" +
				"<a href='#'>" + "<i class='fa fa-facebook'>" + "</i>" + "</a><p><button id='descButton'>" + "Description" + "</button>" + "</p></div>"
				
				
			);

				$("#fname").val("");
				$("#lname").val("");
				$("#em").val("");
				$("#desc").val("");
				//Return false to prevent refresh
				regMessage();
				return false;
			});
		$(document).on('click', '.cardContainer', function(){
				//Toggle the #cards' childrens' display property
				$(this).children().toggle();
			});
	
		});