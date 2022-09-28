
const contactForm = document.getElementById('contactForm');
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
    const [ name, email, subject, message ] = document.querySelectorAll('.mailsInfos');
    console.log('first')
    let req = await fetch('https://cremdev.herokuapp.com/', {
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
    console.log(res.msg);
}