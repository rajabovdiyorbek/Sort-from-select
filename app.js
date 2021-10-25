const btnPrice = document.querySelector('.price');
const btnName = document.querySelector('.name');
const btnRelevanse = document.querySelector('.relevanse');

//Select sort

const select = document.querySelector('.select')

//addEvenListeners
btnPrice.addEventListener('click', selectPrice);
btnName.addEventListener('click', selectName);
btnRelevanse.addEventListener('click', selectRelevance);


//Function click Price Name Relevance
function selectPrice(){
    btnPrice.classList.add('btn__active');
    btnName.classList.remove('btn__active');
    btnRelevanse.classList.remove('btn__active');
    select.value = "price";
}
function selectName(){
    btnName.classList.add('btn__active');
    btnPrice.classList.remove('btn__active');
    btnRelevanse.classList.remove('btn__active');
    select.value = "name";
}
function selectRelevance(){
    btnRelevanse.classList.add('btn__active');
    btnName.classList.remove('btn__active');
    btnPrice.classList.remove('btn__active');
    select.value = "relevanse";
}


//click Select sort
select.addEventListener('click', ()=>{
    if(select.value == "price"){
        selectPrice();
    }else if(select.value == "name"){
        selectName();
    }else if(select.value == "relevanse"){
        selectRelevance();
    }
});
