
/*

This JS file is for the login screen only

*/

$( document ).ready(function() {
 	
 	// This user account has to be a ajax get request to the server. 
 	var login_user = {username: "admin", password:"admin"}
 	
    $('form').on('submit', function(){
    	event.preventDefault();
    	if ($('#login_username').val().toLowerCase()===login_user.username && $('#login_password').val()===login_user.password ){
	    	document.location.href = "main.html";
    	} else{
    		$('#returnresults').html("<p style='color: red'> Either username or password is wrong! </p>");
    	}
    });
});
