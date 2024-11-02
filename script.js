// Select all elements with the class "temp"
var elements = document.getElementsByClassName("temp");
var buttons = document.getElementsByClassName("sliderButton");

// Variable to keep track of the current position
var currentTranslation = 0;
var slideAmount = 1310;
var maxTranslation = -2600;

// Function to update the transform on all elements
function updateTransform() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.transition = "transform 0.5s"; // Smooth transition
        elements[i].style.transform = `translateX(${currentTranslation}px)`; // Apply the translation
    }
}

// Loop through each button and add a click event listener for sliding left
for (var j = 0; j < buttons.length; j++) {
    buttons[j].onclick = function() {
        // Slide left
        if (currentTranslation > maxTranslation) {
            currentTranslation -= slideAmount; // Slide left
            updateTransform();
        }
    };
}

// Previous button
var previousButton = document.getElementById("previousButton");
previousButton.onclick = function() {
    // Slide right
    if (currentTranslation < 0) { // Ensure we don't go past the initial position
        currentTranslation += slideAmount; // Slide right
        updateTransform();
    }
};
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}

const typed = new Typed('.multiple-text', {
    strings: ['<i>Frontend Developer</i>.', '<i>Backend Developer</i>.', '<i>Web Developer</i>.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop:true,
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

document.querySelector('form').addEventListener('submit', sendEmail);

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get the selected subject
    var subject = document.querySelector('input[name="subject"]:checked');

    // Check if a subject is selected
    if (!subject) {
        alert("Please select a subject.");
        return; // Exit the function if no subject is selected
    }

    var params = {
        f_name: document.getElementById("fname").value,
        l_name: document.getElementById("lname").value,
        email_id: document.getElementById("email").value,
        phone_num: document.getElementById("phone").value,
        subject_is: subject.value, // Correctly get the subject value
        message_is: document.getElementById("message").value,
    };

    emailjs.send('service_1f29yig', 'template_jxkmquc', params).then(function (res) {
        alert("Success! " + res.status);
    }, function (error) {
        alert("Failed to send: " + error);
    });
}


