/**
 * Prevent contact form container going off the mobile screen when clicking on input field & keyboard being shown on screen
*/
$(document).ready(function () {
    if ($(window).width() <= 740) { //common horizontal viewport dimension of mobile screens
        document.getElementsByTagName("input")[0].addEventListener("focus", function () {
            document.getElementById("game-container").style.top = "75%";
        });
        document.getElementsByTagName("input")[0].addEventListener("blur", function () { //container returns to its default position when input not focused
            document.getElementById("game-container").style.top = "45%";
        });
    }
});

/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
 */
const sendFormButton = document.getElementById("btn-send-form");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.init("user_ky3jHn7C0IfrC1dfTWauP");
    sendFormButton.value = "Sending..."; //changing value of the button when sending in progress

    emailjs.sendForm("sunshineguessing", "sgg-contact-form", this)
        .then(() => {
            sendFormButton.value = "Send";
            formSubmittedMessage();

        }, (err) => {
            console.log(JSON.stringify(err));
        });
});

/**
 * Display a thank you image on the screen once the contact form has been submitted
 */
function formSubmittedMessage() {
    let message = `
            <div class="image-other-screens">
                <img src="assets/images/contact-form-thankyou-image.png" alt="Sun image with thank you writing">
            </div>
            <a href="index.html" class="button my-3">Go back</a>
            `;
    document.getElementById("game-container").innerHTML = message;
}