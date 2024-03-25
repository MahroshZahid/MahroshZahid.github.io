 // creating function for greeting with input from user after button trigger
function myFunction() {
    var name = prompt("Enter Name");
    var greeting = "Hi " + name + "! Thank you for visiting my website :)";
    document.getElementById("greeting").innerHTML = greeting;
}

function ChangeImageSize(){
    var img = document.getElementById("image");
    img.style.height = "500px";
    img.style.width = "400px";
}

// show dropdown
function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

// hide dropdown
function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'none';
}

function submitForm() {
    //retrieving data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var phone_type = document.getElementById("phone_type").value;

    //query selector returns first element that matches a certain selector
    //looking for input element with attribute name set to gender and checked radio button
    var gender = document.querySelector('input[name="gender"]:checked').value;


    //need to loop through each to find which was checked

    // Retrieving industry
    var industry = [];
    var industryCheckboxes = document.getElementsByName("industry");
    for (var i = 0; i < industryCheckboxes.length; i++) {
        if (industryCheckboxes[i].checked) {
            industry.push(industryCheckboxes[i].value);
        }
    }

    //storing data
    var fname = localStorage.setItem("name", name);
    var emailad = localStorage.setItem("email", email);
    var telp = localStorage.setItem("phone", phone);
    var msg = localStorage.setItem("message", message);
    var tel_type = localStorage.setItem("phone_type", phone_type);
    var gen = localStorage.setItem("gender", gender);
    var work_industry = localStorage.setItem("industry", industry)
}

function toggleColorblindMode() {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
}