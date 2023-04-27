
const toggletheme = document.getElementById("checkbox-header");
const html = document.getElementById("html");


console.log(toggletheme.checked)

toggletheme.addEventListener("change",togglethemeHandler)

function togglethemeHandler() {
    if(toggletheme.checked){
        html.dataset.theme = "dark";
    }else {
        html.dataset.theme = "light"; 
    };
}