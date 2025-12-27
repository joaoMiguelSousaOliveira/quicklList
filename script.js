const input = document.getElementById('input-main');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const alertRemove = document.querySelector('.alert-remove');
const removeAlert = document.getElementById('remove-alert');
// Puxa todos os botões com a classe btn-trash
const buttonTrash = document.querySelectorAll('.btn-trash');

form.onsubmit = (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    
    if (inputValue === '') {
        alert('Por favor, insira algum texto no campo.');
    } else {

        try {
            // Criar um novo elemento li
            var li = document.createElement('li');

            // Permite adicionar conteúdp HTML ao li e inserver valor dinamico ${inputValue}
            li.innerHTML=`
            <input type="checkbox" class="btn-select" alt="selecionar">
                    ${inputValue}
            <button type="button" class="btn-trash" alt="remover">
                    <img src="img/trash.svg" alt="">
            </button>
            `
            console.log(li);

            // Adicionar o novo li ao ul
            ul.appendChild(li);

            // Limpa o campo de input
            input.value = '';

            // Puxa o botão récem criado dentro do li
            const newButtonTrash = li.querySelector('.btn-trash');

            newButtonTrash.addEventListener('click', () => {
                
                // Remove o li pai do botão clicado
                li.remove();

                alertRemove.style.display = 'block';

                setTimeout(expiredTime, 3000);
            });

        } catch (error) {
            console.log(error);
        }
    }
};


buttonTrash.forEach(btn => {

    btn.addEventListener('click', () => {
        // Remove o li pai do button clicado
        btn.parentNode.remove();

        alertRemove.style.display = 'block';

        setTimeout(expiredTime, 3000);
    })    
});


removeAlert.onclick = () => {
    document.querySelector('.alert-remove').style.display = 'none';
};


function expiredTime() {
    alertRemove.style.display = 'none';
}

