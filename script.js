function adicionar(valor) {
            const input = document.getElementById("expressaoOculta");
            input.value += valor;
            document.querySelector('input[name="expressao"]').value = input.value;
        }

        function limpar() {
            document.getElementById("expressaoOculta").value = "";
            document.querySelector('input[name="expressao"]').value = "";
        }