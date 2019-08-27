

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
                  document.getElementById("timer").className = "morningbg";
                  document.getElementById("leftbox").className = "morning";
                  document.getElementById("rightbox").className = "morning";
                  document.getElementById("infobox").className = "morning";
                  document.getElementById("linksbox").className = "morning";
                  document.getElementById("header").className = "morning";
                  var timeText = document.createTextNode("It is morning...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: spring/snow/scarlet.");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n > 9 && n <= 17) {
                  document.getElementById("timer").className = "daytimebg";
                  document.getElementById("leftbox").className = "daytime";
                  document.getElementById("rightbox").className = "daytime";
                  document.getElementById("infobox").className = "daytime";
                  document.getElementById("linksbox").className = "daytime";
                  document.getElementById("header").className = "daytime";
                  var timeText = document.createTextNode("It is daytime...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: sky/smoke/tomato");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n > 17 && n <= 21) {
                  document.getElementById("timer").className = "eveningbg";
                  document.getElementById("leftbox").className = "evening";
                  document.getElementById("rightbox").className = "evening";
                  document.getElementById("infobox").className = "evening";
                  document.getElementById("linksbox").className = "evening";
                  document.getElementById("header").className = "evening";
                  var timeText = document.createTextNode("It is evening...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: tan/coral/seashell");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n > 21 || n <= 5) {
                  document.getElementById("timer").className = "nightbg";
                  document.getElementById("leftbox").className = "night";
                  document.getElementById("rightbox").className = "night";
                  document.getElementById("infobox").className = "night";
                  document.getElementById("linksbox").className = "night";
                  document.getElementById("header").className = "night";
                  var timeText = document.createTextNode("It is night...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: midnight/cobalt/silver");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };       
                        /*
                if (n > 21) {
                  document.getElementById("timer").className = "nightbg";
                  document.getElementById("leftbox").className = "night";
                  document.getElementById("rightbox").className = "night";
                  document.getElementById("infobox").className = "night";
                  document.getElementById("linksbox").className = "night";
                  document.getElementById("header").className = "night";
                  var timeText = document.createTextNode("It is night...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: midnight/cobalt/silver");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                };
                if (n <= 5) {
                  document.getElementById("timer").className = "nightbg";
                  document.getElementById("leftbox").className = "night";
                  document.getElementById("rightbox").className = "night";
                  document.getElementById("infobox").className = "night";
                  document.getElementById("linksbox").className = "night";
                  document.getElementById("header").className = "night";
                  var timeText = document.createTextNode("It is night...");
                  document.getElementById("timeOfDay").appendChild(timeText);
                  var colourSchemeText = document.createTextNode("Your colour scheme is: midnight/cobalt/silver");
                  document.getElementById("colourScheme").appendChild(colourSchemeText);
                }; */
                
            }


            //Carousel functions
            var images = ["images/sfcfullgs.png", "images/wlcfullgs.png", "images/jrbfullgs.png"];
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
                    if (event.keyCode == 73) {textToggle();}
                }
            }

