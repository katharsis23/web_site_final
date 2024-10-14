document.querySelectorAll(".arrow_button").forEach((button, index) => {
    button.addEventListener("mouseenter", function() {
        const hiddenText = document.querySelectorAll(".hidden_text")[index];
        
        button.style.transform = "rotate(90deg)"; 
        hiddenText.classList.remove("hidden");
        hiddenText.classList.add("visible"); 
    });

    button.addEventListener("mouseleave", function() {
        const hiddenText = document.querySelectorAll(".hidden_text")[index];
        
        button.style.transform = "rotate(0deg)"; 
        hiddenText.classList.remove("visible");
        hiddenText.classList.add("hidden"); 
    });
});
