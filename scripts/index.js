let menu = document.querySelector('.toggle-Menu');
let lightswitch = document.querySelector('.slider');
let greg = false;
let gregor = false;


function toggle() {
    menu.className = greg ? 'toggle-Menu' : 'toggle-Menu toggle';
    greg = !greg;
}

function handleMode() {
    gregor = !gregor;
}


lightswitch.onclick = handleMode;