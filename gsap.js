let btn = document.querySelector(".login-button");
let count = 0;

btn.addEventListener("click", function () {
    if (count == 0) {
        gsap.to(".login", {
            scale: 1,
            opacity: 1,
            duration: 1.2,
        })
        count = 1;
    }
    else{
        gsap.to(".login", {
            scale: 0,
            opacity: 0,
            duration: 1,
        })
        count = 0;
    }
}
)

