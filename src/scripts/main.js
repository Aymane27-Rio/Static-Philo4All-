function openSchool(evt, schoolName) {
    // Tab functionality
    const tabContents = document.getElementsByClassName("tab-content");
    const tabButtons = document.getElementsByClassName("tab-button");
    
    // Hide all tab content
    Array.from(tabContents).forEach(content => {
        content.classList.remove("active");
    });
    
    // Remove active class from buttons
    Array.from(tabButtons).forEach(button => {
        button.classList.remove("active");
    });
    
    // Show selected tab
    document.getElementById(schoolName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Initialize first tab as active
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab-button').click();
});