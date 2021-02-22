let centerWheel = new Winwheel({
    'outerRadius': 40,        // Set the outer radius to make the wheel smaller than the outer wheel.
    'innerRadius': 0,         // Make wheel hollow so segments don't go all way to center.
    'numSegments': 1,
    'rotationAngle':180,
    'textAlignment': 'outer',
    'textFontSize': 20,
    'textFontFamily': 'Courier',
    'textOrientation': 'curved',
    // 'textOrientation': 'vertical', // Make text vertial so goes down from the outside of wheel.
    'segments': [
        { 'fillStyle': 'yellow', 'textFontWeight': 'bold', 'text': 'SPIN' },
    ],
    'animation':
    {
        'type': 'spinToStop',                     // Define animation more or less as normal, except for the callbackAfter().
        'duration': 3,
        'spins': 5,
        'easing': 'Power3.easeOut',
        'callbackFinished': alertPrize3
    }
});
let innerWheel = new Winwheel({
    'outerRadius': 70,        // Set the outer radius to make the wheel smaller than the outer wheel.
    'innerRadius': 40,         // Make wheel hollow so segments don't go all way to center.
    'numSegments': 8,
    'textAlignment': 'outer',
    'textFontSize': 20,
    'textFontFamily': 'Courier',
    'textOrientation': 'curved',
    // 'textOrientation': 'vertical', // Make text vertial so goes down from the outside of wheel.
    'segments': [
        { 'fillStyle': '#89f26e', 'text': '2' },
        { 'fillStyle': '#eae56f', 'text': '5' },
        { 'fillStyle': '#eae56f', 'text': '1' },
        { 'fillStyle': '#e7706f', 'text': '4' },
        { 'fillStyle': '#7de6ef', 'text': '7' },
        { 'fillStyle': '#89f26e', 'text': '6' },
        { 'fillStyle': '#7de6ef', 'text': '3' },
        { 'fillStyle': '#e7706f', 'text': '8' },
    ],
    'animation':
    {
        'type': 'spinToStop',                     // Define animation more or less as normal, except for the callbackAfter().
        'duration': 3,
        'spins': 5,
        'easing': 'Power3.easeOut',
        'callbackFinished': alertPrize3
    }
});

console.log("innerWheel", innerWheel)
// Define the outer wheel, we will treat this as the PRIMARY which means it clears the canvas when drawing and also
// gets the animaton applied to it. We must callback a function during the animation to move and draw the inner wheel
// so the 2 wheels appear as one thing on the canvas.
let middleWheel = new Winwheel({
    'numSegments': 8,
    // 'textAlignment': 'outer',
    // 'outerRadius': 170,        // Set the outer radius to make the wheel smaller than the outer wheel.

    'fillStyle': '#e7706f',
    'outerRadius': 100,
    'innerRadius': 70,             // The larger the inner radius, the bigger the
    'textFontSize': 20,             // hollow space inside the wheel.
    'textMargin': 0,
    'textFontFamily': 'Courier',
    'textOrientation': 'curved',
    'segments': [
        { 'fillStyle': '#7de6ef', 'text': '3' },
        { 'fillStyle': '#eae56f', 'text': '5' },
        { 'fillStyle': '#89f26e', 'text': '6' },
        { 'fillStyle': '#eae56f', 'text': '1' },
        { 'fillStyle': '#e7706f', 'text': '8' },
        { 'fillStyle': '#89f26e', 'text': '2' },
        { 'fillStyle': '#e7706f', 'text': '4' },
        { 'fillStyle': '#7de6ef', 'text': '7' },
    ],
    'animation':
    {
        'type': 'spinToStop',                     // Define animation more or less as normal, except for the callbackAfter().
        'duration': 3,
        'spins': 5,
        'easing': 'Power3.easeOut',
        'callbackFinished': alertPrize2
    }
});
// Define the outer wheel, we will treat this as the PRIMARY which means it clears the canvas when drawing and also
// gets the animaton applied to it. We must callback a function during the animation to move and draw the inner wheel
// so the 2 wheels appear as one thing on the canvas.
let outerWheel = new Winwheel({
    'numSegments': 8,
    'pointerAngle': 0,    // Ensure this is set correctly
    'textMargin': 0,
    'canvasId': 'canvas',
    // 'textAlignment': 'outer',
    // 'outerRadius' : 220,
    // 'innerRadius' : 110,    // Set inner radius to the size of the inner wheel since the inner part of the wheel




    'fillStyle': '#e7706f',
    'outerRadius': 130,
    'innerRadius': 100,             // The larger the inner radius, the bigger the
    'textFontSize': 20,             // hollow space inside the wheel.
    'textMargin': 0,
    'textFontFamily': 'Courier',
    'textOrientation': 'curved',
    // 'pointerGuide':        // Turn pointer guide on.
    // {
    //     'display': true,
    //     'strokeStyle': 'red',
    //     'lineWidth': 3
    // },
    // 'pins':    // Specify pin parameters.
    // {
    //     'number': 48,
    //     'outerRadius': 5,
    //     'margin': 10,
    //     'fillStyle': '#7734c3',
    //     'strokeStyle': '#ffffff'
    // },
    'segments': [           //   is being drawn by the inner wheel we don't need to draw there.
        { 'fillStyle': '#4B898F', 'text': '5' },
        { 'fillStyle': '#8C8A42', 'text': '1' },
        { 'fillStyle': '#B1EFF5', 'text': '6' },
        { 'fillStyle': '#B7F7A8', 'text': '4' },
        { 'fillStyle': '#F2F0A8', 'text': '2' },
        { 'fillStyle': '#8A4342', 'text': '7' },
        { 'fillStyle': '#519142', 'text': '3' },
        { 'fillStyle': '#F0A9A8', 'text': '8' }
    ],
    'animation':
    {
        'type': 'spinToStop',                     // Define animation more or less as normal, except for the callbackAfter().
        'duration': 3,
        'spins': 5,
        'easing': 'Power3.easeOut',
        'callbackAfter': drawInnerWheel,     // Call back after each frame of the animation a function we can draw the inner wheel from.
        'callbackFinished': alertPrize1,

    }

});

// Call draw on the outerWheel then the inner wheel to ensure that both are rendered on the canvas.
outerWheel.draw();
middleWheel.draw(false);
innerWheel.draw(false);   // Pass false to stop it clearing the canvas and wiping the outer wheel.
centerWheel.draw(false);   // Pass false to stop it clearing the canvas and wiping the outer wheel.









document.getElementById("spinWheel").addEventListener("click", wheelSpin);
document.getElementById("resetWheel").addEventListener("click", wheelReset);
var spinning =  false
function wheelSpin() {
    spinning = true
    outerWheel.startAnimation(true);
    middleWheel.startAnimation(true);
    innerWheel.startAnimation(true);
    centerWheel.startAnimation(true);

    startSpin();
}
function wheelReset() {
    outerWheel.stopAnimation(true);
    middleWheel.stopAnimation(true);
    innerWheel.stopAnimation(true);
    centerWheel.stopAnimation(true);

    // Reset the rotation angle to less than or equal to 360 so spinning again works as expected.
    // Setting to modulus (%) 360 keeps the current position.
    outerWheel.rotationAngle = 0
    middleWheel.rotationAngle = 0
    innerWheel.rotationAngle = 0
    centerWheel.rotationAngle = 180

    outerWheel.draw();
    middleWheel.draw(false);
    innerWheel.draw(false);   // Pass false to stop it clearing the canvas and wiping the outer wheel.
    centerWheel.draw(false);   // Pass false to stop it clearing the canvas and wiping the outer wheel.

}




// This function is called after the outer wheel has drawn during the animation.
function drawInnerWheel() {
    // Update the rotationAngle of the innnerWheel to match that of the outer wheel - this is a big part of what
    // links them to appear as one 2-part wheel. Call the draw function passing false so the outer wheel is not wiped.
    middleWheel.rotationAngle = -outerWheel.rotationAngle;

    middleWheel.draw(false);


    innerWheel.rotationAngle = outerWheel.rotationAngle;
    innerWheel.draw(false);

    centerWheel.rotationAngle = 180;
    centerWheel.draw(false);
}

// Called when the outer animation has finished.
function alertPrize1() {
    // alert(0)
    let winningOuterSegment = outerWheel.getIndicatedSegment();
    // document.getElementById('outer').innerHTML = winningOuterSegment.text

    let winningMiddleSegment = middleWheel.getIndicatedSegment();
    // document.getElementById('middle').innerHTML = winningMiddleSegment.text

    let winningInnerSegment = innerWheel.getIndicatedSegment();
    // document.getElementById('inner').innerHTML = winningInnerSegment.text
    centerWheel.segments[1].text = ''
    centerWheel.segments[1].text = winningOuterSegment.text+ winningMiddleSegment.text+ winningInnerSegment.text
    centerWheel.draw(false);

}
// Called when the middle  animation has finished.
function alertPrize2() {

    let winningMiddleSegment = middleWheel.getIndicatedSegment();
    // document.getElementById('middle').innerHTML = winningMiddleSegment.text

}
// Called when the inner animation has finished.
function alertPrize3() {
    // The the indicated segments from the 2 wheels.
    let winningInnerSegment = innerWheel.getIndicatedSegment();
    // document.getElementById('inner').innerHTML = winningInnerSegment.text

    // Alert the combination of prizes won.
    // alert('You won ' + winningInnerSegment.text + ', ' + winningOuterSegment.text);

    // Set things so power and spin button can be clicked again.
    wheelSpinning = false;

    // Remove all colours from the power level indicators.
}


// ================================================================================================================
// FUNCTIONS FOR power controls below (All this is not necessary to actually create and spin a wheel)....
// Vars used by the code in this page to do power controls.
let wheelPower = 0;
let wheelSpinning = false;



// Draw pointer on canvas, this time on the right.
function drawColourTriangle() {
    // Get context used by the wheel.
    let ctx = outerWheel.ctx;

    ctx.strokeStyle = 'navy';  // Set line colour.
    ctx.fillStyle = 'aqua';  // Set fill colour.
    ctx.lineWidth = 2;
    ctx.beginPath();           // Begin path.

    ctx.moveTo(390, 174);      // Move to initial position.
    ctx.lineTo(390, 226);      // Draw lines to make the shape.
    ctx.lineTo(360, 200);
    ctx.lineTo(390, 175);
    ctx.stroke();              // Complete the path by stroking (draw lines).
    ctx.fill();
}

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
function powerSelected(powerLevel) {
    // Ensure that power can't be changed while wheel is spinning.
    if (wheelSpinning == false) {
        // Reset all to grey incase this is not the first time the user has selected the power.
        document.getElementById('pw1').className = "";
        document.getElementById('pw2').className = "";
        document.getElementById('pw3').className = "";

        // Now light up all cells below-and-including the one selected by changing the class.
        if (powerLevel >= 1) {
            document.getElementById('pw1').className = "pw1";
        }

        if (powerLevel >= 2) {
            document.getElementById('pw2').className = "pw2";
        }

        if (powerLevel >= 3) {
            document.getElementById('pw3').className = "pw3";
        }

        // Set wheelPower var used when spin button is clicked.
        wheelPower = powerLevel;

        // Light up the spin button by changing it's source image and adding a clickable class to it.
        // document.getElementById('spin_button').src = "spin_on.png";
        // document.getElementById('spin_button').className = "clickable";
    }
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin() {
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        // Reset things with inner and outer wheel so spinning will work as expected. Without the reset the
        // wheel will probably just move a small amount since the rotationAngle would be close to the targetAngle
        // figured out by the animation.
        outerWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
        outerWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        outerWheel.draw();



        middleWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
        middleWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        middleWheel.draw();








        // Call draw to render changes to the wheel.
        innerWheel.rotationAngle = 0;
        innerWheel.draw(false);

        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
        // to rotate with the duration of the animation the quicker the wheel spins.
        // if (wheelPower == 1) {
        //     outerWheel.animation.spins = 3;     // Number of spins and/or duration can be altered to make the wheel
        //     outerWheel.animation.duration = 7;  // appear to spin faster or slower.


        //     // middleWheel.animation.spins = 2;     // Number of spins and/or duration can be altered to make the wheel
        //     // middleWheel.animation.duration = 4;  // appear to spin faster or slower.


        // } else if (wheelPower == 2) {
        //     outerWheel.animation.spins = 8;
        //     outerWheel.animation.duration = 7;
        // } else if (wheelPower == 3) {
        //     outerWheel.animation.spins = 15;
        // }
        outerWheel.animation.spins = 5;     // Number of spins and/or duration can be altered to make the wheel
        outerWheel.animation.duration = 3;  // appear to spin faster or slower.

        middleWheel.animation.spins = 5;     // Number of spins and/or duration can be altered to make the wheel
        middleWheel.animation.duration = 5;  // appear to spin faster or slower.

        // Begin the spin animation by calling startAnimation on the wheel object.
        middleWheel.startAnimation();


        // Disable the spin button so can't click again while wheel is spinning.
        // document.getElementById('spin_button').src = "spin_off.png";
        // document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        outerWheel.startAnimation();



        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
    
}


// animate()

var pattern = new Image();

function animate() {
    pattern.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    setInterval(drawShape, 100);
}

function drawShape() {

    // get the canvas element using the DOM
    var canvas = document.getElementById('canvas');

    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext) {

        // use getContext to use the canvas for drawing
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)';
        ctx.save();
        ctx.translate(150, 150);

        var time = new Date();
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(0, 28.5);
        ctx.drawImage(pattern, -3.5, -3.5);
        ctx.restore();
    } else {
        alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
}






var jquery = require('jquery');
var $ = jquery;
var Time = 5
var timeInterval;

// require('popper.js');
// require("bootstrap");
// require('greensock');


// function resize(){    
//     $("#outer-canvas").outerHeight();
//     $("#middle-canvas").outerHeight();
//     $("#inner-canvas").outerHeight();
//   }
  
$(window).on('load', () => {
    secondsCounter();
});

// $(document).ready(function(){
//     resize();
//     $(window).on("resize", function(){                      
//         resize();
//     });
//   });



function secondsCounter() {
    let remainingSeconds = document.getElementById("timing");
    timeInterval =  setInterval( () => {
        if(Time > 0) {
            Time --;
            remainingSeconds.innerHTML = Time;
        } else {
            // startSpin();
            clearInterval(timeInterval);
        }

    }, 1000)
}





// var outerWheelOptions = ['0', '6', '4', '7', '3', '8', '2', '9', '1', '5'];
// var middleWheelOptions = ['1', '5', '0', '6', '4', '7', '3', '8', '2', '9'];
// var innerWheelOptions = ['9', '1', '5', '0', '6', '4', '7', '3', '8', '2'];

// var startAngleOuterWheel = 0;
// var startAngleMiddleWheel = 0;
// var startAngleInnerWheel = 0;
// var arc = Math.PI / (outerWheelOptions.length / 2);
// var outerWheelSpinTimeout = null;
// var middleWheelSpinTimeout = null;
// var innerWheelSpinTimeout = null;


// var spinArcStart = 10;
// var spinTime = 0;
// var spinTimeTotal = 0;
// var output = ''
// var ctx;
// var ctx1;
// var ctx2;

// document.getElementById("spin").addEventListener("click", spin);

// function drawOuterRouletteWheel() {
//     var canvas = document.getElementById("outer-canvas");
//     if (canvas.getContext) {
//         var outsideRadius = 150;
//         var textRadius = 130;
//         var insideRadius = 120;

//         ctx = canvas.getContext("2d");
//         ctx.clearRect(0, 0, 500, 500);

//         ctx.strokeStyle = "#d69b0b";

//         ctx.lineWidth = 8;

//         ctx.font = '20px Arial';

//         for (var i = 0; i < outerWheelOptions.length; i++) {
//             // var angle = startAngleOuterWheel + i * arc;
//             var angle = startAngleOuterWheel + i * arc;
//             ctx.fillStyle = "#cc2f2d";

//             ctx.beginPath();
//             ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
//             ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
//             ctx.stroke();
//             ctx.fill();
            
//             ctx.save();
//             ctx.shadowOffsetX = -1;
//             ctx.shadowOffsetY = -1;
//             ctx.shadowBlur = 0;
//             ctx.shadowColor = "#00000036";
//             ctx.fillStyle = "white";
//             ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
//                 250 + Math.sin(angle + arc / 2) * textRadius);
//             ctx.rotate(angle + arc / 2 + Math.PI / 2);
//             var text = outerWheelOptions[i];
//             ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
//             ctx.restore();
//         }

//         //Arrow
//         ctx.fillStyle = "#000";
//         ctx.beginPath();
//         ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
//         ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
//         ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
//         ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
//         ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
//         ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
//         ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
//         ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
//         ctx.fill();
//     }
// }

// function drawMiddleRouletteWheel() {
//     var middleCanvas = document.getElementById("middle-canvas");
//     if (middleCanvas.getContext) {
//         var outsideRadius = 120;
//         var textRadius = 98;
//         var insideRadius = 90;

//         ctx1 = middleCanvas.getContext("2d");
//         ctx1.clearRect(0, 0, 500, 500);

//         // ctx1.strokeStyle = "black";
//         ctx1.strokeStyle = "#d69b0b";

//         ctx1.lineWidth = 8;

//         ctx1.font = '20px Arial';

//         for (var i = 0; i < middleWheelOptions.length; i++) {
//             var angle = startAngleMiddleWheel + i * arc;
//             let rounOfArc = Math.round(arc)
//             for (var j = 0;j < rounOfArc;j++){

//                 ctx1.fillStyle = "#FACC40";
//                 ctx1.beginPath();
//                 ctx1.arc(250, 250, outsideRadius, angle+j, angle + arc+j, false);
//                 ctx1.arc(250, 250, insideRadius, angle+j + arc, angle+j, true);
//                 ctx1.stroke();
//                 ctx1.fill();
    
//             }
//             ctx1.save();
//             ctx1.shadowOffsetX = -1;
//             ctx1.shadowOffsetY = -1;
//             ctx1.shadowBlur = 0;
//             ctx1.shadowColor = "#00000036";
//             ctx1.fillStyle = "white";
//             ctx1.translate(250 + Math.cos(angle + arc / 2) * textRadius,
//                 250 + Math.sin(angle + arc / 2) * textRadius);
//             ctx1.rotate(angle + arc / 2 + Math.PI / 2);
//             var text = middleWheelOptions[i];
//             ctx1.fillText(text, -ctx1.measureText(text).width / 2, 0);
//             ctx1.restore();
//         }
//     }
// }

// function drawInnerRouletteWheel() {
//     var innerCanvas = document.getElementById("inner-canvas");
//     if (innerCanvas.getContext) {
//         var outsideRadius = 90;
//         var textRadius = 65;
//         var insideRadius = 60;

//         ctx2 = innerCanvas.getContext("2d");
//         ctx2.clearRect(0, 0, 500, 500);

//         ctx2.strokeStyle = "#d69b0b";

//         ctx2.lineWidth = 8;

//         ctx2.font = '20px Arial';

//         for (var i = 0;i < innerWheelOptions.length;i++) {
//             var angle = startAngleInnerWheel + i * arc;
//             ctx2.fillStyle = "#7F5797";
            
//             ctx2.beginPath();
//             ctx2.arc(250, 250, outsideRadius, angle, angle + arc, false, "#d69b0b");
//             ctx2.arc(250, 250, insideRadius, angle + arc, angle, true, "#d69b0b");
//             ctx2.stroke();
//             ctx2.fill();

//             ctx2.save();
//             ctx2.shadowOffsetX = 1;
//             ctx2.shadowOffsetY = 1;
//             ctx2.shadowBlur = 0;
//             ctx2.shadowColor = "rgb(220,220,220)";
//             ctx2.fillStyle = "white";
//             ctx2.translate(250 + Math.cos(angle + arc / 2) * textRadius,
//                 250 + Math.sin(angle + arc / 2) * textRadius);
//             ctx2.rotate(angle + arc / 2 + Math.PI / 2);
//             var text = innerWheelOptions[i];
//             ctx2.fillText(text, -ctx2.measureText(text).width / 2, 0);
//             ctx2.restore();
//         }
//     }
// }

function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    let rotationTime = 5

    // rotateOuterWheel();
    // rotateMiddleWheel();
    // rotateInnerWheel();

    let rotationInterval = setInterval(() => {

        if(rotationTime > 0) {
            rotationTime--;
        }
        if(rotationTime == 3) {
            stopRotateOuterWheel();
        }
        if (rotationTime == 2) {
            stopRotateMiddleWheel();
        } 
        if (rotationTime == 0){
            clearInterval(rotationInterval);
            stopRotateInnerWheel();
        }
    }, 1000)
}

// function rotateOuterWheel() {
//     var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
//     startAngleOuterWheel += arc
//     drawOuterRouletteWheel();
//     outerWheelSpinTimeout = setTimeout('rotateOuterWheel()', 50);
// }

// function rotateMiddleWheel() {

//     var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
//     startAngleMiddleWheel += arc
//     drawMiddleRouletteWheel();
//     middleWheelSpinTimeout = setTimeout('rotateMiddleWheel()', 100);
// }

// function rotateInnerWheel() {
//     var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
//     // startAngle += (spinAngle * Math.PI / 180);
//     startAngleInnerWheel += arc
//     drawInnerRouletteWheel();
//     innerWheelSpinTimeout = setTimeout('rotateInnerWheel()', 110);
// }

// function stopRotateOuterWheel() {
//     clearTimeout(outerWheelSpinTimeout);
//     var degrees = startAngleOuterWheel * 180 / Math.PI + 90;
//     var arcd = arc * 180 / Math.PI;
//     var index = Math.floor((360 - degrees % 360) / arcd);
//     ctx.save();
//     ctx.font = '40px Helvetica, Arial';
//     var text = outerWheelOptions[index]
//     ctx2.fillStyle = "black";
//     output += text
//     ctx.fillText(text, 220 - ctx.measureText(text).width / 2, 250 + 10);
//     ctx.restore();
// }

// function stopRotateMiddleWheel() {
//     clearTimeout(middleWheelSpinTimeout);
//     var degrees = startAngleMiddleWheel * 180 / Math.PI + 90;
//     var arcd = arc * 180 / Math.PI;
//     var index = Math.floor((360 - degrees % 360) / arcd);
//     ctx1.save();
//     ctx1.font = '40px Helvetica, Arial';
//     var text = middleWheelOptions[index]
//     ctx1.fillStyle = "black";
//     output += text
//     ctx1.fillText(text, 250 - ctx1.measureText(text).width / 2, 250 + 10);
//     ctx1.restore();
// }

// function stopRotateInnerWheel() {
//     clearTimeout(innerWheelSpinTimeout);
//     var degrees = startAngleInnerWheel * 180 / Math.PI + 90;
//     var arcd = arc * 180 / Math.PI;
//     var index = Math.floor((360 - degrees % 360) / arcd);
//     ctx2.save();
//     ctx2.font = '40px Helvetica, Arial';
//     var text = innerWheelOptions[index]
//     ctx2.fillStyle = "black";
//     output += text
//     ctx2.fillText(text, 280 - ctx2.measureText(text).width / 2, 250 + 10);
//     ctx2.restore();
// }

// function easeOut(t, b, c, d) {
//     var ts = (t /= d) * t;
//     var tc = ts * t;
//     return b + c * (tc + -3 * ts + 3 * t);
// }

// // drawOuterRouletteWheel();
// drawMiddleRouletteWheel();
// // drawInnerRouletteWheel();

// // Loads the audio sound in to an audio object.
// var audio = new Audio('./assets/audio/casino.mp3');

// // This function is called when the sound is to be played.
// function playSound() {
//     // Stop and rewind the sound if it already happens to be playing.
//     try {
        
//         // audio.pause();
//         audio.currentTime = 0;
//         // Play the sound.
//         audio.play()
//     } catch (error) {
//         console.log(error);
//     }
// }

