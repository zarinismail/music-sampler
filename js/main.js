let players = document.querySelectorAll('.player');
let covers = document.querySelectorAll('.cover');

// No players are shown when page loads
hideAll();

// When user clicks on album cover, only the player for that album song will appear
covers.forEach(function(el) {
    el.onclick = (e) => {
        // All players become hidden
        hideAll();
        
        switch (el.getAttribute('id')) {
            case 'photo1':
                players[0].style.display = 'block';
                break;
            case 'photo2':
                players[1].style.display = 'block';
                break;
            case 'photo3':
                players[2].style.display = 'block';
                break;
            case 'photo4':
                players[3].style.display = 'block';
                break;
        }

        // Track previously selected is stopped once another cover is clicked
        stopPrevTrack();
    };
});

// Hide audio players
function hideAll() {
    players.forEach(function(el) {
        el.style.display = 'none';
    });
}

// Stops and restarts track once another cover is clicked
function stopPrevTrack() {
    let audios = document.querySelectorAll('audio');
    audios.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });

}