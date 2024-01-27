let containerName = document.querySelector('.section-1 .container_name')
let banyan = document.querySelector('.section-1  .banyan_tree')
let bigBushes = document.querySelector('.section-1  .big_bushes')
let birds = document.querySelector('.section-1 .birds_on_tree')
let lastScrollTop = 0;


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    var lebarLayar = window.innerWidth;

    containerName.style.marginTop = value * 2.5 + "px";
    containerName.style.zIndex = 2;

    banyan.style.left = `-${value * 1.5}px`
    birds.style.display = `none`
    bigBushes.style.right = `-${value * 1.5}px`

    console.log(lebarLayar);

    if (value < lastScrollTop) {
        containerName.style.zIndex = 10;
        birds.style.display = `block`  
    }

    lastScrollTop = value
});