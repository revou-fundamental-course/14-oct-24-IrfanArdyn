function validateForm() {
    const name = document.forms["message-form"]["full-name"].value
    const email = document.forms["message-form"]["send-email"].value
    const birthDate = document.forms["message-form"]["birth-date"].value
    const gender = document.forms["message-form"]["gender"].value
    const messages = document.forms["message-form"]["message"].value

    if (name == "" || email == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Input anda kosong");
        return false;
    }

    setSenderUI(name,birthDate,email,gender,messages);
    return false;
}

function setSenderUI(name,birthDate,email,gender,messages) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-birthdate").innerHTML = birthDate;
    document.getElementById("sender-message").innerHTML = messages;
}


function replaceName() {
    let visitors = prompt("Who are you ?", "");
    document.getElementById("visitor").innerHTML = visitors
}

let guestButton = document.getElementById("guestButton")
guestButton.addEventListener("click", function () {
    replaceName()
})

// Pembuatan Swiper
document.addEventListener ('DOMContentLoaded' , function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Jumlah slide yang ditunjukan
        spaceBetween: 10,

    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        navigation: {
            nextEl: '.swiper-button-next', // Button Next
            prevEl: '.swiper-button-prev', // Button Previous
        },
    
        // Opsi
        loop: true, // Melakukan Looping
        autoplay: { // Melakukan Autoplay
            delay: 2500, // Delay slides, menggunakan millisecond
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        },
    });  
});
