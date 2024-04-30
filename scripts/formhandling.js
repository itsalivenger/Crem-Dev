const requestUrl = 'https://crem-server.vercel.app/';
const forms = document.querySelectorAll('form');
const modalBox = document.getElementById('myModal');
const iconInModal = document.querySelector('.iconInModal');
const submitBtns = document.querySelectorAll('.submitBtn');

// form submission event listener
for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', (e)=>{
        e.preventDefault();
        submitMail(i ? 'newsletter' : 'contactForm', 'POST');
    })    
}


function sent() {
    const sentTemplate = document.getElementById('sentSuccessTemplate');
    sentTemplate.style.display = 'flex';
    setTimeout(() => {
        sentTemplate.style.display = 'none';
    }, 1500);
}

async function submitMail(purpose, method) {
    // disable buttons after one submission
    handleBtnState(true);

    
    let requestParams = {method};
    if(purpose === 'contactForm'){
        var [ name, email, PhoneNumber, subject, message ] = document.querySelectorAll('.mailsInfos');
        
        requestParams.body = JSON.stringify({
            name: name.value,
            email: email.value,
            phoneNum: PhoneNumber.value,
            subject: subject.value,
            message: message.value
        })
    }else if(purpose === 'newsletter'){
        var email = document.getElementById('emailNewsLetter');
        requestParams.body = JSON.stringify({email})
    }
    
    if(method == 'POST'){
        requestParams.credentials = 'include',
        requestParams.headers = {
            'Content-type': 'application/json'
        }
    }

    try {
        let req = await fetch(requestUrl, requestParams);
        let res = await req.json();
        if(name.value == 'houbek'){
            modalBoxText('Chokraaaaaaan houbiiii; love you anaaaa o bizbizzzzzzzzz je reponds ana :3.', 'success')
        }
        if(name.value != "houbek"){
            modalBoxText('Email was sent successefully, we will reach out to you as soon as possible.', 'success');
        }
    } catch (error) {
        modalBoxText('There was an error submiting the email, please try again later.', 'err');
        console.log(error);
    }

    // display of the modal box after the submission
    handleModalBoxDisplay('show');
    // clearing the form
    clearForms();

    
    //make buttons enabled again
    handleBtnState(false);

    // timer to hide the modal box after a moment of popping
    setTimeout(() => {handleModalBoxDisplay('nothing')}, 3000);
}


function modalBoxText(text, status) {
    modalBox.querySelector('.textInModal').innerHTML = text;
    modalBox.querySelector('.modal-title').innerHTML = status == 'err' ? 'Oups!' : 'Awesome!';

    iconInModal.className = status == 'err' ? 'iconInModal fa fa-close' : 'iconInModal fa fa-check';
    iconInModal.parentElement.style.background = status == 'err' ? '#dc3545'/*red color*/ : '#0dcaf0'/*blue color*/;
}

function clearForms() {
    let inputs = document.querySelectorAll('input');
    let textareas = document.querySelectorAll('textarea');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        if(i < textareas.length){
            textareas[i].value = '';
        }
    }
}

function handleModalBoxDisplay(display) {
    modalBox.style.display = display == 'show' ? 'flex' : 'none';
    modalBox.style.opacity = display == 'show' ? '1' : '0';
}


function handleBtnState(state) {
    for (let i = 0; i < submitBtns.length; i++) {
        submitBtns[i].disabled = state;
    }
}