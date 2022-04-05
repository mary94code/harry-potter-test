let shoesPrints = document.querySelector('.fa-shoe-prints');
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const partLeft = document.querySelector(".part-1");
const partRight = document.querySelector(".part-2");
const onMouseMove = (e) => {
    shoesPrints.style.left = e.pageX + 10 + 'px';
    shoesPrints.style.top = e.pageY + -7 + 'px';
}
document.addEventListener('mousemove', onMouseMove);

btnOpen.addEventListener("click", function (e) {
partLeft.classList.add("active-left");
partRight.classList.add("active-right");
partLeft.classList.add("active-open-btn-mbl");
})

btnClose.addEventListener("click", function(e){
    partLeft.classList.remove("active-left");
    partRight.classList.remove("active-right");
})