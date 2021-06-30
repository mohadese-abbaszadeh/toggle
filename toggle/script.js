let switchBtn = document.querySelector(".switchBtn");
let container = document.querySelector(".container");
let threadEnd = document.querySelector(".threadEnd");

switchBtn.addEventListener("click", () => container.classList.toggle("on"));

threadEnd.addEventListener("click", () => {
    if(switchBtn.checked) {
        switchBtn.checked = false;
        container.classList.toggle("on");
    } else {
        switchBtn.checked = true;
        container.classList.toggle("on");
    }
})