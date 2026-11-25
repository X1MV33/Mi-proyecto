// Flyer "Match Day" con la jugadora (estilo editorial oscuro, B/N con acentos rojos)
const { chromium } = require('playwright'); const fs = require('fs');
const D = __dirname, b64 = f => 'data:image/png;base64,' + fs.readFileSync(D + '/' + f).toString('base64');
const JUG = b64('jugadora/jugadora-bn.png'), BL = b64('logo-blacks.png'), LE = b64('logo-leales.png');
const W = 1080, H = 1920;
const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;600&family=Great+Vibes&display=block" rel="stylesheet">
<style>*{margin:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;background:#0B0B0C;font-family:Oswald,sans-serif;color:#F2F0EC;position:relative}
.bg{position:absolute;inset:0;background:radial-gradient(60% 40% at 50% 46%,#2A2A2C 0,#121213 55%,#070707 100%)}
.floor{position:absolute;left:-10%;right:-10%;bottom:0;height:34%;background:radial-gradient(60% 70% at 50% 0%,#2C2C2E 0,#111 60%,#070707 100%);filter:url(#n)}
.bokeh{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.35),rgba(255,255,255,0) 70%)}
.redglow{position:absolute;left:50%;top:44%;width:900px;height:900px;margin:-450px 0 0 -450px;border-radius:50%;background:radial-gradient(circle,rgba(200,20,30,.28),rgba(200,20,30,0) 65%)}
.ghost{position:absolute;left:-60px;right:-60px;top:640px;text-align:center;font-family:Anton,sans-serif;font-size:520px;line-height:1;color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.07);letter-spacing:-.01em}
.match{position:absolute;left:0;right:0;top:760px;text-align:center;font-family:Anton,sans-serif;font-size:430px;line-height:1;letter-spacing:-.01em;
  background:linear-gradient(180deg,#F4F1EA 0,#E2DDD3 60%,#B9B3A8 100%);-webkit-background-clip:text;color:transparent}
.match.front{color:transparent;background:none;-webkit-text-stroke:2.5px rgba(244,241,234,.85)}
.day{position:absolute;right:120px;top:1100px;font-family:"Great Vibes",cursive;font-size:170px;line-height:1;color:#E02434;text-shadow:0 6px 18px rgba(0,0,0,.6);transform:rotate(-6deg)}
.jug{position:absolute;left:50%;bottom:150px;height:1330px;transform:translateX(-50%);filter:drop-shadow(0 30px 40px rgba(0,0,0,.7))}
.shadow{position:absolute;left:50%;bottom:120px;width:520px;height:70px;margin-left:-260px;border-radius:50%;background:radial-gradient(ellipse,rgba(0,0,0,.75),rgba(0,0,0,0) 70%)}
.info{position:absolute;left:110px;top:180px}
.info h2{font-weight:500;font-size:52px;line-height:1.12;letter-spacing:.06em}
.info h2 em{font-style:normal;color:#E02434}
.info p{margin-top:40px;font-weight:400;font-size:36px;line-height:1.35;letter-spacing:.08em;color:#D6D2CA}
.info p b{color:#fff;font-weight:600}
.logos{position:absolute;right:100px;top:175px;border:2px solid rgba(224,36,52,.85);padding:22px 26px;display:flex;gap:22px;align-items:center}
.logos img{width:120px;height:120px;border-radius:50%}
.logos i{font-style:normal;font-family:Anton,sans-serif;font-size:34px;color:#E02434}
.foot{position:absolute;left:110px;bottom:90px;font-weight:500;font-size:28px;letter-spacing:.32em;color:#BDB8AF}
.foot em{font-style:normal;color:#E02434}
.grain{position:absolute;inset:0;opacity:.16;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>")}
.vig{position:absolute;inset:0;background:radial-gradient(ellipse 80% 70% at 50% 50%,rgba(0,0,0,0) 55%,rgba(0,0,0,.65) 100%)}
</style></head><body>
<svg width="0" height="0" style="position:absolute"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="t"/><feColorMatrix type="saturate" values="0"/><feComposite in2="SourceGraphic" operator="in"/><feBlend in="SourceGraphic" mode="multiply"/></filter></svg>
<div class="bg"></div><div class="redglow"></div><div class="floor"></div>
${[[150, 1300, 70], [930, 1360, 50], [880, 1520, 34], [210, 600, 40], [960, 760, 60], [700, 1650, 26]].map(([x, y, r]) => `<div class="bokeh" style="left:${x - r}px;top:${y - r}px;width:${r * 2}px;height:${r * 2}px"></div>`).join('')}
<div class="ghost">MATCH</div>
<div class="match">MATCH</div>
<div class="shadow"></div>
<img class="jug" src="${JUG}">
<div class="match front">MATCH</div>
<div class="day">Day</div>
<div class="info"><h2>BLACK'S <em>VS</em><br>LEALES</h2><p>DÍA DE PARTIDO<br><b>CANCHA SAPRI</b><br>8:20 PM</p></div>
<div class="logos"><img src="${BL}"><i>VS</i><img src="${LE}"></div>
<div class="foot">VAMOS <em>BLACK'S</em></div>
<div class="grain"></div><div class="vig"></div>
</body></html>`;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  await p.setContent(html); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  await p.screenshot({ path: D + '/flyer-blacks-matchday.png' }); await b.close(); console.log('ok');
})();
