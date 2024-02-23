if (window.location.pathname.startsWith("/overlay")) {
    if (window.location.pathname === "/overlay/alert") {
        document.getElementById("overlay").style.display = "flex";
    }
}

else {
    document.getElementById("default").style.display = "flex";
}

setTimeout(() => {
    window.location.reload();
}, 10 * 1000);
