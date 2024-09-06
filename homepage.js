
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; 
        header.style.padding = '0px'; 
    } 
    else {
        header.style.backgroundColor = 'transparent'; 
        header.style.padding = '35px 7%'; 
    }
});

document.querySelector(".navlist a[href='#exercises-section']").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#exercises-section").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".navlist a[href='#live-competitions']").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#live-competitions").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".navlist a[href='#services']").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".navlist a[href='#demo-certificate']").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#demo-certificate").scrollIntoView({
        behavior: "smooth"
    });
});



document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 600);
    });
});
