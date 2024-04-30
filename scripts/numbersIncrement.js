let numbers = document.getElementsByClassName('numberOfAttr');
const values = [60, 150, 40, 500];
var time = 100;
for (let i = 0; i < numbers.length; i++) {
    increment(numbers[i], i);
}

function increment(elem, i) {
    let timeout = setTimeout(()=>{
        elem.innerText = parseInt(elem.innerText) + 1;
        if(parseInt(elem.innerText) >= values[i] * .75){
            time += time > 600 ? -time / 2 : time * 6 / 5;
        }else{
            time = 50;
        }
        if(parseInt(elem.innerText) >= values[i]){
            clearTimeout(timeout);
            return;
        }
        increment(elem, i);
    }, time);
}