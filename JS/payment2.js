document.querySelector("form").addEventListener("submit", payment);

var hardCodeCardNum = "000 111 222 333";
var hardCodeCVV = "123";

function payment(event) {
    event.preventDefault();

    let cardNum = document.getElementById("card-number").value;
    let cvv = document.getElementById("card-password").value;
    let exp_date = document.getElementById("card-expiry").value;

    if (hardCodeCardNum !== cardNum || hardCodeCVV !== cvv) {
        alert("Invalid card number or CVV");
    } else if (new Date(exp_date) < new Date()) {
        alert("Your card has expired");
    } else {
        var otp = prompt("Please enter OTP: ");
        if (otp === "1234") {
            window.location.href = "thankyou.html";
            alert("Payment is successful");
        } else {
            alert("Wrong OTP");
        }
    }
}
