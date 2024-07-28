window.addEventListener("load", function(){
    const date = this.document.getElementById("testP");
    date.innerHTML += ` ${new Date().toLocaleDateString()}`;
});