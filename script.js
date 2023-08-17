let number = 0;
let tentativas = 0;

function load(){
    // gerando número aleatório
    number = parseInt(Math.random() * 50);
    console.log(number)
}
function verificar(){
    const valor = document.getElementById('jogada').value;

    if (valor > 50 || valor < 1){
        alert('Aposta inválida!!');
        return;
     }else {
        if(valor > number){
            tentativas++;
            alert('🚨 O número para ser encontrado é MENOR!');
        } else if (valor < number){
            tentativas++;
            alert('🚨 O número para ser encontardo é MAIOR!');
        } else {
            alert('⭐ PARABÉNS ⭐, você acertou! com ' +tentativas+' erros');
        }
    }
}
load();