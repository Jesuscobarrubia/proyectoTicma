// OBTENIENDO INFORMACION DE API

fetch('https://randomuser.me/api')
.then(data => data.json())
.then(data => {

    let nombre = document.getElementById('nombre')
    let ubicacion = document.getElementById('ubicacion')
    let numero = document.getElementById('numero')
    let correo = document.getElementById('correo')

    nombre.innerHTML = `<h1>${data.results[0].name.first}</h1>`
    console.log(data)
    ubicacion.innerHTML = `<li>${data.results[0].location.country}</li>`
    console.log(data)
    numero.innerHTML = `<li>${data.results[0].phone}</li>`
    console.log(data)
    correo.innerHTML = `<li>${data.results[0].email}</li>`
    console.log(data)
})

.catch(err => console.log(err))

// MODO OSCURO

const btnswitch = document.getElementById('switch'); 

btnswitch.addEventListener('click', function(){
    document.body.classList.toggle('modo_oscuro');
    btnswitch.classList.toggle('active');
})