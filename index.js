function init() {
    document.getElementById("spinWheel").addEventListener("click", wheelSpin);
    document.getElementById("resetWheel").addEventListener("click", init);

    var stage_first = new createjs.Stage("canvas_outer");
    var stage_second = new createjs.Stage("canvas_middle");
    var stage_third = new createjs.Stage("canvas_inner");
    var stage_roundedCanvas = new createjs.Stage("stage_roundedCanvas");
    var stopCenterAnimation = false

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on("tick", tick);

    /* 
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on("tick", tick2); */

    var container_outer = new createjs.Container(),
        shape_outer = new createjs.Shape();

    var container_middle = new createjs.Container(),
        shape_middle = new createjs.Shape();

    var container_inner = new createjs.Container(),
        shape_inner = new createjs.Shape();

    var rounded_container = new createjs.Container()
    // shape_inner = new createjs.Shape();

    var wheel_number_size = 15;
    var segments_outer = 10,
        size_outer_wheel = 150,
        angle = Math.PI * 2 / segments_outer;

    var segments_middle = 10,
        size_middle_wheel = 120;

    var segments_inner = 10,
        size_inner_wheel = 90

    var outer_text = [0,1,2,3,4,5,6,7,8,9]
    var middle_text = [0,1,2,3,4,5,6,7,8,9]
    var inner_text = [0,1,2,3,4,5,6,7,8,9]



    // Draw outer wheel  
    for (var i = 0, l = segments_outer;i < l;i++) {
        shape_outer.graphics.f((i % 2 == 0) ? "#bbb" : "#ddd")
            .mt(0, 0)
            .lt(Math.cos(angle * i) * size_outer_wheel, Math.sin(angle * i) * size_outer_wheel)
            .arc(0, 0, size_outer_wheel, i * angle, i * angle + angle)
            .lt(0, 0);

        // Add text child
        var num = new createjs.Text(outer_text[i], wheel_number_size + "px Arial Black", "#888")
            .set({
                textAlign: "center",
                regY: size_outer_wheel - 5,
                rotation: angle * 180 / Math.PI * (i + 0.5)
            });
        container_outer.addChild(num);

    }



    // Draw middle wheel  
    for (var i = 0, l = segments_middle;i < l;i++) {


        shape_middle.graphics.f((i % 2 == 0) ? "#bbb" : "#ddd")
            .mt(0, 0)
            .lt(Math.cos(angle * i) * size_middle_wheel, Math.sin(angle * i) * size_middle_wheel)
            .arc(0, 0, size_middle_wheel, i * angle, i * angle + angle)
            .lt(0, 0);

        // Add text child
        var num = new createjs.Text(middle_text[i], wheel_number_size + "px Arial Black", "#888")
            .set({
                textAlign: "center",
                regY: size_middle_wheel - 5,
                rotation: angle * 180 / Math.PI * (i + 0.5)
            });

        container_middle.addChild(num);
    }



    // Draw inner wheel  
    for (var i = 0, l = segments_inner;i < l;i++) {


        shape_inner.graphics.f((i % 2 == 0) ? "#bbb" : "#ddd")
            .mt(0, 0)
            .lt(Math.cos(angle * i) * size_inner_wheel, Math.sin(angle * i) * size_inner_wheel)
            .arc(0, 0, size_inner_wheel, i * angle, i * angle + angle)
            .lt(0, 0);

        // Add text child
        var num = new createjs.Text(inner_text[i], wheel_number_size + "px Arial Black", "#888")
            .set({
                textAlign: "center",
                regY: size_inner_wheel - 5,
                rotation: angle * 180 / Math.PI * (i + 0.5)
            });

        container_inner.addChild(num);
    }


    // Outer Container

    container_outer.addChildAt(shape_outer, 0);
    container_outer.x = container_outer.y = size_outer_wheel + 20;
    container_outer.cache(-size_outer_wheel, -size_outer_wheel, size_outer_wheel * 2, size_outer_wheel * 2);

    container_outer.rotation = -360 / segments_outer / 2; // Rotate by 1/2 segment to align at 0



    // Middle Container

    container_middle.addChildAt(shape_middle, 0);
    container_middle.x = container_middle.y = size_middle_wheel + 50;
    container_middle.cache(-size_middle_wheel, -size_middle_wheel, size_middle_wheel * 2, size_middle_wheel * 2);


    container_middle.rotation = -360 / segments_outer / 2; // Rotate by 1/2 segment to align at 0




    // Inner Container

    container_inner.addChildAt(shape_inner, 0);
    container_inner.x = container_inner.y = size_inner_wheel + 80;
    container_inner.cache(-size_inner_wheel, -size_inner_wheel, size_inner_wheel * 2, size_inner_wheel * 2);

    container_inner.rotation = -360 / segments_inner / 2; // Rotate by 1/2 segment to align at 0




    // Red Notch
    var notch = new createjs.Shape();
    notch.x = container_outer.x;
    notch.y = container_outer.y - size_outer_wheel;
    notch.graphics.f("red").drawPolyStar(0, 0, 12, 3, 2, 90);



    // Red Notchnotch2
    var notch2 = new createjs.Shape();
    notch2.x = container_middle.x;
    notch2.y = container_middle.y - size_middle_wheel;
    notch2.graphics.f("red").drawPolyStar(0, 0, 12, 3, 2, 90);

    var size_centerCircle = 60
    var centerCircle = new createjs.Shape();
    centerCircle.x = rounded_container.x + size_centerCircle;
    centerCircle.y = rounded_container.y + size_centerCircle;
    centerCircle.graphics.beginFill("red").drawCircle(0, 0, size_centerCircle);
    // centerCircle.y = 50;
    // stage_roundedCanvas.addChild(centerCircle);
    // Where the INNER wheel should land
    var num_inner = new createjs.Text("Triple Fun", "30px Arial", "#000")
        .set({
            x: rounded_container.x + 100,
            y: rounded_container.y + 50,
            textAlign: "center"
        });
    // num_inner.y = 200;

    // stage_roundedCanvas.addChild(num_inner)
    stage_roundedCanvas.addChild(rounded_container, centerCircle, num_inner);

    // rounded_container.addChild(num_inner);


    // Where the OUTER wheel should land
    var num_outer = new createjs.Text("0", "50px Arial", "#000")
        .set({
            x: container_outer.x,
            y: container_outer.y + size_outer_wheel + 10,
            textAlign: "center"
        });

    // Where the MIDDLE wheel should land
    var num_middle = new createjs.Text("0", "50px Arial", "#000")
        .set({
            x: container_middle.x,
            y: container_middle.y + size_middle_wheel + 10,
            textAlign: "center"
        });



    // var num_inner = new createjs.Text("0", "50px Arial", "#000")
    // 	.set({
    // 		x: container_inner.x,
    // 		y: container_inner.y + size_inner_wheel + 10,
    // 		textAlign: "center"
    // 	});



    stage_first.addChild(container_outer, notch);
    stage_second.addChild(container_middle);
    stage_third.addChild(container_inner);
    // stage_roundedCanvas.addChild(num_inner)
    // Mode. 0=stopped, 1=moving, 2=stopping
    container_outer.mode = 0;
    container_middle.mode = 0;
    container_inner.mode = 0;
    // When clicked, cycle mode.
    /* container_outer.on("click", function(e) {
      if (container_outer.mode == 0) {
        container_outer.mode = 1;
      } else if (container_outer.mode == 1) {
        container_outer.mode = 2;
	
        // Slow down. Find the end angle, and tween to it
        var num = Math.random() * segments_outer | 0, // Choose a number,
          angleR = angle * 180 / Math.PI, // Angle in degrees
          adjusted = (container_outer.rotation - 360), // Add to the current rotation
          numRotations = Math.ceil(adjusted / 360) * 360 - num * angleR - angleR / 2; // Find the final number.
	
        num_outer.text = num; // Show the end number
	
        createjs.Tween.get(container_outer)
          .to({
            rotation: numRotations
          }, 3000, createjs.Ease.cubicOut)
          .call(function() {
            container_outer.mode = 0;
          });
      }
    }); */


    // container_inner.on("click", function (e) {
    function wheelSpin() {
       // OUTER WHEEL


        var outer_random;
        if (container_outer.mode == 0) {
            container_outer.mode = 1;
            this.value = "stop";
        } else if (container_outer.mode == 1) {
            container_outer.mode = 2;
            this.value = "spin";

            // Slow down. Find the end angle, and tween to it
            outer_random = Math.random() * segments_outer | 0, // Choose a number,
                angleR = angle * 180 / Math.PI, // Angle in degrees
                adjusted = (container_outer.rotation - 360), // Add to the current rotation
                numRotations = Math.ceil(adjusted / 360) * 360 - outer_random * angleR - angleR / 2; // Find the final number.

            // num_outer.text = outer_text[num]; // Show the end number

            createjs.Tween.get(container_outer)
                .to({
                    rotation: numRotations,
                    rotationDir: 1
                })
                .call(function () {
                    container_outer.mode = 0;
                });
        }


        // MIDDLE WHEEL
        var middle_random;
        if (container_middle.mode == 0) {
            container_middle.mode = 1;
        } else if (container_middle.mode == 1) {
            container_middle.mode = 2;

            // Slow down. Find the end angle, and tween to it
            middle_random = Math.random() * segments_outer | 0, // Choose a number,
                angleR = angle * 180 / Math.PI, // Angle in degrees
                adjusted = (container_middle.rotation - 360), // Add to the current rotation
                numRotations = Math.ceil(adjusted / 360) * 360 - middle_random * angleR - angleR / 2; // Find the final number.

            num_middle.text = middle_text[middle_random]; // Show the end number

            createjs.Tween.get(container_middle)
                .to({
                    rotation: numRotations,
                    rotationDir: 1
                }, 3000, createjs.Ease.cubicOut)
                .call(function () {
                    container_middle.mode = 0;
                });
        }




        // INNER WHEEL


        var inner_random;
        if (container_inner.mode == 0) {
            container_inner.mode = 1;
        } else if (container_inner.mode == 1) {
            container_inner.mode = 2;

            // Slow down. Find the end angle, and tween to it
            inner_random = Math.random() * segments_inner | 0, // Choose a number,
                angleR = angle * 180 / Math.PI, // Angle in degrees
                adjusted = (container_inner.rotation + 360), // Add to the current rotation
                numRotations = Math.ceil(adjusted / 360) * 360 - inner_random * angleR - angleR / 2; // Find the final number.


            createjs.Tween.get(container_inner)
                .to({
                    rotation: numRotations,
                    rotationDir: 1
                }, 5000, createjs.Ease.cubicOut)
                .call(function () {
                    stopCenterAnimation = true
                    num_inner.x = rounded_container.x + 60
                    num_inner.text = outer_text[outer_random] + '' + middle_text[middle_random] + '' + inner_text[inner_random]; // Show the end number
                    container_inner.mode = 0;
                });
        }


        //----------------END----------------------

    };


    function tick2(event) {
        console.log(event)
        if (container_middle.mode == 1) {
            container_middle.rotation -= 10; // Rotate if mode 1
        }
        stage_second.update(event);
    }

    function tick(event) {
        if (!stopCenterAnimation) {
            num_inner.x = num_inner.x - (event.delta) / 1000 * 100;
            if (num_inner.x < -60) { num_inner.x = num_inner.x + 400; }
            // if (num_inner.x > stage_roundedCanvas.canvas.width) { num_inner.x = 0; }
        }




        if (container_inner.mode == 1) {
            container_inner.rotation += 10; // Rotate if mode 1
        }

        if (container_middle.mode == 1) {
            container_middle.rotation -= 10; // Rotate if mode 1
        }

        if (container_outer.mode == 1) {
            container_outer.rotation += 10; // Rotate if mode 1
        }

        stage_second.update(event);

        stage_first.update(event);

        stage_third.update(event);

        stage_roundedCanvas.update(event);
    }
    /* setTimeout(()=>{
    tick();
    tick2();
    },5000) */



}