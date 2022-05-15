<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tickets</title>
    <link rel="preload" href="./styles.css" as="style">
    <link href="/styles.css" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" rel="stylesheet">
</head>
<body>
    <header class="cabecera">
         <h1>Bienvenido</h1>
         <h2>Selecciona el pase de tu interes</h2>
    </header>

    <section class="seleccion">

        <form class="Formulario borde">

            <div class="CiudadOrigen bordemini ">
             <label for="Ciudad de Origen">Ciudad de Origen</label>
             <input class="input-text" type="text" placeholder="Tu ciudad" id=CiudadOrigen>
            </div>
    
            <div class="CiudadDestino bordemini">
             <label for="CiudadDestino">Ciudad de Destino</label>
             <input class="input-text" type="text" placeholder="Tu ciudad destino" id="CiudadDestino1">
            </div>
    
            <div class="Fecha bordemini">
             <label for="Fecha">fecha de abordo</label>
             <input class="input-text" type="date" placeholder="Tu fecha de uso" id="fechadeabordo">
            </div>
    
            <div class="hora bordemini">
              <label for="hora">Hora de Abordaje</label>
              <input class="input-text" type="datetime" placeholder="Tu hora de abordaje" id="horaAbordaje">
            </div>
    
            <div class="Cantidadpuestos bordemini">
              <label for="Cantidadpuestos">Cantidad de puestos</label>
              <input class="input-text" type="number" placeholder="Escoje Cantidads" id="Cantidadtickets">
            </div>
    
            <div class="Datospasajero bordemini">
            <label for="formapago">Forma de pago</label>
            <select class="input-text"  placeholder="Forma de pago" id="formadepago">
              <option>Paypal</option>
              <option>Debt Card</option>
              <option>Credit Card</option>
              <option>Gift Card</option>
            </select>
            </div>

            <div class="CiudadOrigen bordemini ">
             <label for="Nombre">Nombre</label>
             <input class="input-text" type="" placeholder="Tu nombre" id="nombre">
            </div>

            <div class="CiudadOrigen bordemini ">
             <label for="Email">Email</label>
             <input class="input-text" type="email" placeholder="Tu email" id="email">
            </div>

            <input class="validacion" type="submit" placeholder="Enviar" id="enviar">

            <div id="error">

            </div>
        </form>
        
        
      </section>
      <footer>
      </footer>
      
      <script src="/scripts.js" type="text/javascript"></script>
</body>
</html>