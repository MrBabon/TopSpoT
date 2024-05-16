document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        
        // Valider le formulaire avant d'envoyer
        if (!validateForm()) {
            return;
        }

        var postdata = new FormData(this);
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/php/contact.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    try {
                        var result = JSON.parse(xhr.responseText);
                        handleFormResponse(result);
                    } catch (e) {
                        console.error("Could not parse JSON response: " + e.message);
                    }
                } else {
                    console.error("Erreur de requête : " + xhr.status);
                }
            }
        };
        xhr.send(postdata);
    });
});
function validateForm() {              
    var email = document.forms["Topspot"]["email"];    
    var company =  document.forms["Topspot"]["company"];  
    var message =  document.forms["Topspot"]["message"];  
  
 
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    if (!isValidEmail(email.value)) {
        alert("Enter a valid email address.");
        email.focus();
        return false;
    } 
    if (company.value == "")                  
    { 
        alert("Put on your company."); 
        company.focus(); 
        return false; 
    } 
    if (message.value == "")                  
    { 
        alert("Write a comment."); 
        message.focus(); 
        return false; 
    } 
    return true; 
}

function clearComments() {
    var formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    formInputs.forEach(function (input) {
        if ((input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') && input.type !== 'submit') {
            // Efface la valeur de l'input
            input.value = '';  
        }
    });
}

function handleFormResponse(result) {
    var errors = ["firstname", "lastname", "email", "message", "company"];

    errors.forEach(function (field) {
        var errorElement = document.getElementById(field + 'Error');
        if (errorElement) {
            errorElement.innerHTML = result[field + 'Error'] || '';
        }
    });

    if (result.isSuccess) {
        clearComments();
        document.getElementById('overlay').classList.add('flex');
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('modal').classList.add('grid');
        document.getElementById('modal').classList.remove('hidden');
    }
}


function closeModal() {
    document.getElementById('overlay').classList.remove("flex");
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('modal').classList.remove("grid");
    document.getElementById('modal').classList.add('hidden');
}