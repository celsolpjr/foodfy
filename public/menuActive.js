const recipes = document.querySelector(".menu-admin-recipes");
const chefs = document.querySelector(".menu-admin-chefs");

if (window.location.href.includes("recipes")) {

    recipes.classList.add("active");

} else {
    chefs.classList.add("active");
}