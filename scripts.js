
// Campo de datos a rellenar //

// Botones 
var enviar = document.getElementById('enviar');

//tickets 
class ticket {
    constructor(origen , destino , fecha , hora , cantidadpuestos){
        this.CiudadOrigen = origen;
        this.CiudadDestino = destino;
        this.fecha= fecha;
        this.horadeabordo=hora;
        this.cantidadpuestos = cantidadpuestos;

    }
};

var CiudadOrigen = document.getElementById('CiudadOrigen');
var CiudadDestino = document.getElementById('CiudadDestino1');
var fecha = document.getElementById('fechadeabordo');
var horadeabordo = document.getElementById('horaAbordaje');
var Cantidadpuestos = document.getElementById ('Cantidadtickets');
var errorDiv = document.getElementById('error');

// CLiente
var formadepago = document.getElementById ('formadepago');
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');

class Cliente {
    constructor (formadepago , nombre , email){
      this.nombre =nombre;
      this.formadepago=formadepago;
      this.email = email;
    }
}

let capacidaddelbus = 5;

//validacion//

CiudadOrigen.addEventListener('blur',validarCampos);
fecha.addEventListener('blur',validarCampos);
horadeabordo.addEventListener('blur',validarCampos);
Cantidadpuestos.addEventListener('blur',validarCampos);
formadepago.addEventListener('blur', validarCampos);

// Cliente validacions//
email.addEventListener('blur',validarEmail);
nombre.addEventListener('blur',validarCampos);
formadepago.addEventListener('click',validarCampos);

// Enviar validacion
enviar.addEventListener('click',CapturarFormulario);

// funciones
function validarCampos() {
    if(this.value ==='') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Porfavor rellena todos los campos';
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
    }else{
        errorDiv.style.display ='none';
        this.style.border = '1px solid #cccc';
    }
};


function validarEmail (){
    if(this.value.indexOf('@')> -1){
        errorDiv.display = 'none';
        this.style.border = '1px solid #cccc';
    }else{
        errorDiv.style.display='block';
        errorDiv.innerHTML='Rellena correctamente el Email';
        this.style.border = '1px solid red';
        errorDiv.style.border='1px solid red';
    }
};

//LOGICA DE CAPTURA DE DATOS GRUPALES

function CapturarFormulario (){
    nuevoTicket = new ticket (
        CiudadOrigen.value,
        CiudadDestino.value,
        fecha.value,
        horadeabordo.value,
        Cantidadpuestos.values
    );

    ClienteRegistrado = new Cliente (
        nombre.value,
        formadepago.value,
        email.value
    );

    numerodeTickets.push(1);
    comprandoBoleto();
}

let numerodeTickets = [];

function comprandoBoleto(){
    if(capacidaddelbus < numerodeTickets.length ){
        alert('disculpa ya no hay espacio');
    } else {
        alert (`gracias tu no. de asiento es ${numerodeTickets.length}`)
    }
}