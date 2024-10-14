document.querySelectorAll(".arrow_button").forEach((button, index) => {
    button.addEventListener("click", function() {
        const hiddenText = document.querySelectorAll(".hidden_text")[index];
        
        
        if (button.style.transform === "rotate(90deg)") {
            button.style.transform = "rotate(0deg)"; 
            hiddenText.classList.remove("visible");
            hiddenText.classList.add("hidden"); 
        } else {
            button.style.transform = "rotate(90deg)"; 
            hiddenText.classList.remove("hidden");
            hiddenText.classList.add("visible"); 
        }
    });
});
