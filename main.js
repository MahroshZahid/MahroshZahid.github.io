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

// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Function to show dropdown
function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

// Function to hide dropdown
function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'none';
}
