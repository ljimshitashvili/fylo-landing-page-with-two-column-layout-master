const email = document.querySelector("#email");
const example = document.querySelector("#example");
const submit = document.querySelector("#submit");
const free = document.querySelector("#free");
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");
const valid = document.querySelector(".green");
const invalid = document.querySelector(".red");



let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function testEmail(input){

    if(mailRegex.test(input.value)){
        input.classList.add('correct');
        input.classList.remove('incorrect');
        input.nextElementSibling.style.display = "block";
        input.nextElementSibling.nextElementSibling.style.display = "none";
    }else{
        input.classList.add('incorrect');
        input.classList.remove('correct');
        input.nextElementSibling.style.display = "none";
        input.nextElementSibling.nextElementSibling.style.display = "block";
    }
}

submit.addEventListener("click", () => {
    testEmail(email);
});

free.addEventListener("click", () => {
    testEmail(example);
});