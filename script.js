
    
    window.addEventListener("load" , function (e) {
        const mouseParagraph = document.getElementById("mouse")
        const keyboard = document.getElementById("keyboard")
        const score = document.getElementById("score")

        const theCanve = document.getElementById("myCa")
        const ctx = theCanve.getContext("2d")


        let bullet_x = Math.floor(Math.random() * 400);
        let bullet_y = 10
        let bullet_speed = 15


        let rect_x = 500/2 - 180/2
        let rect_y = 444
        const rect_w = 180 , rect_h = 30
        let spaceMove = 25

        this.setInterval(()=>{
            if (bullet_y > 420){
                bullet_x = Math.floor(Math.random() * 400);
                ctx.clearRect(0,0,500,440);
                bullet_y = 10
            }

            bullet_y += bullet_speed

            ctx.beginPath();
            ctx.rect(bullet_x, bullet_y, 10, 10);
            ctx.fillStyle= "red"
            ctx.fill();
            ctx.closePath()

        } , 200)

       
        
        ctx.beginPath();
        ctx.rect(rect_x, rect_y, rect_w, rect_h);
        ctx.fillStyle= "orange"
        ctx.fill();
        ctx.closePath()

        window.addEventListener("keydown" , (e) => {
            ctx.clearRect(0,444,500,500);
            
            if (e.keyCode == '37') {
                keyboard.innerHTML = "left"
                rect_x -= spaceMove
            }

            else if (e.keyCode == '39') {
                keyboard.innerHTML = "right"
                rect_x += spaceMove
            }

            // if (rect_y < 444 || rect_y > 444) {
            //     rect_y = 444 
            // }

            if (rect_x > 305){
                rect_x = 305
            }

            if (rect_x < 16) {
                rect_x = 16
            }

            ctx.beginPath();
            ctx.rect(rect_x, rect_y, rect_w, rect_h);
            ctx.fillStyle= "orange"
            ctx.fill();
            ctx.closePath()
        })


        window.addEventListener("mousemove" , (e)=> {
            mouseParagraph.innerHTML = `X = ${e.clientX}  , Y = ${e.clientY}`
            const w = 180
            const h = 30

            let x = e.clientX
            let y = e.clientY

            // if (y < 471 || y > 471) {
            //     y = 471 
            // }

            // if (x > 404){
            //     x = 404
            // }

            // if (x < 94) {
            //     x = 94
            // }

            // let posX = x - w/2
            // let posY = y - h/2

            // const ww = 190
            // const hh = 40

            // ctx.clearRect(0,444,500,500);

            // // clear()
            // ctx.beginPath()
            // ctx.strokeRect(x - ww/2, y - hh/2, ww, hh)

            // ctx.closePath()

            // ctx.beginPath();
            // ctx.rect(posX, posY, w, h);
            // ctx.fillStyle= "orange"
            // ctx.fill();
            // ctx.closePath()
            })

        })


     // ctx.rect(50, 50, 100, 100);
        // ctx.fill();

        // ctx.rect(200, 50, 100, 100);
        // ctx.fill();

        // ctx.rect(50, 200, 250, 100);
        // ctx.fill();


   