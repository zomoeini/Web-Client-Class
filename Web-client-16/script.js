// we had Regex  email validation 
// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

// when the html file loaded completely fully loaded 
$(documnt).ready(function() {
    // validate the email address
    function isValidEmail(email) {
        //pattern is always string
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
        // return true or false
    }

    // form submit event 
    // documnent.getElementById()
    // submit() eventListener 
    // form submit event 
    $("#subscribeForm").submit(function(event){
        // by default I should not let the form to be submitted
        // I should put the submission on hold 
        event.preventDefault();

        // get the email fro input 
        const email = $("#email").val();

        // validate the email

        if(isValidEmail(email)) {
            $("#emailError").hide(); // Hide th error message if the email is valid
            alert("Form submitted successfully!");
        }else {
            $("#emailError").show(); // show the message that your email is invalid
        }
    });
});