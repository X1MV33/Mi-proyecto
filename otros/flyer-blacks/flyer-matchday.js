// Flyer "Match Day" (réplica del estilo de referencia) con la jugadora en movimiento
const { chromium } = require('playwright'); const fs = require('fs');
const D = __dirname, b64 = f => 'data:image/png;base64,' + fs.readFileSync(D + '/' + f).toString('base64');
const JUG = b64('jugadora/jugadora-movimiento.png'), BL = b64('logo-blacks.png'), LE = b64('logo-leales.png');
const W = 1080, H = 1920, GOLD = '#E0973A';
const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Chakra+Petch:wght@400;500&family=Great+Vibes&display=block" rel="stylesheet">
<style>*{margin:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;background:#111112;position:relative;font-family:"Chakra Petch",sans-serif;color:#EDEBE7}
.bg{position:absolute;inset:0;background:radial-gradient(70% 45% at 50% 40%,#2B2B2C 0,#18181A 50%,#0D0D0E 100%)}
.turf{position:absolute;left:0;right:0;bottom:0;height:760px;-webkit-mask-image:linear-gradient(transparent,#000 40%);mask-image:linear-gradient(transparent,#000 40%);background:radial-gradient(80% 60% at 50% 0%,#2A2A2A 0,#141414 60%,#0A0A0A 100%)}
.turf::after{content:"";position:absolute;inset:0;opacity:.55;mix-blend-mode:screen;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='t'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.4 -.75'/></filter><rect width='100%' height='100%' filter='url(%23t)'/></svg>")}
.bokeh{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.28) 0,rgba(255,255,255,.08) 45%,rgba(255,255,255,0) 70%)}
.ghost{position:absolute;left:-200px;right:-200px;top:650px;text-align:center;font-family:Anton,sans-serif;font-size:560px;line-height:1;letter-spacing:-.02em;color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.08)}
.match{position:absolute;left:0;right:0;top:735px;text-align:center;font-family:Anton,sans-serif;font-size:400px;line-height:1;letter-spacing:-.01em;
  background:radial-gradient(40% 50% at 30% 40%,#FFFFFF 0,#E9E5DC 40%,#BDB7AB 100%);-webkit-background-clip:text;color:transparent}
.match.line{background:none;color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.75)}
.day{position:absolute;left:735px;top:1035px;font-family:"Great Vibes",cursive;font-size:150px;line-height:1;color:${GOLD};text-shadow:0 4px 14px rgba(0,0,0,.5)}
.jug{position:absolute;left:50%;top:400px;height:1330px;transform:translateX(-50%);opacity:.95;filter:brightness(1.18) contrast(1.12) drop-shadow(0 0 30px rgba(255,255,255,.06))}
.info{position:absolute;left:138px;top:178px;line-height:1.18}
.info h2{font-weight:400;font-size:40px;letter-spacing:.04em}
.info h2 em{font-style:normal;color:${GOLD}}
.info p{margin-top:36px;font-weight:400;font-size:29px;letter-spacing:.04em;line-height:1.25}
.logos{position:absolute;left:760px;top:168px;width:218px;height:110px;border:1.5px solid ${GOLD};display:flex;align-items:center;justify-content:center;gap:16px}
.logos img{width:84px;height:84px;border-radius:50%}
.side{position:absolute;left:140px;top:1300px;display:flex;flex-direction:column;align-items:center;gap:22px;width:56px}
.side img{width:62px;height:62px;border-radius:50%;box-shadow:0 0 0 1.5px rgba(224,151,58,.8)}
.side i{font-style:normal;font-family:"Chakra Petch";font-size:15px;letter-spacing:.2em;writing-mode:vertical-rl;transform:rotate(180deg);color:#CFCBC4}
.grain{position:absolute;inset:0;opacity:.18;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>")}
.vig{position:absolute;inset:0;background:radial-gradient(ellipse 85% 75% at 50% 48%,rgba(0,0,0,0) 55%,rgba(0,0,0,.6) 100%)}
</style></head><body>
<div class="bg"></div><div class="turf"></div>
${[[990, 40, 70], [880, 1355, 22], [975, 1415, 30], [520, 1480, 20], [860, 1690, 26], [200, 1730, 18], [700, 1850, 40]].map(([x, y, r]) => `<div class="bokeh" style="left:${x - r}px;top:${y - r}px;width:${r * 2}px;height:${r * 2}px"></div>`).join('')}
<div class="ghost">MATCH</div>
<div class="match">MATCH</div>
<img class="jug" src="${JUG}">
<div class="match line">MATCH</div>
<div class="day">Day</div>
<div class="info"><h2>BLACK'S <em>VS</em><br>LEALES</h2><p>DÍA DE PARTIDO<br>CANCHA SAPRI<br>HOY | 8:20 PM</p></div>
<div class="logos"><img src="${BL}"><img src="${LE}"></div>
<div class="side"><img src="${BL}"><img src="${LE}"><i>BLACK'S VS LEALES · 8:20 PM · SAPRI</i></div>
<div class="grain"></div><div class="vig"></div>
</body></html>`;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  await p.setContent(html); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  await p.screenshot({ path: D + '/flyer-blacks-matchday.png' }); await b.close(); console.log('ok');
})();
