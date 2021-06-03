const cardsIndex = document.querySelectorAll(".link-index");

for (let i = 0; i <= cardsIndex.length; i++) {
    cardsIndex[i].addEventListener("click", function() {
        
        window.location = `/admin/recipes/${i}`;
        
    })
}
