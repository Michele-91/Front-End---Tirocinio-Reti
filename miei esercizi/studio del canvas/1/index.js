
function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // draw several squares
        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);

        // draw a triangle
        // ctx.beginPath();
        // ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();

        // draw a smiley face
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        // ctx.stroke();

        // filled triangle
        // ctx.beginPath();
        // ctx.moveTo(25, 25);
        // ctx.lineTo(105, 25);
        // ctx.lineTo(25, 105);
        // ctx.fill();

        // stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();   


        // draw arcs
        // for(var i = 0; i < 4; i++) {
        //     for(var j = 0; j < 3; j++) {
        //         ctx.beginPath();
        //         var x = 25 + j * 50; // x coordinate
        //         var y = 25 + i * 50; // y coordinate
        //         var radius = 20; // Arc radius
        //         var startAngle = 0; // Starting point circle
        //         var endAngle = Math.PI + (Math.PI) * j / 2; // End point on circle
        //         var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

        //         ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        //         if (i > 1) {
        //             ctx.fill();
        //         } else {
        //             ctx.stroke();
        //         }
        //     }
        // }


        // draw Quadratic Bezier curves
        // ctx.beginPath();
        // ctx.moveTo(75, 75);
        // ctx.quadraticCurveTo(25, 25, 25, 62.5);
        // ctx.quadraticCurveTo(25, 100, 50, 100);
        // ctx.quadraticCurveTo(50, 120, 30, 125);
        // ctx.quadraticCurveTo(60, 120, 65, 100);
        // ctx.quadraticCurveTo(125, 100, 125, 62.5);
        // ctx.quadraticCurveTo(125, 25, 75, 25);
        // ctx.stroke();

        // draw Cubic Bezier curves
        // ctx.beginPath();
        // ctx.moveTo(75, 40);
        // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        // ctx.fill();


        // Path 2D
        // var rectangle = new Path2D();
        // rectangle.rect(10, 10, 50, 50);
        // var circle = new Path2D();
        // circle.moveTo(125, 35);
        // circle.arc(100, 35, 25, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fill(circle);


        // fillStyle
        // for( var i = 0; i < 6; i++) {
        //     for (var j = 0; j < 6; j++) {
        //         ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
        //                                  Math.floor(255 - 42.5 * j) + ', 0)';
        //         ctx.fillRect(j * 25, i * 25, 25, 25);
        //     }
        // }


        // strokeStyle
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
                    Math.floor(255 - 42.5 * j) + ')';
                ctx.beginPath();
                ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
                ctx.stroke();
            }
        }
    }

}

window.addEventListener("load", function () {
    draw();
});
