function validarFormulario(){

const nome = document.getElementById('nome').value.trim();

const data = document.getElementById('data').value.trim();

const idade = parseInt(document.getElementById('idade').value, 10);

const radios = document.getElementsByName('sex').value.trim();

const numero = document.getElementById('numero').value.trim();

const email = document.getElementById('email').value.trim();

const endereco = document.getElementById('endereco').value.trim();

const cidade = document.getElementById('cidade').value.trim();

const estado = document.getElementById('estado').value.trim();

const cep = document.getElementById('cep').value.trim();

const area = document.getElementById('area').value.trim();

const lazer = document.getElementById('lazer').value.trim();

const musica = document.getElementById('musica').value.trim();

const filme = document.getElementById('filme').value.trim();

const livro = document.getElementById('livro').value.trim();

const cor = document.getElementById('cor').value.trim();

const alimentacao = document.getElementById('alimentacao').value.trim();

const esporte = document.getElementById('esporte').value.trim();

const tecnologia = document.getElementById('tecnologia').value.trim();

const lugar = document.getElementById('lugar').value.trim();


if(!nome){
alert('Por favor, preencha o nome.');
return;
}else{
    console.log (nome);
}

if(!cpf || cpf.length !== 11  || isNaN(cpf)){
    alert('Por favor, insira um CPF válido com 11 digitos.');
    return;
    }else{
        console.log (cpf);
    }

    if(isNaN(idade) || idade > 30){
        alert('A idade deve ser um númro maior que 30.');
        return;
        }else{
            console.log (idade);
        }

        if(isNaN(experiencia) || experiencia < 3){
            alert('Os anos de experiência devem ser maior que 3');
            return;
            }else{
                console.log (experiencia);
            }     

}