
let btn = document.getElementById("btn");
console.log(btn);
window.onscroll = function() {
    if (scrollY >= 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scroll() {
    console.log('hello')
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}

ScrollReveal({
    reset: true,
    distance: "60px",
    duratio: 2500,
    delay: 100
});

ScrollReveal().reveal(".main");
ScrollReveal().reveal(".reveal", { delay: 400, origin: "top" });
ScrollReveal().reveal(".reveal0", { delay: 1500 });
ScrollReveal().reveal("#Contact", { delay: 100 });
ScrollReveal().reveal("#portfolio", { delay: 100 });
ScrollReveal().reveal("#projects", { delay: 300 });
ScrollReveal().reveal("#port-box", { delay: 500 });
ScrollReveal().reveal(".reveal", { delay: 500, origin: "left" });
ScrollReveal().reveal(".media li", {
    delay: 500,
    origin: "left",
    interval: 200
});
ScrollReveal().reveal(".port-box", { delay: 500 });
ScrollReveal().reveal("#box1", { delay: 200, origin: "top", interval: 130 });
ScrollReveal().reveal("#box2", { delay: 400, origin: "right", interval: 130 });
ScrollReveal().reveal("#box3", { delay: 500, origin: "left", interval: 130 });
ScrollReveal().reveal("#box4", { delay: 700, origin: "right", interval: 130 });
ScrollReveal().reveal(".tex-img img", { delay: 800, origin: "bottom", interval: 130 });
ScrollReveal().reveal(".tex-img .text h2", { delay: 400, origin: "bottom", interval: 130 });
ScrollReveal().reveal(".tex-img .text p", { delay: 600, origin: "bottom", interval: 130 });


ScrollReveal().reveal(".srv-title", { delay: 600, origin: "bottom", interval: 130 });
ScrollReveal().reveal(".image", { delay: 900, origin: "bottom", interval: 130 });





let main = document.querySelector('.main')
let logo = document.querySelector('nav')
let ul = document.querySelector('ul')
let textArea = document.querySelector('.textArea')


setTimeout(function() {
    main.style.opacity = 1
}, 300)
setTimeout(function() {
    logo.style.opacity = 1
}, 500)
setTimeout(function() {
    ul.style.opacity = 1
}, 600)
setTimeout(function() {
    textArea.style.opacity = 1
}, 700)




// payMent Section 
const products = document.querySelectorAll('.projectcard')

products.forEach(pr=>{
    pr.addEventListener('click', (e) =>{
        console.log(pr.target)
        console.log(e.target)
        window.open('file:///D:/shahba/Mu7md%20shahba/newPort/payment/payment.html', '_blank');
    
    })
    
})

