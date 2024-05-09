let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#1F3533")

const message = document.getElementById('TITLE');
const local = document.getElementById('local');
function isTextInput(node) {
    return ['INPUT', 'TEXTAREA'].indexOf(node.nodeName) !== -1;
}

document.addEventListener('touchstart', function(e) {
    if (!isTextInput(e.target) && isTextInput(document.activeElement)) {
        document.activeElement.blur();
    }
}, false);
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let city = document.getElementById("city").value;
    console.log(city)
    let e = document.getElementById("type");
    let type = e.options[e.selectedIndex].text;
    console.log(type)
    let date1 = document.getElementById("date1").value;
    let date2 = document.getElementById("date2").value;
    let desc = document.getElementById("desc").value
    let count = document.getElementById("count").value
    let cost = document.getElementById("cost").value
    if (city != "" && type != "" && date2 != "" && date1 != "" && desc != "" && count != "" &&cost != ""){
        tg.sendData(city+"^"+type+"^"+date2+"^"+date1+"^"+ desc + "^" + count + "^" + cost);
    }

        
});
