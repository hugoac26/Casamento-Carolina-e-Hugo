//const input = document.getElementById("username");
            var input = document.getElementById("password");
            var button = document.getElementById("button");

            input.addEventListener("input", function () {
                if (input.value === "06102024") {
                    button.classList.add("enabled");
                    button.removeAttribute("disabled"); 

                } else {
                    button.classList.remove("enabled");
                    button.disabled = true; 
                }a
            });


/*var valor = true; // aqui você pode colocar o valor que deseja verificar
var link = document.getElementById("password");

if (valor == true) {
  link.style.display = "inline";
}
