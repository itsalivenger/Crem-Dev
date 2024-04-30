const observer = new IntersectionObserver((entries)=>{
  // console.log(entries);
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      // to start the animation just once for the cards in gallery
      if(entry.target.className.includes('gallery')){
        for (let i = 0; i < cards.length; i++) {
          cards[i].className = 'projectCard';
        }
        return;
      }
      ///////////////////////////////////
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
});

const hiddenEles = document.querySelectorAll('.sections');
const cards = document.querySelector('.gallery').children;


hiddenEles.forEach((e)=> observer.observe(e));


for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', (e)=>{
    if(document.getElementById("cloned")){
      if(document.getElementById("cloned").className.includes(i)){
        return;
      }
    }
    document.getElementById('cloned') ? document.getElementById('cloned').remove() : 0;
    let clonedContent = e.target.parentElement.className == 'projectCard' 
    ? e.target.parentElement.cloneNode(true) : e.target.cloneNode(true);
    clonedContent.id = 'cloned';
    document.querySelector('.gallery').appendChild(clonedContent);
    clonedContent.style.gridArea = 'content';
    clonedContent.className = clonedContent.className + ' ' + i;
  });
}

function scrollToContent(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  toggle();
}

document.querySelector('.circulaire').addEventListener('click', (e)=>{
  document.getElementById('home').scrollIntoView({behavior: 'smooth'});
})