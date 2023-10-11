const menu_items = document.getElementById("menu_items");
const menu_options_div = document.getElementById("menu_options_div");
const display = document.getElementById("display");


menu_items.addEventListener('click', () =>{
    if (menu_options_div.style.display == 'none') {
        menu_options_div.style.display = 'block'
        display.style.display = 'none'
    } else {
        menu_options_div.style.display = 'none'
        display.style.display = 'block'
    }
})




// const menu_toggle_button = document.getElementById("menu_toggle_button");
// const menu_options_div = document.querySelector(".menu_options_div");

// let isMenuOpen = false;

// menu_toggle_button.addEventListener('click', () => {
//     if (isMenuOpen) {
//         menu_options_div.classList.remove('max-h-[200px]');
//         menu_options_div.classList.add('max-h-0');
//     } else {
//         menu_options_div.classList.remove('max-h-0');
//         menu_options_div.classList.add('max-h-[200px]');
//     }
//     isMenuOpen = !isMenuOpen;
// });



// const menu_items = document.getElementById("menu_items");
// const menu_options_div = document.getElementById("menu_options_div");
// const menu_toggle_button = document.getElementById("menu_toggle_button");

// menu_items.addEventListener('click', () => {
//     menu_options_div.classList.toggle('max-h-0'); // Toggle the 'max-h-0' class
// });

// menu_toggle_button.addEventListener('click', () => {
//     menu_options_div.classList.toggle('max-h-0'); // Toggle the 'max-h-0' class
// });
