const currentPlanHTML = document.getElementById('currentPlan');
const plans = document.querySelectorAll('.plansMob');
let currentPlan = 2;

function paginatePlans(param) {
    if(currentPlan + param < 1 || currentPlan + param > 3) return;

    currentPlanHTML.innerHTML = currentPlan + param;
    currentPlan += param;
    for (let i = 0; i < plans.length; i++) {
        plans[i].style.translate = -(currentPlan - 2) * 100 + '%';
        plans[i].style.transform = "scale(0.9)";
    }
    plans[currentPlan - 1].style.transform = 'scale(1)';
}