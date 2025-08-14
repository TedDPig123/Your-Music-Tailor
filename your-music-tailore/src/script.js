
function hideMenu(){
    const menu = document.querySelector(".dropdown-content");
    menu.classList.add("hidden");
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById("genre-dropdown");

    if (!menu.contains(event.target)) {
        hideMenu();
                    console.log('Clicked outside the container!');

    }
});

