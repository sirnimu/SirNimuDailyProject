(function(){
    const speed = 50;
    let player = document.getElementById('player');
    let ceiling = document.getElementById('ceiling');
    let score = document.getElementById('score');
    let space = document.getElementById('space');
    let scorePoints = 0;
    let spaceLeft;
    let ceilingTop = 0;
    let position = {
        x: 500, 
        y: 250
    };

    let addEventListeners = function(){
        window.addEventListener('keydown', (e) => {
            //calculate movement
            switch(e.keyCode) {
               case 37: // right
               case 65:
                    position.x -= speed; 
                    break;
                case 87: // down
                case 38:
                    position.y -= speed; 
                    break;
                case 39: //left
                case 68:
                    position.x += speed; 
                    break;
                case 83: // up
                case 40:
                    position.y += speed; 
            }
    
            //move 
            player.style.top = position.y + 'px';
            player.style.left = position.x + 'px';
        });
    }

    let ceilingAnimation = function(){
        setInterval(function(){

            ceilingTop += speed;
            ceiling.style.top = ceilingTop + 'px';
            
            if (ceilingTop === position.y){
                if (position.x === Number.parseInt(space.style.left)){
                    scorePoints++;
                    score.innerHTML = scorePoints;
                } else {
                    document.getElementById('game').innerHTML = 'Game over. You had ' + scorePoints + ' points.';
                }
            }
            if (ceilingTop > window.innerHeight){
                game.innerHTML = 'You Won!';
            }
        }, 500);
    };

    let init = (function(){
        spaceLeft = Math.floor(Math.random() * (window.innerWidth / 50)) * 50;
        score.innerHTML = scorePoints;
        space.style.left = spaceLeft + 'px';
        player.style.top = position.y + 'px';
        player.style.left = position.x + 'px';
        
        addEventListeners();
        ceilingAnimation();
    })();

})();