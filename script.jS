const btnswitch = document.getElementById('btn_dark');

btnswitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
})
const button = document.getElementById('ok');

button.addEventListener('click', ()=> {
 alert ("gracias por confiar en nosotros")});