const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

txtdark();
load();

bdark.addEventListener('click', e =>{
    body.classList.toggle('dark');
    store(body.classList.contains('dark'));
    txtdark();

});
function load(){
    const dark = localStorage.getItem('dark');

    if(!dark){
         store('false')
        }    else if(dark == 'true'){

            body.classList.add('dark');
    }
}
function store(value){
    localStorage.setItem('dark', value)
    
}
function txtdark(){
    if(body.classList.contains('dark')){

    document.getElementById("bdark").innerHTML = "LIGHT MODE";
}
    else {
    document.getElementById("bdark").innerHTML = "DARK MODE";
}
}

