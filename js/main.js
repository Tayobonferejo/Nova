

const faqbuttons = document.querySelectorAll(".faqbutton");
const faqAnswer = document.querySelectorAll(".hiddenfaq");

    for(let i=0; i < faqbuttons.length; i++){
        faqbuttons[i].addEventListener("click", function(event){
            event.preventDefault();
            const  faqAnswers = faqAnswer[i];
            if(!faqAnswers){
                return;
            }
            if(faqAnswers.classList.contains("hiddenfaq"))
            {
                faqAnswers.classList.remove("hiddenfaq");
                faqAnswers.classList.add("faqAnswer");
            }

            else {
                faqAnswers.classList.remove("faqAnswer");
                faqAnswers.classList.add("hiddenfaq");
            }
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
