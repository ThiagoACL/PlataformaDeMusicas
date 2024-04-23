// função  que recebe um id de parâmetro
function playMusic(id) {
    // seleciona todos os elementos de áudio na página
    const audioElements = document.querySelectorAll('audio');
    
    // itera sobre cada elemento de áudio encontrado (iterar significa fazer execução repetida de uma sequência de instruções)
    audioElements.forEach(audio => {
        // verifica se o id do elemento de áudio atual é igual ao ID passado para a função
        if (audio.id === id) {
            // se o áudio estiver pausado, reproduz
            if (audio.paused) {
                audio.play();
            } else { // se nao estiver pausado, pausa
                audio.pause();
            }
        } else { // se o id do elemento de áudio não corresponder ao ID passado
            // pausa o áudio
            audio.pause();
        }
    });
}