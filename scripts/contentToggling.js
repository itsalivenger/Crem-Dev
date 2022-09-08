const services = document.querySelectorAll('.services');
const servicesContainer = document.querySelector('.whatWeDoContentContainer');
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






servicesContainer.addEventListener('scroll', (eve)=>{
    console.log(eve)
})
var scrollLeft, scrollTop;
servicesContainer.addEventListener('scroll', function (event) {
    alert('scrolled')
    if (scrollLeft !== element.scrollLeft) {
        // horizontally scrolled

        scrollLeft = element.scrollLeft;
    }

    if (scrollTop !== element.scrollTop) {
        // vertically scrolled

        scrollTop = element.scrollTop;
    }
});