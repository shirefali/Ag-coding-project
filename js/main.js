let progressSec = document.querySelector(".progress-section");
let progs = document.querySelectorAll(".progress-bar");
let counterSec = document.querySelector(".counter-sec");
let counterNums = document.querySelectorAll(".counter-sec h3");
let lis = document.querySelectorAll(".list-buttons li");
let imgs = document.querySelectorAll(".filterd-imgs a");
let scrollTopBtn = document.querySelector(".scroll-top-btn");


// lis.forEach((li) => {
//     li.addEventListener("click", function () {
//         lis.forEach((li) => {
//             li.classList.remove("active");
//         });
//         this.classList.add("active");
//         imgs.forEach((img) => {
//             img.style.visibility = "hidden";
//         });
//         document.querySelectorAll(this.dataset.filter).forEach((img) => {
//             img.style.visibility = "visible";
//         });
//     });
// });

lis.forEach((li) => {
    li.addEventListener("click", () => {
        // document.querySelector(".list-buttons li.active").classList.remove("active");
        // li.classList.add("active");
        // console.log(li.dataset.filter);
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");
        imgs.forEach((img) => {
            if (img.classList.contains(li.dataset.filter)) {
                img.classList.remove("hide");
                img.classList.add("show");
            } else {
                img.classList.remove("show");
                img.classList.add("hide");
            }
        })
    })
})


window.onscroll = function () {
    // progress section
    if (window.scrollY >= progressSec.offsetTop - 500) {
        progs.forEach((prog) => {
            let valueNow = prog.parentElement.getAttribute("aria-valuenow");
            prog.style.width = valueNow + '%';
            let counterSpan = prog.parentElement.parentElement.querySelector(".num");
            let timer = setInterval(() => {
                if (Number(counterSpan.textContent) < valueNow) {
                    counterSpan.textContent++;
                } else {
                    clearInterval(timer);
                }
            }, 500);
        });
    } else if (window.scrollY < progressSec.offsetTop - 900) {
        progs.forEach((prog) => {
            prog.style.width = 0 + '%';
            prog.parentElement.parentElement.querySelector(".num").textContent = "0";
        });
    }
    //counter section
    if (window.scrollY >= counterSec.offsetTop - 500) {
        counterNums.forEach((number) => {
            let increaseCounter = setInterval(() => {
                if (Number(number.textContent) < number.dataset.counter) {
                    number.textContent = Number(number.textContent) + 1;
                } else {
                    clearInterval(increaseCounter);
                }
            }, 500);
            // console.log(Number(number.textContent));
            // console.log(Number(number.dataset.counter));
        })
    } else if (window.scrollY < counterSec.offsetTop - 800) {
        counterNums.forEach((number) => {
            number.textContent = "0";
        })
    }
    if (window.scrollY >= 500) {
        scrollTopBtn.style.opacity = "1";
    } else {
        scrollTopBtn.style.opacity = "0";
    }
}

scrollTopBtn.onclick = function () {
    window.scrollTo({
        top: "0",
    })
}

lightGallery(document.getElementById('lightgallery'), {

});

AOS.init();
