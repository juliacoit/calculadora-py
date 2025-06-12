function adicionar(valor) {
            console.log(valor + " clicado")
            const input = document.getElementById("expressaoOculta");
            const display = document.getElementById("display");

            input.value += valor;
            display.value = input.value;
            document.querySelector('input[name="expressao"]').value = input.value;
        }

        function limpar() {
            document.getElementById("expressaoOculta").value = "";
            document.getElementById("display").value = "";
            document.querySelector('input[name="expressao"]').value = "";
            document.querySelector(".resultado").innerHTML = "";
        }