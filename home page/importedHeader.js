import navbar from "./header.js";
let navbarDiv = document.getElementById("header");
navbarDiv.innerHTML = navbar();


import footer from "./footer.js";
let footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footer();

document.getElementById("get-mail").addEventListener("click", overlaymsg);
const newsletter_emails = [];

function overlaymsg(e) {
    e.preventDefault();
    let mail = document.querySelector(".newsletter-mail-input").value;
    console.log(mail);
    if (mail.trim() == "") {
        alert("Please do not leave the field blank");
        return 0;
    } else {
        newsletter_emails.push(mail);
        localStorage.setItem('newsletter-list', JSON.stringify(newsletter_emails));
        document.getElementById("success-msg").innerText = null;
        document.getElementById("success-msg").innerText = `Get ready to uncork a world of wine-derful experiences with our subscription!🍷🥳 `;
        document.getElementById("mail-submission-success-overlay").style.display = "block";
    }
    mail.value = '';
}

document.getElementById("hide-overlay").addEventListener("click", overlayMsgHide);
function overlayMsgHide() {
    document.querySelector(".newsletter-mail-input").value = '';
    document.getElementById("mail-submission-success-overlay").style.display = "none";   
}