const horizontalDiv = document.getElementById('horizontalScroll');

// function transformScroll(event) {
//     console.log(event)
//     if (!event.deltaY) {
//       return;
//     }
//     console.log(horizontalDiv.scrollWidth, event.screenY)
//     horizontalDiv.scrollBy(event.deltaY + event.deltaX, 0);
//     // event.preventDefault();
//   }
  
//   var element = document.scrollingElement || document.documentElement;
//   element.addEventListener('wheel', transformScroll);