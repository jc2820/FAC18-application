

            //Function to allow visibility toggling for the information boxes
            function textToggle() {
                var textArea = document.getElementById("columns");
                if (textArea.style.display === "flex") {textArea.style.display = "none";}
                else {textArea.style.display = "flex";}
            }


            //Function to get the local time, and give a different colour scheme based on time of day.
            //Also to print information about the time and colour scheme in one of the information boxes.
            function whatTime() {
                var d = new Date();
                var n = d.getHours();
                console.log(n);
                if (n > 5 && n <= 9) {
                  document.getElementById("timer").className = "morning";
                  document.getElementById("leftbox").className = "morningleft";
                  document.getElementById("rightbox").className = "morningright";
                  document.getElementById("infobox").className = "morninginfo";
                  document.getElementById("linksbox").className = "morninglinks";
                  document.getElementById("header").className = "morningheader";
                  var timeText = document.createTextNode("It is morning...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: Breakfast time!");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n > 9 && n <= 17) {
                  document.getElementById("timer").className = "daytime";
                  document.getElementById("leftbox").className = "dayleft";
                  document.getElementById("rightbox").className = "dayright";
                  document.getElementById("infobox").className = "dayinfo";
                  document.getElementById("linksbox").className = "daylinks";
                  document.getElementById("header").className = "dayheader";
                  var timeText = document.createTextNode("It is daytime...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: London Bus!");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n > 17 && n <= 22) {
                  document.getElementById("timer").className = "evening";
                    document.getElementById("leftbox").className = "eveningleft";
                  document.getElementById("rightbox").className = "eveningright";
                  document.getElementById("infobox").className = "eveninginfo";
                  document.getElementById("linksbox").className = "eveninglinks";
                  document.getElementById("header").className = "eveningheader";
                  var timeText = document.createTextNode("It is evening...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: Whisky Soda!");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n > 22 && n <= 5) {
                  document.getElementById("timer").className = "night";
                  document.getElementById("leftbox").className = "nightleft";
                  document.getElementById("rightbox").className = "nightright";
                  document.getElementById("infobox").className = "nightinfo";
                  document.getElementById("linksbox").className = "nightlinks";
                  document.getElementById("header").className = "nightheader";
                  var timeText = document.createTextNode("It is night...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: Midnight Drive!");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
            }


            //Carousel functions
            var images = ["02.png", "03.png", "01.png"];
            var i = 0;
            var timer = setInterval(next, 1000);

            function next() {
                i = (i+1) % images.length;
                document.getElementById("carousel").src = images[i];
            }

            function previous() {
                i--;
                if (i<0) {i = images.length-1;}
                document.getElementById("carousel").src = images[i];
            }

            function playPause() {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                } else {
                    timer = setInterval(next, 1000);
                }
            }

            //Function to load functions plus event listeners/handler for carousel controls with the window.
            window.onload = function() {
                textToggle();
                whatTime();
                document.getElementById("toggler").addEventListener("click", textToggle);
                document.getElementById("nextButton").addEventListener("click", next);
                document.getElementById("previousButton").addEventListener("click", previous);
                document.getElementById("playPauseButton").addEventListener("click", playPause);
                document.onkeydown = function(event) {
                    if (event.keyCode == 37) {previous();}
                    if (event.keyCode == 39) {next();}
                    if (event.keyCode == 80) {playPause();}
                }
            }

