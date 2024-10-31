document.addEventListener("DOMContentLoaded", function() {
    const profileIcon = document.getElementById("profile-icon");
    const dropdown = document.getElementById("dropdown");

    profileIcon.addEventListener("click", function(event) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        event.stopPropagation(); 
    });

    // close it if clicked outside
    document.addEventListener("click", function(event) {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});