<<<<<<< HEAD

function descargarImagen(){

    var nombreImagen = document.getElementById("nameImage").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

        if (nombreImagen == ""){
            alert("Debe nombre de la imagen");
            document.getElementById("nameImage").focus();
            return false;
        }

        if ((usuario == "") || (usuario.length < 8)){
            alert("El usuario debe tener mínimo 8 caracteres.");
            document.getElementById("usuario").focus();
            return false;
        }

        if ((clave == "") || (clave.length < 8)){
            alert("La clave debe tener mínimo 8 caracteres.");
            document.getElementById("clave").focus();
            return false;
        }

        return true;
        }
=======

function descargarImagen(){

    var nombreImagen = document.getElementById("nameImage").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

        if (nombreImagen == ""){
            alert("Debe nombre de la imagen");
            document.getElementById("nameImage").focus();
            return false;
        } 
        
        if ((usuario == "") || (usuario.length < 8)){
            alert("El usuario debe tener mínimo 8 caracteres.");
            document.getElementById("usuario").focus();
            return false;
        }
            
        if ((clave == "") || (clave.length < 8)){
            alert("La clave debe tener mínimo 8 caracteres.");
            document.getElementById("clave").focus();
            return false;
        }
                
        return true;
        }
       
>>>>>>> style
