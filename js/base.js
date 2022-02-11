function EnviarDatos(e) {
  e.preventDefault();

  var nombre = document.getElementById('nombre_producto').value;
  var descripcion = document.getElementById('descripcion_producto').value;
  var foto = document.getElementById('foto_producto').value;

  let producto = {
    nombre: nombre,
    descripcion: descripcion,
    foto: foto
  };

  let opciones = {
    method: "POST",
    body: JSON.stringify(producto),
    mode:"cors",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest' //SOLO para el api que construyo el profe Zamora
    }
  };

  fetch('http://192.168.100.16:8000/api/producto', opciones)
    .then(res => {
      if (res.ok) {
        res.json().then(prod => {
          console.log(prod);
        });
      } else {
        console.log("Algo paso y no se guardo")
      }
    })
    .catch(err => console.log(err));

}