function takeSubmit() {
    alert(`Thank you for signing up`);
}

document.getElementById('contact-form').addEventListener('click', () => {
    if (document.getElementById('contact-method-phone').checked) {
        document.getElementById('phone').style.visibility = "visible";
        document.getElementById('phone-label').style.visibility = "visible";
    } else {
        document.getElementById('phone').style.visibility = "hidden";
        document.getElementById('phone-label').style.visibility = "hidden";
    }

    if (document.getElementById('contact-method-email').checked) {
        document.getElementById('email').style.visibility = "visible";
        document.getElementById('email-label').style.visibility = "visible";
    } else {
        document.getElementById('email').style.visibility = "hidden";
        document.getElementById('email-label').style.visibility = "hidden";
    }
})