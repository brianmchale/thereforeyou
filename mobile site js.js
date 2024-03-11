document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.getElementsByClassName("accordion");

    Array.from(accordions).forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});
