
const toggletheme = document.getElementById("checkbox-header");
const html = document.getElementById("html");


console.log(toggletheme.checked)

toggletheme.addEventListener("change",togglethemeHandler)
// html.dataset.theme = "theme";
function togglethemeHandler() {
    if(toggletheme.checked){
        html.dataset.theme = "dark";
        localStorage.setItem('theme', 'dark');
    }else {
        html.dataset.theme = "light"; 
        localStorage.setItem('theme', 'light');
    };
}

const theme = localStorage.getItem('theme');
if(theme == 'light' || !theme){
    html.dataset.theme = "light";
}else{
    html.dataset.theme = "dark";
    document.getElementById("checkbox-header").checked = true;
}
