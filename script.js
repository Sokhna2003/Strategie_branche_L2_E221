document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("modal");
    const modalErrors = document.getElementById("modalErrors");
    const closeModal = document.getElementById("closeModal");

    form.addEventListener("submit", function (e) {
        let errors = [];

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (nom.length < 3) {
            errors.push("Le nom doit contenir au moins 3 caractères");
        }

        
        const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailRegex.test(email)) {
            errors.push("Email invalide");
        }

        
        if (message.length < 10) {
            errors.push("Le message doit contenir au moins 10 caractères");
        }

        if (errors.length > 0) {
            e.preventDefault();

            
            modalErrors.innerHTML = errors.join("<br>");
            modal.style.display = "block";
        } else {
            alert("Formulaire envoyé avec succès !");
        }
    });

   
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});