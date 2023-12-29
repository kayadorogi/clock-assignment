function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(255);

    let hr = hour();
    let mn = minute();
    let sc = second();

    let hourDiameter = map(hr % 12, 0, 12, 10, 200);
    let minuteDiameter = map(mn, 0, 60, 10, 200);
    let secondDiameter = map(sc, 0, 60, 10, 200);

    let yPosHour = (height / 6);
    let yPosMinute = height / 2;
    let yPosSecond = (5 * height / 6);

    drawCircle(width / 2, yPosHour, 200, 'rgba(9, 13, 43, 0.3)'); // Hour
    drawCircle(width / 2, yPosMinute, 200, 'rgba(24, 34, 110, 0.3)'); // Minute
    drawCircle(width / 2, yPosSecond, 200, 'rgba(47, 70, 235, 0.3)'); // Second

    drawCircle(width / 2, yPosHour, hourDiameter, 'rgba(9, 13, 43, 0.9)'); // Hour
    drawCircle(width / 2, yPosMinute, minuteDiameter, 'rgba(24, 34, 110, 0.9)'); // Minute
    drawCircle(width / 2, yPosSecond, secondDiameter, 'rgba(47, 70, 235, 0.9)'); // Second
}

function drawCircle(x, y, diameter, color) {
    fill(color);
    noStroke();
    ellipse(x, y, diameter, diameter);
}
