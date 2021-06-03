const view1 = document.querySelector(".view-1");
const view2 = document.querySelector(".view-2");
const view3 = document.querySelector(".view-3");

view1.addEventListener("click", function() {
    const content1 = document.querySelector(".content-1");
    
    if (!content1.classList.contains("active")) {
        content1.classList.add("active");
        view1.innerHTML = "mostrar";
    } else {
        content1.classList.remove("active");
        view1.innerHTML = "esconder";
    }
})

view2.addEventListener("click", function() {
    const content2 = document.querySelector(".content-2");
    
    if (!content2.classList.contains("active")) {
        content2.classList.add("active");
        view2.innerHTML = "mostrar";
    } else {
        content2.classList.remove("active");
        view2.innerHTML = "esconder";
    }
})

view3.addEventListener("click", function() {
    const content3 = document.querySelector(".content-3");
    
    if (!content3.classList.contains("active")) {
        content3.classList.add("active");
        view3.innerHTML = "mostrar";
    } else {
        content3.classList.remove("active");
        view3.innerHTML = "esconder";
    }
})