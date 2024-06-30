function toggleStyleSheet(){
    const link = document.getElementById("css");
    if(link.getAttribute("href") == "style.css")
    {
        link.setAttribute("href", "style_two.css");
        localStorage.setItem("css", "style_two.css");
    }
    else
    {
        link.setAttribute("href", "style.css");
        localStorage.setItem("css", "style.css");
    }
}

window.onload = function(){
    const css = localStorage.getItem("css");
    if(css != null){
        document.getElementById("css").setAttribute("href", localStorage.getItem("css"));
    }
}