// Flyer Megacel: estilo editorial limpio con colores de la marca (azul marino + amarillo)
// Uso: node flyer.js  → genera flyer-megacel.png (1080x1620) y flyer-megacel-historia.png (1080x1920)
const { chromium } = require('playwright');
const D = __dirname;
const LOGO = 'data:image/png;base64,' + require('fs').readFileSync(D + '/logo-megacel.png').toString('base64');
const NAVY = '#0B1E4D', YEL = '#FFD21F';

const phoneBack = `<svg viewBox="0 0 300 600" width="100%" height="100%">
 <defs>
  <linearGradient id="bk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2A3E78"/><stop offset=".5" stop-color="#17295C"/><stop offset="1" stop-color="#0B1A40"/></linearGradient>
  <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9AA6C4"/><stop offset=".5" stop-color="#E6EAF3"/><stop offset="1" stop-color="#7F8BA8"/></linearGradient>
  <radialGradient id="lens" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#4A5A85"/><stop offset=".45" stop-color="#0A0F1E"/><stop offset="1" stop-color="#000"/></radialGradient>
  <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>
 </defs>
 <rect x="2" y="2" width="296" height="596" rx="48" fill="url(#rim)"/>
 <rect x="9" y="9" width="282" height="582" rx="42" fill="url(#bk)"/>
 <rect x="24" y="24" width="150" height="150" rx="36" fill="#21356C" stroke="#3A4F8A" stroke-width="2"/>
 ${[[64, 64], [134, 99], [64, 134]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="29" fill="#C9D0E2"/><circle cx="${x}" cy="${y}" r="24" fill="url(#lens)"/><circle cx="${x - 7}" cy="${y - 8}" r="5" fill="#fff" opacity=".35"/>`).join('')}
 <circle cx="134" cy="48" r="11" fill="#F4F0D8" opacity=".9"/><circle cx="148" cy="148" r="5" fill="#0A0F1E"/>
 <rect x="9" y="9" width="282" height="582" rx="42" fill="url(#gl)"/>
 <rect x="-3" y="150" width="6" height="60" rx="3" fill="#8A95B2"/><rect x="297" y="190" width="6" height="90" rx="3" fill="#8A95B2"/>
</svg>`;
const phoneFront = `<svg viewBox="0 0 300 600" width="100%" height="100%">
 <defs>
  <linearGradient id="rim2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8E9AB8"/><stop offset=".5" stop-color="#EEF1F7"/><stop offset="1" stop-color="#7A86A4"/></linearGradient>
  <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16316F"/><stop offset="1" stop-color="#060E26"/></linearGradient>
  <clipPath id="sc"><rect x="14" y="14" width="272" height="572" rx="38"/></clipPath>
 </defs>
 <rect x="2" y="2" width="296" height="596" rx="48" fill="url(#rim2)"/>
 <rect x="8" y="8" width="284" height="584" rx="44" fill="#05070D"/>
 <g clip-path="url(#sc)">
  <rect x="14" y="14" width="272" height="572" fill="url(#scr)"/>
  <path d="M-40 380 C60 300 140 420 340 250 L340 640 L-40 640Z" fill="${YEL}"/>
  <path d="M-40 420 C80 350 160 470 340 320 L340 640 L-40 640Z" fill="#F5B800" opacity=".7"/>
  <path d="M-40 300 C80 230 170 330 340 170" fill="none" stroke="#5B7BD6" stroke-width="3" opacity=".7"/>
  <path d="M-40 330 C80 260 170 360 340 200" fill="none" stroke="#fff" stroke-width="1.5" opacity=".35"/>
  ${Array.from({ length: 5 }, (_, i) => `<path d="M${40 + i * 50} 120 h20 l14 14 h30" fill="none" stroke="#4E6CC4" stroke-width="2" opacity=".55"/><circle cx="${104 + i * 50}" cy="134" r="3" fill="${YEL}"/>`).join('')}
  <text x="150" y="215" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="40" fill="#fff">12:00</text>
  <rect x="14" y="14" width="272" height="572" fill="url(#gl2)"/>
 </g>
 <rect x="110" y="26" width="80" height="22" rx="11" fill="#000"/>
 <rect x="-3" y="150" width="6" height="60" rx="3" fill="#8A95B2"/><rect x="297" y="190" width="6" height="90" rx="3" fill="#8A95B2"/>
</svg>`;
const ICON = {
  credito: `<svg viewBox="0 0 48 48"><rect x="6" y="12" width="36" height="24" rx="4" fill="none" stroke="${NAVY}" stroke-width="3"/><rect x="6" y="18" width="36" height="5" fill="${NAVY}"/><rect x="11" y="28" width="10" height="3" rx="1.5" fill="${NAVY}"/></svg>`,
  semana: `<svg viewBox="0 0 48 48"><rect x="7" y="10" width="34" height="30" rx="4" fill="none" stroke="${NAVY}" stroke-width="3"/><path d="M7 18h34M16 6v8M32 6v8" stroke="${NAVY}" stroke-width="3" stroke-linecap="round"/><path d="M17 29l5 5 9-10" fill="none" stroke="${NAVY}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ine: `<svg viewBox="0 0 48 48"><rect x="5" y="11" width="38" height="26" rx="4" fill="none" stroke="${NAVY}" stroke-width="3"/><circle cx="17" cy="22" r="4.5" fill="none" stroke="${NAVY}" stroke-width="3"/><path d="M10 32c1.5-4 12.5-4 14 0" fill="none" stroke="${NAVY}" stroke-width="3" stroke-linecap="round"/><path d="M28 20h10M28 26h8" stroke="${NAVY}" stroke-width="3" stroke-linecap="round"/></svg>`,
  cel: `<svg viewBox="0 0 48 48"><rect x="13" y="5" width="22" height="38" rx="5" fill="none" stroke="${NAVY}" stroke-width="3"/><path d="M21 10h6" stroke="${NAVY}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="37" r="2" fill="${NAVY}"/></svg>`,
  pin: `<svg viewBox="0 0 48 48"><path d="M24 44s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z" fill="${YEL}" stroke="${NAVY}" stroke-width="3"/><circle cx="24" cy="20" r="5" fill="${NAVY}"/></svg>`
};
const feat = (ic, t, s) => `<div class="ft"><div class="ic">${ICON[ic]}</div><b>${t}</b><span>${s}</span></div>`;

function html(H) {
  const story = H > 1700, off = story ? 120 : 0;
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=block" rel="stylesheet">
<style>*{margin:0;box-sizing:border-box}
body{width:1080px;height:${H}px;overflow:hidden;background:#F2F1EE;font-family:Inter,sans-serif;color:${NAVY};position:relative}
.band{position:absolute;left:478px;top:0;width:290px;height:100%;background:linear-gradient(180deg,${YEL},#F5B800)}
.band::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(11,30,77,.06) 0 2px,transparent 2px 22px)}
.top{position:absolute;left:62px;top:${58 + off}px;display:flex;align-items:center;gap:16px}
.top img{width:92px;height:92px}
.top b{font-weight:800;font-size:30px;letter-spacing:.02em}
.top small{display:block;font-weight:600;font-size:13px;letter-spacing:.3em;color:#5A6585;margin-top:2px}
.slogan{position:absolute;right:62px;top:${62 + off}px;text-align:right;font-weight:500;font-size:17px;letter-spacing:.32em;line-height:1.7}
.slogan i{display:block;width:44px;height:3px;background:${NAVY};margin:16px 0 0 auto}
h1{position:absolute;left:58px;top:${188 + off}px;font-weight:900;font-size:122px;line-height:.92;letter-spacing:-.045em;width:600px}
h1 em{font-style:normal;color:${NAVY};background:${YEL};padding:0 .12em;border-radius:.1em;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.sub{position:absolute;left:62px;top:${445 + off}px;font-weight:500;font-size:36px;line-height:1.25;letter-spacing:-.01em}
.sub b{font-weight:800}
.sub i{display:block;width:44px;height:3px;background:${NAVY};margin-top:22px}
.ine{position:absolute;left:44px;top:${1090 + off}px;font-weight:900;font-size:250px;line-height:.8;letter-spacing:-.06em;color:${NAVY}}
.ine small{position:absolute;left:8px;top:-40px;white-space:nowrap;font-size:26px;font-weight:700;letter-spacing:.24em;color:#5A6585}
.ph{position:absolute;filter:drop-shadow(0 40px 50px rgba(11,30,77,.35)) drop-shadow(0 10px 14px rgba(11,30,77,.25))}
.ph.back{left:380px;top:${610 + off}px;width:310px;height:620px;transform:rotate(-16deg)}
.ph.front{left:590px;top:${335 + off}px;width:270px;height:540px;transform:rotate(12deg)}
.feats{position:absolute;right:52px;top:${960 + off}px;width:215px;display:flex;flex-direction:column;gap:22px}
.ft .ic{width:56px;height:56px;border:2.5px solid ${NAVY};border-radius:12px;display:grid;place-items:center;background:#fff;margin-bottom:10px}
.ft .ic svg{width:36px;height:36px}
.ft b{display:block;font-weight:800;font-size:21px;line-height:1.2}
.ft span{display:block;font-size:17px;line-height:1.35;color:#4A5675;margin-top:4px}
.loc{position:absolute;left:62px;bottom:${70 + (story ? 110 : 0)}px;display:flex;gap:16px;align-items:flex-start;width:560px}
.loc svg{width:54px;height:54px;flex:none}
.loc b{display:block;font-weight:800;font-size:22px;letter-spacing:.2em}
.loc span{display:block;font-weight:500;font-size:25px;line-height:1.3;margin-top:6px}
.cta{position:absolute;right:52px;bottom:${70 + (story ? 110 : 0)}px;background:${NAVY};color:#fff;border-radius:18px;padding:20px 26px;text-align:center;width:250px}
.cta b{display:block;font-weight:900;font-size:30px;line-height:1.05;color:${YEL}}
.cta span{display:block;font-weight:600;font-size:16px;letter-spacing:.14em;margin-top:6px}
</style></head><body>
<div class="band"></div>
<div class="top"><img src="${LOGO}"><div><b>MEGACEL</b><small>CELULARES</small></div></div>
<div class="slogan">TECNOLOGÍA<br>A TU<br>ALCANCE.<i></i></div>
<h1>Celulares<br>a <em>crédito</em></h1>
<div class="sub">Desde <b>Android</b><br>hasta <b>iPhone</b>.<i></i></div>
<div class="ine"><small>SOLO NECESITAS TU</small>INE</div>
<div class="ph back">${phoneBack}</div>
<div class="ph front">${phoneFront}</div>
<div class="feats">
  ${feat('credito', 'Crédito fácil', 'Llévate tu celular hoy.')}
  ${feat('semana', 'Pagos semanales', 'Flexibles, a tu ritmo.')}
  ${feat('cel', 'Android y iPhone', 'Elige el que quieras.')}
</div>
<div class="loc">${ICON.pin}<div><b>VISÍTANOS</b><span>Enfrente del Registro Civil,<br>Centro, Isla Mujeres</span></div></div>
<div class="cta"><b>¡Estrena<br>celular ya!</b><span>PREGUNTA SIN COMPROMISO</span></div>
</body></html>`;
}
(async () => {
  const b = await chromium.launch();
  for (const [H, name] of [[1620, 'flyer-megacel'], [1920, 'flyer-megacel-historia']]) {
    const p = await b.newPage({ viewport: { width: 1080, height: H }, deviceScaleFactor: 2 });
    await p.setContent(html(H)); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    await p.screenshot({ path: `${D}/${name}.png` }); await p.close(); console.log(name);
  }
  await b.close();
})();
