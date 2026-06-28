const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }else{
            answer.style.display = "block";
        }
    });
});

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const reveals =
document.querySelectorAll(".reveal");

function revealElements(){

    reveals.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Message submitted successfully!"
    );

    this.reset();
});