var MeteorImpact = function () {

    var settings = {
        context: document.querySelector(".context"),

        randomNumber    : function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        randomBackground: function () {
            var backgrounds = ["img/blue.png", "img/black.png", "img/purple.png", "img/darkPurple.png"];
            this.context.style.background = "url(" + backgrounds[this.randomNumber(0, 3)] + ")";

            return this;
        }
    };

    var menu = {
        panel: document.querySelector(".menu"),

        display: function () {
            this.panel.style.display = "block";
            this.panel.style.visibility = "visible";

            return this;
        },
        hide   : function () {
            this.panel.style.display = "none";
            this.panel.style.visibility = "hidden";

            return this;
        }
    };

    var score = {
        scorePlace: document.querySelector(".score"),
        scoreMenu : document.querySelector(".scoreMenu"),
        myPoints  : localStorage["points"] = 0,
        topPoints : localStorage["highest"] = 0,

        addPoints    : function () {
            this.myPoints += 1;

            return this;
        },
        update       : function () {
            this.scorePlace.innerText = "Score: " + this.myPoints;

            return this;
        },
        highScore    : function () {
            if (this.myPoints > this.topPoints && this.myPoints != 0) {
                this.topPoints = this.myPoints;
            }

            return this;
        },
        reset        : function () {
            this.myPoints = 0;

            return this;
        },
        display      : function () {
            this.scoreMenu.style.display = "block";
            this.scoreMenu.style.visibility = "visible";

            return this;
        },
        hide         : function () {
            this.scoreMenu.style.display = "none";
            this.scoreMenu.style.visibility = "hidden";

            return this;
        },
        showHighScore: function () {
            this.scoreMenu.getElementsByTagName("span")[0].innerText = this.topPoints;
        }
    };

    var physics = {
        isCollided: function (a, b) {
            return !(
                ((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))
                );
        },
        moveX     : function (myShip) {
            var positionX = settings.context.offsetLeft;
            settings.context.onmousemove = function (e) {
                positionX = e.clientX - settings.context.offsetLeft;
                myShip.style.left = positionX + "px";
                return this;
            };
        }
    };


    var spaceShip = {
        hangarMenu: document.querySelector(".shipMenu"),

        myShip: {
            hangar: document.querySelector(".spaceship"),
            model : localStorage["model"] = "img/spaceship/playerShip1_blue.png"
        },

        start    : function () {
            var Ship = this.myShip;

            Ship.hangar.style.left = 0;
            Ship.hangar.className = "spaceship";
            Ship.hangar.src = Ship.model;

            physics.moveX(Ship.hangar);

            return this;
        },
        destroy  : function () {
            this.myShip.hangar.className = "destroyed";
            this.myShip.hangar.src = "img/spaceship/transparent.png";

            return this;
        },
        shipModel: function (src) {
            return this.myShip.model = src;
        },
        display  : function () {
            this.hangarMenu.style.display = "block";
            this.hangarMenu.style.visibility = "visible";

            return this;
        },
        hide     : function () {
            this.hangarMenu.style.display = "none";
            this.hangarMenu.style.visibility = "hidden";

            return this;
        }
    };

    var enemies = {
        meteors: document.querySelectorAll(".meteor"),

        start  : function () {
            for (var i = 0; i < this.meteors.length; i++) {
                var randomX = settings.randomNumber(0, 1000);
                randomX *= 0.1;
                this.meteors[i].style.left = randomX + "%";
            }

            return this;
        },
        random : function (object) {

            var randomX = settings.randomNumber(0, 1000);
            randomX *= 0.1;

            object.style.left = randomX + "%";

            return this;
        },
        falling: function () {
            var enemies = this.meteors, random = this.random, fallY = [];

            for (var j = 0; j < this.meteors.length; j++) {
                fallY[j] = settings.randomNumber(0, 10);
            }

            var gameInterval = setInterval(function () {
                for (var i = 0; i < enemies.length; i++) {

                    fallY[i] += (i + 1);

                    enemies[i].style.top = fallY[i] + "px";

                    if (enemies[i].offsetTop > settings.context.offsetHeight) {
                        fallY[i] = 0;
                        score.addPoints().highScore().update();
                        random(enemies[i]);
                    }

                    if (physics.isCollided(enemies[i], spaceShip.myShip.hangar)) {
                        clearInterval(gameInterval);
                        spaceShip.destroy();
                        menu.display();
                        score.reset();
                    }

                }

            }, 50);

            return this;
        }
    };

    return {
        init      : function () {
            settings.randomBackground();
            enemies.start();
            enemies.falling();
        },
        startShip : function () {
            spaceShip.start();
        },
        showShip  : function () {
            spaceShip.display();
        },
        hideShip  : function () {
            spaceShip.hide();
        },
        changeShip: function (ship) {
            spaceShip.shipModel(ship);
        },
        showMenu  : function () {
            menu.display();
        },
        hideMenu  : function () {
            menu.hide();
        },
        showScore : function () {
            score.display();
            score.showHighScore();
        },
        hideScore : function () {
            score.hide();
        }
    };

};