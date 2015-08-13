
/*

This JS file is for the sign-up screen only

*/

$( document ).ready(function() {
 	
 	// check for checkbox
 	//		check all fields are entered
 	//			check password and reentered password is the same
 	var submitted = false;

    $('form').on('submit', function(){
    	event.preventDefault();
    	if (!submitted){
	    	if ( $('#user-checkbox').is(':checked') ){
	    		console.log("terms and conditions checked!");
	    		if ( $('#user-email').val() && $('#user-username').val() && $('#user-password').val() ){
			    	if ($('#user-password').val() == $('#user-reenterpassword').val() ){
			    		console.log("all conditions fulfilled");
			    		submitted = true;
			    		$('#user-submit').html("Back");
				    	$('#returnresults').html("<p style='color: green'> Success! </p>");
			    	} else{
			    		console.log("password and reentered password does not match")
			    		$('#returnresults').html("<p style='color: red'> Password and Re-entered password does not match! </p>");
			    	}
		    	} else {
		    		console.log("email, username or password not filled up!");
		    		$('#returnresults').html("<p style='color: red'> Please fill up all fields! </p>");
		    	}
	    	} else {
	    		console.log("terms and conditions not checked");
	    		$('#returnresults').html("<p style='color: red'> Please agree to the terms and conditions </p>");
	    	}
    	} else {
    		document.location.href = "login.html";
    	}
    });
});
