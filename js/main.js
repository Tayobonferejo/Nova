

(function(){
    const rev = 400;
    const revenue = document.getElementById('revenue');
    const customer = document.getElementById('customer');
    const growth = document.getElementById('growth');

    let increase1 = 0;
    let increase2 = 0;
    let increase3 = 0;


    const interval = setInterval(() => {
            revenue.innerText = `${increase1}K;`

                increase1++;
                if (increase1 > 200) {
                    clearInterval(interval);
                }
        }, 20);
    const customerSat = setInterval(function () {
            customer.innerText = `${increase2}K;`
            increase2++;
            if (increase2 > 10) {
                    clearInterval(customerSat);
                }
    }, 200);

    const customerGrowth = setInterval(() => {
        growth.innerText = `${increase3}K`;
        increase3++;
        if(increase3 > 20) {
            clearInterval(customerGrowth);
        }

    }, 200);




    const faqbuttons = document.querySelectorAll(".faqbutton");
    const faqAnswer = document.querySelectorAll(".hiddenfaq");

    for(let i=0; i < faqbuttons.length; i++){
        faqbuttons[i].addEventListener("click", function(event){
            event.preventDefault();
            alert("youclick");
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
}());                                                                                                   