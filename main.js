var message; // name of variable
message = "Hello!" // storing the string hello in variable
alert(message);

function showMessage() {
    alert('Hello everyone');
}

showMessage()
function changeText(word, iteration){
    for (var i=0; i<iteration;i++){
    alert("Hello" + word + "!");
    }
}

changeText("Canada", 3)