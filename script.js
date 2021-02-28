let ps = document.getElementById('handBaseSec');
let pm = document.getElementById('handBaseMin');
let ph = document.getElementById('handBaseHour');

setInterval(() => {
    var data = new Date();
    
    var hour = data.getHours();  
    var min = data.getMinutes();
    var sec = data.getSeconds();

    ps.style.transform = `rotate(${sec * 6}deg)`;
    pm.style.transform = `rotate(${min * 6}deg)`;
    ph.style.transform = `rotate(${(hour - 12) * 30}deg)`;
    
}, 500);
