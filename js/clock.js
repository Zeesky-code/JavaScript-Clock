let user = prompt("Enter your name");
let nametag = document.getElementById("myName")
nametag.innerHTML = user;

function showTime() {
    let date = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = document.querySelector('#myClock')
    
    time.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getUTCDay()]}`
    setTimeout(showTime, 1000);
}
    