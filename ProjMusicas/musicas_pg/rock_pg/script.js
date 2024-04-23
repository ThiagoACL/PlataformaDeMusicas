function playMusic(id) {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        if (audio.id === id) {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        } else {
            audio.pause();
        }
    });
}