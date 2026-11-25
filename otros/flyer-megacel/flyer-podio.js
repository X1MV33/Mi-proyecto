// Flyer Megacel (versión oscura): celulares sobre el podio de piedra con luz de reflector
const { chromium } = require('playwright');
const fs = require('fs');
const D = __dirname, YEL = '#FFD21F';
const b64 = (f, t = 'png') => `data:image/${t};base64,` + fs.readFileSync(f).toString('base64');
const BG = b64('/root/.claude/uploads/ce398ad1-ee2c-59fc-90ea-6eaaff76492c/edead958-image.jpg', 'jpeg');
const SAM = b64(D + '/cel-samsung.png'), IPH = b64(D + '/cel-iphone.png'), LOGO = b64(D + '/logo-megacel.png');
const ic = {
  credito: `<svg viewBox="0 0 48 48"><rect x="6" y="12" width="36" height="24" rx="4" fill="none" stroke="${YEL}" stroke-width="3"/><rect x="6" y="18" width="36" height="5" fill="${YEL}"/><rect x="11" y="28" width="10" height="3" rx="1.5" fill="${YEL}"/></svg>`,
  semana: `<svg viewBox="0 0 48 48"><rect x="7" y="10" width="34" height="30" rx="4" fill="none" stroke="${YEL}" stroke-width="3"/><path d="M7 18h34M16 6v8M32 6v8" stroke="${YEL}" stroke-width="3" stroke-linecap="round"/><path d="M17 29l5 5 9-10" fill="none" stroke="${YEL}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ine: `<svg viewBox="0 0 48 48"><rect x="5" y="11" width="38" height="26" rx="4" fill="none" stroke="${YEL}" stroke-width="3"/><circle cx="17" cy="22" r="4.5" fill="none" stroke="${YEL}" stroke-width="3"/><path d="M10 32c1.5-4 12.5-4 14 0" fill="none" stroke="${YEL}" stroke-width="3" stroke-linecap="round"/><path d="M28 20h10M28 26h8" stroke="${YEL}" stroke-width="3" stroke-linecap="round"/></svg>`,
  pin: `<svg viewBox="0 0 48 48"><path d="M24 44s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z" fill="${YEL}"/><circle cx="24" cy="20" r="5" fill="#111"/></svg>`
};
function html(H) {
  const o = H - 1620;               // en la historia todo baja y arriba se rellena con negro
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=block" rel="stylesheet">
<style>*{margin:0;box-sizing:border-box}
body{width:1080px;height:${H}px;overflow:hidden;background:#141414;font-family:Inter,sans-serif;color:#fff;position:relative}
.bg{position:absolute;left:0;top:${o}px;width:1080px;height:1620px;background:url(${BG}) center/cover}
.fade{position:absolute;left:0;right:0;top:${o}px;height:260px;background:linear-gradient(#141414,rgba(20,20,20,0))}
.c{position:absolute;left:0;right:0;text-align:center}
.brand{top:${48 + o * .35}px;display:flex;justify-content:center;align-items:center;gap:16px}
.brand img{width:96px;height:96px}
.brand div{text-align:left}.brand b{display:block;font-weight:800;font-size:32px;letter-spacing:.06em}
.brand small{display:block;font-weight:600;font-size:13px;letter-spacing:.34em;color:#C9C9C9;margin-top:3px}
h1{top:${178 + o * .55}px;font-weight:900;font-size:118px;line-height:.95;letter-spacing:-.045em}
h1 em{font-style:normal;color:#111;background:${YEL};padding:0 .14em;border-radius:.12em}
.sub{top:${418 + o * .62}px;font-weight:500;font-size:34px;letter-spacing:.01em;color:#E6E6E6}
.sub b{font-weight:800;color:#fff}
.sub i{display:inline-block;width:60px;height:2px;background:#888;vertical-align:middle;margin:0 18px}
.ph{position:absolute;filter:drop-shadow(0 26px 30px rgba(0,0,0,.6)) drop-shadow(0 6px 8px rgba(0,0,0,.5))}
.ph img{display:block;width:100%}
.sam{left:232px;bottom:${1620 - 1088}px;width:430px}
.iph{left:478px;bottom:${1620 - 1092}px;width:372px}
.feats{top:${1236 + o}px;left:70px;right:70px;display:flex;justify-content:center;gap:0;background:rgba(14,14,14,.72);border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:22px 0;backdrop-filter:blur(6px)}
.ft{flex:1;padding:0 18px;display:flex;flex-direction:column;align-items:center;gap:8px;border-left:1px solid rgba(255,255,255,.22)}
.ft:first-child{border-left:0}
.ft svg{width:46px;height:46px}
.ft b{font-weight:800;font-size:24px}
.ft span{font-size:18px;color:#D6D6D6;line-height:1.3}
.tag{top:${1372 + o}px;font-weight:600;font-size:16px;letter-spacing:.44em;color:#BDBDBD}
.tag em{font-style:normal;color:${YEL}}
.bottom{position:absolute;left:58px;right:58px;bottom:58px;display:flex;justify-content:space-between;align-items:center;gap:24px}
.loc{display:flex;gap:14px;align-items:center}
.loc svg{width:50px;height:50px;flex:none}
.loc b{display:block;font-weight:800;font-size:19px;letter-spacing:.24em;color:${YEL}}
.loc span{display:block;font-weight:500;font-size:24px;line-height:1.3}
.cta{background:${YEL};color:#111;border-radius:18px;padding:18px 26px;text-align:center}
.cta b{display:block;font-weight:900;font-size:28px;line-height:1.05}
.cta span{display:block;font-weight:700;font-size:14px;letter-spacing:.14em;margin-top:6px}
</style></head><body>
<div class="bg"></div>${o ? '<div class="fade"></div>' : ''}
<div class="c brand"><img src="${LOGO}"><div><b>MEGACEL</b><small>TECNOLOGÍA A TU ALCANCE</small></div></div>
<h1 class="c">Celulares<br>a <em>crédito</em></h1>
<div class="c sub"><i></i>Desde <b>Android</b> hasta <b>iPhone</b><i></i></div>
<div class="ph sam" style="bottom:${1620 - 1088}px"><img src="${SAM}"></div>
<div class="ph iph" style="bottom:${1620 - 1092}px"><img src="${IPH}"></div>
<div class="c feats">
  <div class="ft">${ic.credito}<b>Crédito fácil</b><span>Llévate tu celular hoy</span></div>
  <div class="ft">${ic.semana}<b>Pagos semanales</b><span>Flexibles, a tu ritmo</span></div>
  <div class="ft">${ic.ine}<b>Solo tu INE</b><span>Sin tanto papeleo</span></div>
</div>
<div class="bottom"><div class="loc">${ic.pin}<div><b>VISÍTANOS</b><span>Enfrente del Registro Civil,<br>Centro, Isla Mujeres</span></div></div>
<div class="cta"><b>¡Estrena celular ya!</b><span>PREGUNTA SIN COMPROMISO</span></div></div>
</body></html>`;
}
(async () => {
  const b = await chromium.launch();
  for (const [H, name] of [[1620, 'flyer-megacel-podio'], [1920, 'flyer-megacel-podio-historia']]) {
    const p = await b.newPage({ viewport: { width: 1080, height: H }, deviceScaleFactor: 2 });
    await p.setContent(html(H)); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    await p.screenshot({ path: `${D}/${name}.png` }); await p.close(); console.log(name);
  }
  await b.close();
})();
