
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>𓂀 ∆Ω-Realm</title>
  <style>
    body {
      margin: 0;
      background: black;
      overflow: hidden;
      font-family: monospace;
    }

    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .center-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #cc66ff;
    }

    .secret-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #a833ff;
      color: #99ffcc;
      font-size: 24px;
      padding: 10px 20px;
      margin: 10px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Segoe UI Symbol', monospace;
      text-shadow: 0 0 5px #66ffcc;
    }

    .secret-btn:hover {
      background: #330044;
      box-shadow: 0 0 10px #99ffcc;
    }
  </style>
</head>
<body>

<canvas id="matrixCanvas"></canvas>

<div class="center-content">
  <button class="secret-btn">𓂀</button>
  <button class="secret-btn">𒀭</button>
  <button class="secret-btn">𓊽</button>
  <button class="secret-btn">𒁃</button>
  <p style="color:#ccffcc; font-size: 12px; margin-top: 20px;">▧ اضغط أحد الرموز لتكشف عن الطبقة التالية ▧</p>
</div>

<script>
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = '𓂀𓊽𒀭𒁃 ∆ Ω µ ⌘ ⟁ ₯ Ξ ψ ∞ Ϟ ✱ ✶ ✧ ⊡ ⧖'.split('');
  const fontSize = 18;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#cc66ff'; // بنفسجي مشع
    ctx.shadowColor = '#99ffcc';
    ctx.shadowBlur = 4;
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
</script>

</body>
</html>
