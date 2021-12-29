let menu_button = document.getElementById("menu_button")
let menu_items_block = document.getElementById("menu_items_block")
let isClicked = false

function startanim() {
    if (isClicked) {
        menu_items_block.style.transform="rotatez(-90deg)";
        isClicked = !isClicked
    } else {
        menu_items_block.style.transform="rotatez(0deg)";
        isClicked = !isClicked
    }
    
}

menu_button.addEventListener("click", startanim)