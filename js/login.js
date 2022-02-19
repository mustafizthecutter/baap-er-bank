document.getElementById('login-submit').addEventListener('click', function () {
    // get user gmail
    const gmailInput = document.getElementById('gmail-input');
    const userGmail = gmailInput.value;
    // get user password
    const passInput = document.getElementById('password-input');
    const userPass = passInput.value;
    if (userGmail == "mustafiz232@gmail.com" && userPass == 'chiku') {
        console.log('clicked');
        window.location.href = 'banking.html';

    }
})