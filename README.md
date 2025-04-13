<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Σx∞_OBL!V1ØN</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: black;
      font-family: monospace;
      color: #00ff99;
    }

    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      color: #00ff99;
      text-shadow: 0 0 10px #00ff99;
      letter-spacing: 4px;
      margin-bottom: 1rem;
    }

    .glitch-text {
      font-size: 1.2rem;
      animation: flicker 2s infinite;
      color: #ff0044;
      text-shadow: 0 0 5px #ff0044;
    }

    @keyframes flicker {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    button {
      margin-top: 2rem;
      background: none;
      border: 1px solid #00ff99;
      color: #00ff99;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover {
      background: #00ff99;
      color: black;
    }

    .hidden-box {
      margin-top: 2rem;
      padding: 1rem;
      border: 1px dashed #00ff99;
      color: #ccc;
      display: none;
      font-size: 0.9rem;
      width: 80%;
      max-width: 500px;
    }
  </style>
</head>
<body>
  <canvas id="matrixCanvas"></canvas>

  <div class="content">
    <h1>Σx∞_OBL!V1ØN</h1>
    <div class="glitch-text">:: [ACCESS CODE] :: ☢ ✶ ✱ △ ::</div>
    <button onclick="reveal()">Decode Signal</button>
    <div id="hidden" class="hidden-box">
      <p><strong>Ϟ Initiate Protocol: Δ-RΞVELATION</strong></p>
      <p>“ƧƐƐƙ ɬҺɛ ʄʟąƨɧ ơʄ ɬཞųɬɧ ɬཞąƞƨƈɛƞɗıŋɠ ƈơɗɛ…”</p>
      <p>[TRANSMISSION: φ$#∇-ENCRYPTED]</p>
    </div>
  </div>

  <script>
    function reveal() {
      document.getElementById("hidden").style.display = "block";
    }

    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = 'アァイィウエカガキギクグケゲコサザシジスズセゼソタチッツトナニヌネノハバパヒビピフブプホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = Array.from({ length: columns }).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff99';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 33);
  </script>
</body>
</html>
<script>
  function reveal() {
    document.getElementById("hidden").style.display = "block";
  }

  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = '҉₳₿₪ΣΞЖψ∇∞∴∵⊗⟁⟁⧉⧖⊡⊘╳☡⟁☢⌘⌬≠≡ΩµɅ∆Ϟ✶✱✦✧𓂀𓆏𓅓𓊽';
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);

  const drops = Array.from({ length: columns }).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff99';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 40);
</script>
