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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
//function createPlatform(Xpos, Ypos, Width, Height, "Color")
//function createPlatform(Xpos, Ypos, Width, Height, "Color", minX, maxX, speedX, minY, maxY, speedY)
//createPlatform(Xpos, Ypos, Width, Height, "Color")
createPlatform(350, 650, 100, 30, "grey")

createPlatform(100, 350, 100, 20, "grey")

createPlatform(400, 300, 100, 20, "grey")

createPlatform(900, 600, 100, 20, "grey")

createPlatform(600, 550, 100, 20, "grey")

createPlatform(400, 450, 100, 20, "grey")

createPlatform(700, 400, 100, 20, "grey")

createPlatform(900, 300, 100, 20, "grey")

createPlatform(200, 550, 50, 10, "grey", 250, 250, 1, 350, 550, 1 )

    // TODO 3 - Create Collectables
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber, minX, maxX speed)
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber)
    //createCollectable("Name", xPos, yPos)
    createCollectable("steve", 100, 300)

    createCollectable("diamond", 935, 235)

    createCollectable("database", 950, 550)

    // TODO 4 - Create Cannons
    //createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight, minCannonPos, maxCannonPos, cannonSpeed)
    //createCannon("top bottom left right", position, timeBetweenShots, BulletWidth, BulletHeight)
    //createCannon("top bottom left right", position, timeBetweenShots)
    createCannon("top", 900, 1000, 30, 50, 500, 1300, 2)

    createCannon("right", 450, 4000, 30, 10)

createCannon("left", 550, 7000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
