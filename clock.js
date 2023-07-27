function updateClock() {
    var now = new Date();
    var h = now.getHours().toString().padStart(2, '0');

    var m = now.getMinutes().toString().padStart(2, '0');
    var s = now.getSeconds().toString().padStart(2, '0');
    var format = "AM"

    if (h > 12 && h < 24) {
        format = "PM";
    }
    var timeString = `${h}:${m}:${s}  ${format}`;
    document.getElementById('clock').textContent = timeString;
    setInterval(updateClock, 1000);
    
}
updateClock();
// var ranchange = document.getElementById("rk");
// random = ["20200715_182452.jpg", "20200716_102811.jpg", "IMG-20150709-WA0000.jpg", "IMG-20160927-WA0001.jpg", "ful.jpg"];
// let no = Math.floor(Math.random() * random.length);
// window.onload = function () {
//     ranchange.style.backgroundImage = 'url(' + random[no] + ')';
// }

