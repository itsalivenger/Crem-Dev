const observer = new IntersectionObserver((entries)=>{
  // console.log(entries);
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
});

const hiddenEles = document.querySelectorAll('.sections');


hiddenEles.forEach((e)=> observer.observe(e));