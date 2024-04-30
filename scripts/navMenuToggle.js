let menu = document.querySelector('.toggle-Menu');
let greg = false;


function toggle() {
    menu.className = greg ? 'toggle-Menu' : 'toggle-Menu toggle';
    greg = !greg;
}