<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>∆Ω-Unit.404</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #0f2d1f;
        font-family: monospace;
        color: #fff;
        overflow-x: hidden;
      }

      .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-image: repeating-linear-gradient(
          0deg,
          rgba(0, 255, 128, 0.1) 0px,
          rgba(0, 255, 128, 0.1) 2px,
          transparent 2px,
          transparent 4px
        );
        animation: flicker 5s infinite alternate;
      }

      @keyframes flicker {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0.95;
        }
      }

      .title {
        text-align: center;
        margin-top: 50px;
        font-size: 2.5em;
        color: #ff00ff;
        text-shadow: 0 0 10px #ff00ff;
      }

      .symbols {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 20px;
      }

      .symbol-row {
        display: flex;
        gap: 30px;
      }

      .symbol {
        padding: 20px;
        border: 2px solid #00ffaa;
        border-radius: 10px;
        color: #00ffaa;
        font-size: 1.5em;
        text-align: center;
        transition: transform 0.2s;
      }

      .symbol:hover {
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: 0 0 15px #00ffaa;
      }

      .footer-text {
        text-align: center;
        margin-top: 40px;
        font-size: 1em;
        color: #ccc;
      }
    </style>
  </head>
  <body>
    <div class="background"></div>

    <div class="title">∆Ω-<br />Unit.404</div>

    <div class="symbols">
      <div class="symbol-row">
        <div class="symbol">𓂀</div>
      </div>
      <div class="symbol-row">
        <div class="symbol">✴</div>
        <div class="symbol">♜</div>
      </div>
      <div class="symbol-row">
        <div class="symbol">〄〄〄</div>
      </div>
    </div>

    <div class="footer-text">اضغط أحد الرموز لتكشف عن الطبقة التالية ☰</div>
  </body>
</html>
