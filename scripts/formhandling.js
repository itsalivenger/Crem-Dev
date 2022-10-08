const requestUrl = 'https://cremdev.herokuapp.com/';
const contactForm = document.getElementById('contactForm');
const modalBox = document.getElementById('myModal');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');
const iconInModal = document.querySelector('.iconInModal');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    submitMail();
});


function sent() {
    const sentTemplate = document.getElementById('sentSuccessTemplate');
    sentTemplate.style.display = 'flex';
    setTimeout(() => {
        sentTemplate.style.display = 'none';
    }, 1500);
}

async function submitMail() {
    contactSubmitBtn.disabled = true;
    const [ name, email, subject, message ] = document.querySelectorAll('.mailsInfos');
    
    try {
        let req = await fetch(requestUrl, {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            }),
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            }
        });
        let res = await req.json();
        if(name == 'houbek'){
            modalBoxText('Chokraaaaaaan houbiiii; love you anaaaa o bizbizzzzzzzzz je reponds ana :3.', 'success')
        }
        if(res.msg === 'noted'){
            modalBoxText('Email was sent successefully, we will reach out to you as soon as possible.', 'success');
        }
    } catch (error) {
        modalBoxText('There was an error submiting the email, please try again later.', 'err');
    }

    modalBox.style.display = 'flex';
    modalBox.style.opacity = '1';
    clearForm( name, email, subject, message );
    contactSubmitBtn.disabled = false;

    // timer to hide the modal box after a moment of popping
    setTimeout(() => {
        modalBox.style.display = 'none';
        modalBox.style.opacity = '0';
    }, 3000);
}


function modalBoxText(text, status) {
    modalBox.querySelector('.textInModal').innerHTML = text;
    modalBox.querySelector('.modal-title').innerHTML = status == 'err' ? 'Oups!' : 'Awesome!';

    iconInModal.className = status == 'err' ? 'iconInModal fa fa-close' : 'iconInModal fa fa-check';
    iconInModal.parentElement.style.background = status == 'err' ? '#dc3545'/*red color*/ : '#0dcaf0'/*blue color*/;
}

function clearForm( name, email, subject, message ) {
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
}