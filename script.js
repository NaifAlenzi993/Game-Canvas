window.addEventListener("load", function (e) {
    const mouseParagraph = document.getElementById("mouse");
    const rectpos = document.getElementById("rectpos");
  // const score = document.getElementById("score")
    const bullitinto = document.getElementById("bulltenemy");
    const correctshots =  document.getElementById("correctshots")
    const stateGame = document.getElementById("state")
    const theCanve = document.getElementById("myCa");
    const ctx = theCanve.getContext("2d");

    const btnStartGame = document.getElementById("btnStart")
    const btnStopGame = document.getElementById("btnStop")


    let bulletEnemy_x = 100 + Math.floor(Math.random() * 300);
    let bulletEnemy_y = 10;
    let bulletEnemy_speed = 10;
    let bulletEnemy_size = 20

    let bulletEnemyArr = []

    const rect_w = 100 , rect_h = 20;

    let rect_x = 500 / 2 - rect_w / 2;
    let rect_y = 444;

    let myBullet_x = rect_x  + rect_w/2-10
    let myBullet_y = rect_y - 10

    let myBullets = [] 
    let myBulletsTime = 100
    let myBulletsSpeed = 10
    let myBulletsSize = 10
    let spaceMove = 30;

    let ShotEvent = false

    let startGame = 1

    let countCorrectShots = 0


  this.setInterval(() => {
    if (startGame == 1) {

        rectpos.innerHTML = `RectPosition : X = ${rect_x} , Y = ${rect_y}`;
        bullitinto.innerHTML = `BulletEnemy : X = ${bulletEnemy_x} , Y = ${bulletEnemy_y}`;
    
        ctx.clearRect(0, 0, 500, 500);

        //check 
        myBullets.forEach((bullet,i) => {
            if (
                (bullet.x > bulletEnemy_x - 20 ) && (bullet.x < bulletEnemy_x + 20) 
                && (bullet.y <= bulletEnemy_y + 26.5)){
                    countCorrectShots++
                    correctshots.innerHTML = `correctShots :  ${countCorrectShots} 
                     `
                    bulletEnemy_y = 10
                    bulletEnemy_x = 100 + Math.floor(Math.random() * 350);
                    myBullets.splice(i,1)
            }
        })

    
        myBullet()
    
        enemyBullet()
    
        rectControl()
    
    }else if (startGame == -1){ 
        ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("You Are Loser !", 50, 500/2);
        ctx.closePath();
    }else if (stateGame == 0) {
        ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Stop Game !", 50, 500/2);
        ctx.closePath();
    }
   
    
 }, 100);


    window.addEventListener("keydown", (e) => {

    if (e.keyCode == "37") { // left
      rect_x -= spaceMove;
    } else if (e.keyCode == "39") { // right
      rect_x += spaceMove;
    } else if (e.keyCode == "32") { //Space
        if (startGame !== -1 || stateGame !== 0) {
            myBullet_x = rect_x  + rect_w/2-myBulletsSize/2
            myBullet_y = rect_y - 10
            // this.setTimeout
            // ShotEvent = true
            myBullets.push({x:  myBullet_x , y: myBullet_y , speed: myBulletsSpeed , size : myBulletsSize})
        }
       
        
        // if (myBullets.length == 1){
        //     this.setInterval(newBullet, myBulletsTime)
        // }
    }


  });

  function rectControl() {

    // ctx.beginPath();
    // ctx.rect(rect_x, rect_y, rect_w, rect_h);
    // ctx.fillStyle = "orange";
    // ctx.fill();
    // ctx.closePath();


    if (rect_x > 390) {
        rect_x = 390;
    }

    if (rect_x < 16) {
        rect_x = 16;
    }

    ctx.beginPath();
    ctx.rect(rect_x, rect_y, rect_w, rect_h);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
  }

  function myBullet() {
        if (myBullets.length){
            myBullets.forEach(bullet => {
                bullet.y -= bullet.speed
                ctx.beginPath();
                // ctx.rect(bullet.x, bullet.y, bullet.size, bullet.size);
                // ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, bullet.size, 0, 2 * Math.PI);
                ctx.fillStyle = "orange";
                ctx.stroke()
                ctx.strokeStyle = "red"
                ctx.fill();
                ctx.closePath();
            });
        }
  }

  function enemyBullet() {
    if (bulletEnemy_y > 415) {
        
        setTimeout(()=>{   
            stateGame.innerHTML = "Started Game"
            bulletEnemy_x = 150 + Math.floor(Math.random() * 300);
            // ctx.clearRect(0, 0, 500, 444);
            bulletEnemy_y = 10;
            startGame = 1
        } , 2500)

        myBullets = []
        startGame = -1
        stateGame.innerHTML = "You are Loser :("
    }
        
    
        bulletEnemy_y += bulletEnemy_speed;
    
        ctx.beginPath();
        ctx.rect(bulletEnemy_x, bulletEnemy_y, 20, 20);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
  }

    btnStartGame.addEventListener("click" , ()=> {
        startGame = 1
    })

    btnStopGame.addEventListener("click" , ()=> {
        startGame = 0
    })

  window.addEventListener("mousemove", (e) => {
    mouseParagraph.innerHTML = `MousePosition : X = ${e.clientX}  , Y = ${e.clientY}`;
    const w = rect_w;
    const h = rect_h;

    // let x = e.clientX;
    // let y = e.clientY;

    

    // if (y < 415 || y > 415) {
    //     y = 415
    // }

    // if (x > 404){
    //     x = 404
    // }

    // if (x < 94) {
    //     x = 94
    // }

    // let posX = x - w/2
    // let posY = y - h/2

    // const ww = rect_w
    // const hh = rect_h

    // ctx.clearRect(0,0,500,500);

    // // clear()
    // ctx.beginPath()
    // ctx.strokeRect(x - ww/2, y - hh/2, ww, hh)

    // ctx.closePath()

    // ctx.beginPath();
    // ctx.rect(posX, posY, w, h);
    // ctx.fillStyle= "orange"
    // ctx.fill();
    // ctx.closePath()
  });
});



// ctx.rect(50, 50, 100, 100);
// ctx.fill();

// ctx.rect(200, 50, 100, 100);
// ctx.fill();

// ctx.rect(50, 200, 250, 100);
// ctx.fill();
