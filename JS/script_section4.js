function verificarRobo() {
           
    var resposta = prompt("Quanto é 2 + 2?");

    if (resposta === "4") {
        document.getElementById("verificacao-botao").checked = true;
        return true; 
    } else {
        alert("Resposta incorreta. Tente novamente.");
        document.getElementById("verificacao-botao").checked = false;
        return false; 
    }
}