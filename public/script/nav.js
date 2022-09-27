const header = document.getElementsByTagName("header");
window.onscroll = function sticky() {
    if(window.pageYOffset > header[0].offsetTop) {
        header[0].classList.add("fixedNav");
    } else {
        header[0].classList.remove("fixedNav");
    }
}