export function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let zone = '';
    if (hh > 6) {
        if(hh < 18){
            zone = 'dia';
        }else{
            zone = 'noche';
        }
    } else{
        zone = 'noche';
    }

    let time = hh + ":" + mm + ":" + ss + " " + zone;
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;
}
setInterval(currentTime, 1000);