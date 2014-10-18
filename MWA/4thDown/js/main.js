(function (document, window) {
    "use strict";

    var Play = MeteorImpact();

    var playButton = document.querySelector(".play"),
        scoreButton = document.querySelector(".scores"),
        shipButton = document.querySelector(".ship"),
        backScoreButton = document.querySelector(".backScore"),
        backShipButton = document.querySelector(".backShip"),
        ships = document.querySelectorAll(".shipMenu img");

    playButton.onclick = function () {

        Play.init();
        Play.startShip();
        Play.hideMenu();

    };

    shipButton.onclick = function () {
        Play.showShip();
    };

    scoreButton.onclick = function () {
        Play.showScore();
    };

    backScoreButton.onclick = function () {
        Play.hideScore();
    };

    backShipButton.onclick = function () {
        Play.hideShip();
    };

    for (var index in ships) {
        ships[index].onclick = function () {
            Play.changeShip(this.src);
            Play.init();
            Play.startShip();
            Play.hideShip();
            Play.hideMenu();
        }
    }

})(document, window);
