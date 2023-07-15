window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        myFunction();
    }
}

window.onbeforeunload=function() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}