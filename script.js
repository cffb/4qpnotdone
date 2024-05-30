//index.html
function usernameb() {
    var x = document.getElementById("username").value;
    if (x == "") {
        document.getElementById("username").style.borderColor = "red";
    } else {
        document.getElementById("username").style.borderColor = "green";
    }
}
function userName() {
    var x = document.getElementById("username2").value;
    if (x == "") {
        document.getElementById("username2").style.borderColor = "red";
    } else {
        document.getElementById("username2").style.borderColor = "green";
    }
}
function emailb() {
    var x = document.getElementById("email").value;
    if (x == "") {
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById("email").style.borderColor = "green";
    }
}
function pword() {
    var x = document.getElementById("password").value;
    if (x == "") {
        document.getElementById("password").style.borderColor = "red";
    } else {
        document.getElementById("password").style.borderColor = "green";
    }
}
function adress() {
    var x = document.getElementById("HomeAddress").value;
    if (x == "") {
        document.getElementById("HomeAddress").style.borderColor = "red";
    } else {
        document.getElementById("HomeAddress").style.borderColor = "green";
    }
}
function comments() {
    var x = document.getElementById("interest").value;
    if (x == "") {
        document.getElementById("interest").style.borderColor = "red";
    } else {
        document.getElementById("interest").style.borderColor = "green";
    }
}
function gendr() {
    var genderOptions = document.querySelectorAll('input[name="gender"]');
    var selected = Array.from(genderOptions).some(option => option.checked);
    genderOptions.forEach(option => {
        option.style.borderColor = selected ? "green" : "red";
    });
}
function contactn() {
    var x = document.getElementById("contactnn").value;
    if (x == "") {
        document.getElementById("contactnn").style.borderColor = "red";
    } else {
        document.getElementById("contactnn").style.borderColor = "green";
    }
}

document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("username").value;
    var lastName = document.getElementById("username2").value;
    var sex = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById("email").value;
    var contactn = document.getElementById("contactnn").value;
    var supportReason = document.getElementById("interest").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("sex", sex);
    localStorage.setItem("email", email);
    localStorage.setItem("contactn", contactn);
    localStorage.setItem("supportReason", supportReason);

    window.location.href = "profile.html";
});

//messages.html
function reply(){
    const messages = [
        "There's more joy and more life for you to experience. Don't give up, please. It is going to be okay.",
        "We're proud of you for making it through your hardest days! It might not be easy, but we will always get through it. Sending virtual hugs ⊂⁠(⁠•⁠‿⁠•⁠⊂⁠ ⁠)⁠*⁠.⁠✧",
        "Ohmy I like ur smile!! Please do it more often and never underestimate the power your smile holds as it could be the sunshine that someone needs on a cloudy day. (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)",
        "Remember that there is always rainbows and sunshine after the rain. So, no matter how tough today may seem, we're proud of you for surviving, and tomorrow is definitely going to be a better day. :D",
        "Remember, it's okay to have difficult days, and you don't have to go through them alone. You are cared for deeply, and I'm here for you whenever you need to talk or just have someone listen. Take it one step at a time, and know that brighter days are ahead. I believe in YOU! <33",
        "Just wanted to remind you how amazing you are! Your strength and positivity are truly inspiring. Keep shining bright—better days are just around the corner.",
        "I just wanted to remind you that you are capable of amazing things. Don't let today's worries dim your bright future. You are stronger than you know.",
        "I hope this message brightens your day a bit. Remember, even on tough days, your strength and kindness make a big difference. Keep your head up and know that better times are ahead.",
        "Take a deep breath and let go of any worries or fears that may be weighing you down. You are doing the best you can, and that is something to be proud of.",
        "Keep going, even when it feels tough. You are stronger than you think, and you will get through this. And when you do, you'll emerge even stronger, wiser, and more resilient. Be gentle with yourself, and remember that it's okay to make mistakes. You are human, and that's what makes you beautiful.",
        "Life can be unpredictable and chaotic at times, but you are strong and capable of handling whatever comes your way. You are resilient, and you have the power to rise above anything that life throws your way."
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    window.alert(messages[randomIndex]);
    return false; 
}