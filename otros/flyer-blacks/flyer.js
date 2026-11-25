// Flyer de partido: Black's vs Leales · 8:20 PM · Sapri
const { chromium } = require('playwright'); const fs = require('fs');
const D = __dirname, b64 = f => 'data:image/png;base64,' + fs.readFileSync(D + '/' + f).toString('base64');
const BL = b64('logo-blacks.png'), LE = b64('logo-leales.png');
function html(H) {
  const story = H > 1500, k = story ? 1.12 : 1, cy = story ? 880 : 620;   // centro de los escudos
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;600;700&display=block" rel="stylesheet">
<style>*{margin:0;box-sizing:border-box}
body{width:1080px;height:${H}px;overflow:hidden;background:#07070A;font-family:Oswald,sans-serif;color:#fff;position:relative}
.l,.r{position:absolute;top:0;bottom:0;width:62%}
.l{left:0;background:radial-gradient(70% 55% at 30% ${cy / H * 100}%,#8E0F17 0,#3A0508 45%,#0B0304 80%);clip-path:polygon(0 0,100% 0,62% 100%,0 100%)}
.r{right:0;background:radial-gradient(70% 55% at 70% ${cy / H * 100}%,#5B2A9E 0,#25103F 45%,#08040F 80%);clip-path:polygon(38% 0,100% 0,100% 100%,0 100%)}
.slash{position:absolute;left:50%;top:-10%;width:14px;height:120%;margin-left:-7px;background:linear-gradient(#fff0,#fff 30%,#fff 70%,#fff0);transform:rotate(12.4deg);box-shadow:0 0 40px 12px rgba(255,255,255,.35);opacity:.9}
.grain{position:absolute;inset:0;opacity:.12;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
.lines{position:absolute;inset:0;background:repeating-linear-gradient(102deg,rgba(255,255,255,.035) 0 2px,transparent 2px 46px)}
.top{position:absolute;left:0;right:0;top:${story ? 150 : 70}px;text-align:center}
.top .k{font-weight:600;font-size:${30 * k}px;letter-spacing:.5em;padding-left:.5em;color:#E9E3F2}
.top h1{font-family:Anton,sans-serif;font-weight:400;font-size:${150 * k}px;line-height:.95;letter-spacing:.01em;margin-top:8px;text-transform:uppercase;
  background:linear-gradient(180deg,#fff 0,#fff 55%,#C9C9D2 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 8px 0 rgba(0,0,0,.45))}
.team{position:absolute;top:${cy}px;width:${story ? 380 : 350}px;transform:translate(-50%,-50%);text-align:center}
.team img{width:100%;border-radius:50%}
.team.a{left:23%}.team.b{left:77%}
.team{z-index:1}.vs{z-index:2}
.team.a img{box-shadow:0 0 0 6px rgba(255,40,50,.55),0 0 70px 18px rgba(230,20,30,.55),0 30px 60px rgba(0,0,0,.7)}
.team.b img{box-shadow:0 0 0 6px rgba(160,100,255,.55),0 0 70px 18px rgba(130,70,230,.55),0 30px 60px rgba(0,0,0,.7)}
.team b{display:block;font-family:Anton,sans-serif;font-weight:400;font-size:${62 * k}px;letter-spacing:.04em;margin-top:22px;text-transform:uppercase;text-shadow:0 6px 0 rgba(0,0,0,.5)}
.team small{display:block;font-weight:500;font-size:${22 * k}px;letter-spacing:.35em;padding-left:.35em;color:#D8D2E0}
.vs{position:absolute;left:50%;top:${cy - 10}px;transform:translate(-50%,-50%);font-family:Anton,sans-serif;font-size:${story ? 190 : 170}px;line-height:1;
  color:#fff;-webkit-text-stroke:0;text-shadow:0 0 30px rgba(255,255,255,.55),0 10px 0 rgba(0,0,0,.55);font-style:italic;-webkit-text-stroke:3px #07070A;paint-order:stroke fill}
.info{position:absolute;left:70px;right:70px;bottom:${story ? 210 : 70}px;display:flex;gap:18px}
.box{flex:1;background:rgba(10,10,14,.72);border:1.5px solid rgba(255,255,255,.18);border-radius:22px;padding:22px 26px;display:flex;align-items:center;gap:18px}
.box svg{width:${54 * k}px;height:${54 * k}px;flex:none}
.box span{display:block;font-weight:500;font-size:${20 * k}px;letter-spacing:.3em;color:#BDB6C9}
.box b{display:block;font-family:Anton,sans-serif;font-weight:400;font-size:${60 * k}px;line-height:1;letter-spacing:.02em}
.box b small{font-size:.5em;margin-left:6px;letter-spacing:.05em}
.cta{position:absolute;left:0;right:0;bottom:${story ? 120 : 250}px;text-align:center;font-weight:600;font-size:${story ? 30 : 22}px;letter-spacing:.32em;padding-left:.32em;color:#fff;}
.cta em{font-style:normal;color:#FF3B47}
</style></head><body>
<div class="l"></div><div class="r"></div><div class="lines"></div><div class="slash"></div><div class="grain"></div>
<div class="top"><div class="k">DÍA DE PARTIDO</div><h1>Match Day</h1></div>
<div class="team a"><img src="${BL}"><b>Black's</b><small>CLUB DE FUTBOL</small></div>
<div class="vs">VS</div>
<div class="team b"><img src="${LE}"><b>Leales</b><small>F.C.</small></div>
<div class="info">
  <div class="box"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="none" stroke="#FF3B47" stroke-width="4"/><path d="M24 13v12l8 5" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg><div><span>HORA</span><b>8:20<small>PM</small></b></div></div>
  <div class="box"><svg viewBox="0 0 48 48"><path d="M24 44s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z" fill="#8F5BE8"/><circle cx="24" cy="20" r="5.5" fill="#fff"/></svg><div><span>CANCHA</span><b>Sapri</b></div></div>
</div>
<div class="cta">¡VEN A APOYAR A <em>BLACK'S</em>!</div>
</body></html>`;
}
(async () => {
  const b = await chromium.launch();
  for (const [H, n] of [[1350, 'flyer-blacks-vs-leales'], [1920, 'flyer-blacks-vs-leales-historia']]) {
    const p = await b.newPage({ viewport: { width: 1080, height: H }, deviceScaleFactor: 2 });
    await p.setContent(html(H)); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    await p.screenshot({ path: `${D}/${n}.png` }); await p.close(); console.log(n);
  }
  await b.close();
})();
