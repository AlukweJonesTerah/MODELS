// mobile nav bar
$(document).ready(function() {
    $(".mobile-nav i").click(function() {
        $(".site-nav-menu").toggleClass("mobile-menu");
    });
});

// swiper images 

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// newsletter form

const emailRegex = /^\S+@\S+\.\S+$/;
const newsletterform = document.querySelector('#newsletterform');
const newsemail = document.querySelector('#email');

newsletterform.addEventListener('submit', function(event) {
    if (newsemail.value.length < 10 && email.value.length > 50) {
        alert('Your email is too short or too long. Let it have a range of 10 - 50 characters ');
        newsemail.focus();
        return;
    } else if (!emailRegex.test(newsemail.value)) {
        alert('Please enter a valid email address');
        newsemail.focus();
        return;
    } else {
        alert('Thank you for subscribing to our newsletter. We will ensure you are always up-to-date.');
        return;
    }

    newsletterform.submit();

});


// contact us form

const contactForm = document.querySelector('#contactform');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const text = document.querySelector('#text');


// adding  event listener to the form
contactform.addEventListener('submit', function(event) {
    // preventing  the form from submitting
    event.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;
    // validating the form
    if (fullName.value === "") {
        alert('Please enter your Full name');
        concole.log("Please enter a valid email");
        fullName.focus();
        return;
    } else if (email.value.length < 10 && email.value.length > 50) {
        alert('Your email is too short or too long. Let it have a range of 10 - 50 characters ');
        email.focus();
        return;
    } else if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return;
    } else if (text.value === "") {
        alert('Please write something before submiting the form!');
        return;
    } else if (text.value.length < 3) {
        alert('Your message is too short');
        email.focus();
        return;
    } else {
        alert("Thank you for sending us  your message we will respond as soon as possible!! ");
        return;
    }
    // if all the fields are vaild, submit the form
    contactform.submit();

});