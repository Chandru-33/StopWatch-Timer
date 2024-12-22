const minuteslabel=document.getElementById('minutes');
const secondslabel=document.getElementById('seconds');
const millisecondslabel=document.getElementById('milliseconds');

const startbutton=document.getElementById('startbtn');
const stopbutton=document.getElementById('stopbtn');
const pausebutton=document.getElementById('pausebtn');
const resetbutton=document.getElementById('resetbtn');

const laplist=document.getElementById('laplist');

let minutes=0;
let seconds=0;
let milliseconds=0;
let interval;

startbutton.addEventListener('click',starttimer);
pausebutton.addEventListener('click',pausetimer);
stopbutton.addEventListener('click',stoptimer);
resetbutton.addEventListener('click',resettimer);

function starttimer(){
    interval=setInterval(updatetimer,10);
    startbutton.disabled=true;


}
function stoptimer(){
    clearInterval(interval);
    addtolist();
    resettimer();
    startbutton.disabled=false;

}
function pausetimer(){
    clearInterval(interval);
    startbutton.disabled=false;
}
function resettimer(){
    clearInterval(interval);
    resettimerdata();
    startbutton.disabled=false;

}
function updatetimer(){
    milliseconds++;
    if (milliseconds===100){
        seconds++;
        milliseconds=0;
        if (seconds===60){
            minutes++;
            seconds=0;
        }
    }
    displaytimer();
}
function displaytimer(){
    minuteslabel.textContent=padtimer(minutes);
    secondslabel.textContent=padtimer(seconds);
    millisecondslabel.textContent=padtimer(milliseconds);
}
function padtimer(time){
    return time.toString().padStart(2,'0');
}
function resettimerdata(){
    minutes=0;
    seconds=0;
    milliseconds=0;
    displaytimer();
}
function addtolist(){
    const laptime=`${padtimer(minutes)}:${padtimer(seconds)}:${padtimer(milliseconds)}`;
    const listItem=document.createElement('li');
    listItem.innerHTML=`<span> Lap ${laplist.childElementCount +1}:</span> ${laptime} `;
    laplist.append(listItem);
}