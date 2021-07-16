const headerTag = document.querySelector("header")

// when we scroll the page and reach a certain point
// toggle a class to header

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    if (pixels > 80) {
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
})