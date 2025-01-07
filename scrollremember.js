// Save scroll position before unloading the page
window.addEventListener("beforeunload", function() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
});

// Restore scroll position on load
window.addEventListener("load", function() {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
        sessionStorage.removeItem("scrollPosition"); // Optional: Clear after use
    }
});
window.addEventListener("beforeunload", function() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    console.log("Saved Scroll Position:", window.scrollY);
});

