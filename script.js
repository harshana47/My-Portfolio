var elements = document.getElementsByClassName("temp");
var buttons = document.getElementsByClassName("sliderButton");

var currentTranslation = 0;
var slideAmount = 1310;
var maxTranslation = -1310;

function updateTransform() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.transition = "transform 0.5s"; // Smooth transition
        elements[i].style.transform = `translateX(${currentTranslation}px)`; // Apply the translation
    }
}

for (var j = 0; j < buttons.length; j++) {
    buttons[j].onclick = function() {
        // Slide left
        if (currentTranslation > maxTranslation) {
            currentTranslation -= slideAmount;
            updateTransform();
        }
    };
}

var previousButton = document.getElementById("previousButton");
previousButton.onclick = function() {
    // Slide right
    if (currentTranslation < 0) {
        currentTranslation += slideAmount;
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
    event.preventDefault();

    var subject = document.querySelector('input[name="subject"]:checked');

    if (!subject) {
        alert("Please select a subject.");
        return;
    }

    var params = {
        f_name: document.getElementById("fname").value,
        l_name: document.getElementById("lname").value,
        email_id: document.getElementById("email").value,
        phone_num: document.getElementById("phone").value,
        subject_is: subject.value,
        message_is: document.getElementById("message").value,
    };

    emailjs.send('service_1f29yig', 'template_jxkmquc', params).then(function (res) {
        alert("Success! " + res.status);
    }, function (error) {
        alert("Failed to send: " + error);
    });
}



