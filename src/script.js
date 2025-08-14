
function hideMenu(){
    const menu = document.querySelector(".dropdown-content");
    menu.classList.add("hidden");
}

function hideEmotions(){
    const menu = document.querySelector(".emotions-content");
    menu.classList.add("hidden");
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById("genre-dropdown");
    const emotionsMenu = document.getElementById("emotions-dropdown");

    if (!menu.contains(event.target)) {
        hideMenu();
    }

    if (!emotionsMenu.contains(event.target)) {
        hideEmotions();
    }


});

