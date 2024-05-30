// Retrieve data from local storage
var firstName = localStorage.getItem("firstName");
var lastName = localStorage.getItem("lastName");
var gender = localStorage.getItem("sex");
var email = localStorage.getItem("email");
var contactn = localStorage.getItem("contactn");
var supportReason = localStorage.getItem("supportReason");

// Display the data
document.getElementById('profile-firstname').textContent = "First Name: " + firstName;
document.getElementById('profile-lastname').textContent = "Last Name: " + lastName;
document.getElementById('profile-gender').textContent = "Gender: " + gender;
document.getElementById('profile-email').textContent = "Email: " + email;
document.getElementById('profile-contact').textContent = "Contact Number: " + contactn;
document.getElementById('profile-interest').textContent = "Why do you support this campaign?: " + supportReason;