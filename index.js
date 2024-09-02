const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const coountLabel = document.getElementById('countLabel');

let count = 0;

increaseBtn.onclick = function(){
    count++;
    coountLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    coountLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    coountLabel.textContent = count;
}