let position = 0; 
function blockAnimation() {
    position = position + 5;
    if (position > 100) return;
    document.querySelector('.block').getElementsByClassName.left = position + 'px'
    Animation();
}

function Animation() {
    setTimeout(blockAnimation, 150);
}

Animation();