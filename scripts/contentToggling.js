const services = document.querySelectorAll('.services');
const servicesContainer = document.querySelector('.whatWeDoContentContainer');
const scrollLabel = document.querySelector('.scrollLabel');
var currentService = 0;
let toggler = false;

for (let i = 0; i < services.length; i++) {
    services[i].addEventListener('mouseover', ()=> toggleContent(services[i]));
    services[i].addEventListener('mouseout', ()=> toggleContent(services[i]));
}

const toggleContent = (ele)=>{
    const textInServices = ele.querySelector('.serviceContentTextUntoggled');
    const bg = ele.querySelector('.backgrounds');
    bg.style.filter = toggler ? "blur(0)" : "blur(8px)";
    ele.querySelector('.serviceContent').className = toggler ? 'serviceContent' : 'serviceContent toggleContent' ;
    textInServices.style.background = toggler ? '' : 'rgba(0, 0, 0, .5)';
    textInServices.className = toggler ? 'serviceContentTextUntoggled' : 'serviceContentTextUntoggled serviceContentTextToggled'
    toggler = !toggler;
}

function navigate(dir) {
    if(dir + currentService < 0){
        document.querySelector('.leftArr').style.visibility = 'hidden';
        return;
    }else if(dir + currentService > services.length - 1){
        document.querySelector('.rightArr').style.visibility = 'hidden';
        return;
    }
    document.querySelector('.rightArr').style.visibility = 'visible';
    document.querySelector('.leftArr').style.visibility = 'visible';

    currentService += dir;
    scrollLabel.innerHTML = `<h3>${currentService + 1} / 6</h3>`;
    services[currentService].scrollIntoView({behavior: "smooth"});
}