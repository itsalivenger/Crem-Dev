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
  cards[i].addEventListener('mouseover', (e)=>{
    resetGrids();
    e.target.style.gridArea = 'content';
  });
}

function resetGrids() {
  let area = ['a', 'b', "c", "d", 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'content', 'content', 'content', 'content'];
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.gridArea = area[i];
    cards[i].style.animation = 'showAnimation';
  }
}