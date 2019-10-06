function appendMailTo() {
    let message = document.getElementById ("mailMessage").value;
    let subject = document.getElementById ("mailMessage").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");
    mailToAttr.setAttribute ("href", "mailto:iel_arvill@yahoo.com?subject="+subject+"&body="+message);
}

let date = new Date()
let yearPos = document.getElementById("getYear");
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;