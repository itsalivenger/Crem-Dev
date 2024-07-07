let numbers = document.getElementsByClassName('numberOfAttr');
document.addEventListener("DOMContentLoaded", function() {
    // Target numbers
    const targets = {
      projects: 60,
      hours: 150,
      specialists: 40,
      customers: 246
    };
  
    // Current numbers (starting at 0)
    const current = {
      projects: 0,
      hours: 0,
      specialists: 0,
      customers: 0
    };
  
    // HTML elements
    const elements = {
      projects: numbers[0],
      hours: numbers[1],
      specialists: numbers[2],
      customers: numbers[3]
    };
  
    // Update interval (milliseconds)
    const interval = 50;
  
    function updateNumbers() {
      let done = true;
  
      for (let key in targets) {
        if (current[key] < targets[key]) {
          done = false;
          let diff = targets[key] - current[key];
          current[key] += Math.ceil(diff / 10); // Inverse quadratic increment
          if (current[key] > targets[key]) {
            current[key] = targets[key];
          }
          elements[key].innerText = current[key];
        }
      }
  
      if (!done) {
        setTimeout(updateNumbers, interval);
      }
    }
  
    // Initial call
    updateNumbers();
  });
  