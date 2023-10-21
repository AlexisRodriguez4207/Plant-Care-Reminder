//Declaracion de variables 
const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

//Evento click
menuToggle.onclick = function(){
    navigation.classList.toggle('open')

}

//Funcionalidad a cada boton del menu
const list = document.querySelectorAll('.list')
function activeLink(){
    //removemnos active de la lista
    list.forEach((item)=> item.classList.remove('active'))
    //agregamos active al item seleccionado
    this.classList.add('active')

}

//Agregamos el evento click a cada item de la lista
list.forEach((item) => item.addEventListener('click', activeLink))


