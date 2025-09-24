$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    //createPlatform(xpos, ypos, Width, Height)
    createPlatform(400, 600, 100, 5);
    createPlatform(600, 300, 100, 10);
    createPlatform(800, 500, 100, 15);
    createPlatform(470, 500, 100, 5);
    createPlatform(180, 650, 100, 12);
    createPlatform(560, 400, 100, 13);
    createPlatform(350, 780, 100, 10);
    // TODO 3 - Create Collectables //createCollectable("type", xPos, yPos, gravity?, bounce? Between 0-1, minX = null, maxX = null, speed = 1)
    //"type" can be 6 things... database diamond grace kennedi max steve
    createCollectable("database", 400, 400)
    createCollectable("max", 600, 600, 0.1)
    createCollectable("cookie", 600, 350,)

    // TODO 4 - Create Cannons
    //createCannon("wall", pos, secondsX1000, width, height)
    createCannon("right", 450, 2000);
    createCannon("left", 400, 2000, 10, 10);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
