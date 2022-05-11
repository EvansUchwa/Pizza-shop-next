window.addEventListener('scroll', () => {
    if(document.querySelector('nav')){
        if (window.scrollY > 100) {
        document.querySelector('.navDash').classList.add("navDashOnScroll")
    } else {
        document.querySelector('.navDash').classList.remove("navDashOnScroll")

    }
    }
})