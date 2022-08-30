// Burger menu
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu__list");
const body = document.body;
const links = Array.from(menu.children);


hamb.addEventListener("click", hambHandler);
links.forEach((link) => {
    link.addEventListener("click", closeOnClick)
})

function hambHandler (e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

function renderPopup() {
    popup.appendChild(menu);
}


// Validation
const form = document.getElementsByTagName('form')[0];

const name = document.querySelector(".form_name");
const email = document.querySelector(".form_email");
const subject = document.querySelector(".form_subject");
const phone = document.querySelector(".form_phone");
const textarea = document.querySelector(".email");

const emailError = document.querySelector(".error_email");
const nameError = document.querySelector(".error_name");
const subjectError = document.querySelector(".error_subject");
const phoneError = document.querySelector(".error_phone");


const modal = document.querySelector(".modal");
const btn = document.querySelector(".myBtn");
const checkbox = document.getElementById("checkbox");


email.addEventListener("input", function(e) {
    if(email.validity.valid) {
        //emailError.textContent = "";
        emailError.style.display = "none"
        emailError.className = "error";
    } else {
        showError.showErrorEmail();
    }
});

name.addEventListener("input", function(e) {
    if(name.validity.valid) {
        nameError.style.display = "none"
        nameError.className = "error";
    } else {
        showError.showErrorName();
    }
});

subject.addEventListener("input", function(e) {
    if(subject.validity.valid) {
        subjectError.style.display = "none"
        subjectError.className = "error";
    } else {
        showError.showErrorSubject();
    }
});

phone.addEventListener("input", function(e) {
    if(phone.validity.valid) {
        phoneError.style.display = "none"
        phoneError.className = "error";
    } else {
        showError.showErrorPhone();
    }
})


form.addEventListener("submit", function(e) {
    e.preventDefault();
    

    if(!email.validity.valid) {
        showError.showErrorEmail();
        e.preventDefault()
    }

    if(!name.validity.valid) {
        showError.showErrorName();
        e.preventDefault()
    }

    if(!subject.validity.valid) {
        showError.showErrorSubject();
        e.preventDefault()
    }

    if(!phone.validity.valid) {
        showError.showErrorPhone();
        e.preventDefault()
    }


    
})

// Modal window
btn.addEventListener("click", function(e) {
    e.preventDefault();
    if(email.validity.valid && name.validity.valid && subject.validity.valid && phone.validity.valid && checkbox.checked) {        
        modal.style.display = 'block'; 
        body.classList.toggle("noscroll");
    }
    
   // body.style.overflow = "hidden";

    
});
window.addEventListener("click", function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';

        email.value = "";
        name.value = "";
        subject.value = "";
        phone.value = "";
        textarea.value = "";
        checkbox.checked = false;

        body.classList.remove("noscroll");
    //body.style.overflow = "visible";
    }
    //

}, false)







let showError = {
    showErrorEmail: function () {
        if(email.validity.valueMissing) {
            emailError.textContent = "u need to enter an e-mail.";
        } else if (email.validity.typeMismatch) {
            emailError.textContent = "Entered value needs to be an e-mail address";
        } else if (email.validity.tooShort) {
            emailError.textContent = `Email should be at least ${email.minLength} character;
            you entered ${email.value.length}`;
        }
        emailError.className = "error active";
    },

    showErrorName: function () {
        if(name.validity.valueMissing) {
            nameError.textContent = "u need to enter your name.";
        } else if (name.validity.tooShort) {
            nameError.textContent = `Name should be at least ${name.minLength} character;
            you entered ${name.value.length}`;
        }
        nameError.className = "error active";
    },

    showErrorSubject: function () {
        if(subject.validity.valueMissing) {
            subjectError.textContent = "u need to enter a subject.";
        }
        subjectError.className = "error active";
    },

    showErrorPhone: function () {
        if(phone.validity.valueMissing) {
            phoneError.textContent = "u need to enter a phone number.";
        } else if (phone.validity.typeMismatch) {
            phoneError.textContent = "Entered value needs to be a phone number";
        } else if (phone.validity.tooShort) {
            phoneError.textContent = `Email should be at least ${phone.minLength} character;
            you entered ${phone.value.length}`;
        }
        phoneError.className = "error active";
    },
}



// scrolling while click to ContactUs
const menuLinks = document.querySelectorAll('.link_contact[data-goto]')

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", function(e) {
                const menuLink = e.target;
                if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + 
                    pageYOffset; 

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth"
                    });
                    e.preventDefault();
                }
            })
    })
}