const geoCanvas = document.getElementById("geometry");
const geoCtx = geoCanvas.getContext("2d");
geoCanvas.width = window.innerWidth;
geoCanvas.height = window.innerHeight;
geoCanvas.style.position = "absolute";
geoCanvas.style.zIndex = 1;
geoCanvas.style.top = "0";
geoCanvas.style.left = "0";
geoCanvas.style.pointerEvents = "none";

let angle = 0;

function drawGeometry() {
  geoCtx.clearRect(0, 0, geoCanvas.width, geoCanvas.height);
  geoCtx.strokeStyle = "rgba(255, 0, 128, 0.3)";
  geoCtx.lineWidth = 1;

  geoCtx.beginPath();
  for (let i = 0; i < 360; i += 10) {
    const rad = (i * Math.PI) / 180;
    const x = geoCanvas.width / 2 + Math.cos(rad + angle) * 100;
    const y = geoCanvas.height / 2 + Math.sin(rad + angle) * 100;
    geoCtx.lineTo(x, y);
  }
  geoCtx.closePath();
  geoCtx.stroke();

  angle += 0.01;
  requestAnimationFrame(drawGeometry);
}

drawGeometry();
