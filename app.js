const observerHorizontal = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show-horizontal");
        } else {
            //entry.target.classList.remove("show-horizontal");
        }
    });
}));

const hiddenElements = document.querySelectorAll(".hidden-horizontal");
hiddenElements.forEach((el) => observerHorizontal.observe(el));

const observerVerticalTop = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show-vertical-top");
        } else {
            //entry.target.classList.remove("show-vertical-top");
        }
    });
}));

const hiddenVerticalTop = document.querySelectorAll(".hidden-vertical-top");
hiddenVerticalTop.forEach((el) => observerVerticalTop.observe(el));

const observerVerticalBottom = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show-vertical-bottom");
        } else {
            //entry.target.classList.remove("show-vertical-bottom");
        }
    });
}));

const hiddenVerticalBottom = document.querySelectorAll(".hidden-vertical-bottom");
hiddenVerticalBottom.forEach((el) => observerVerticalBottom.observe(el));

