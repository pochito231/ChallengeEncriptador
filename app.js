    function verificarTexto(){
        var texto = document.getElementById('texto').value;
        texto = texto.toLowerCase();

        if(/[a-záéíóú ]/.test(texto)) {
            return true;
        }else{
            return false;    
        }
    }

    function encriptar(){
            var texto = document.getElementById('texto').value;
            texto = texto.toLowerCase();
            
        if (verificarTexto()){
            
            texto = texto.replace(/e/g, 'enter');
            texto = texto.replace(/i/g, 'imes');
            texto = texto.replace(/a/g, 'ai');
            texto = texto.replace(/o/g, 'ober');
            texto = texto.replace(/u/g, 'ufat');
            document.getElementById( "resultado" ).style.display="block"; 
            document.getElementById( "fototex" ).style.display="none";
            document.getElementById( "resultado" ).value= texto;

                }else{
                    alert("Ingresa solo caracteres permitidos");
        }
    }

    function desencriptar(){
        var texto = document.getElementById('texto').value;
        texto = texto.toLowerCase();
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');
        document.getElementById("resultado").value= texto;
    }



    function limpiar(){
      document.getElementById('texto').value = "Ingresa el texto aqui";  
      document.getElementById('resultado').value="";
      document.getElementById( "fototex" ).style.display="block";

    }
