import { chromium } from 'playwright'; import fs from 'fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2').toString('base64');
const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const p = await b.newPage();
async function shot(svg, w, h, out, bg='transparent'){
  await p.setViewportSize({width:w,height:h});
  await p.setContent('<style>@font-face{font-family:Manrope;src:url(data:font/woff2;base64,'+font+')}html,body{margin:0;background:'+bg+'}svg{width:'+w+'px;height:'+h+'px;display:block}</style>'+fs.readFileSync(svg,'utf8'));
  await p.evaluate(()=>document.fonts.ready); await p.screenshot({path:out, omitBackground: bg==='transparent'});
}
await shot('public/favicon.svg',180,180,'public/apple-touch-icon.png');
await shot('public/favicon.svg',192,192,'public/icon-192.png');
await shot('public/favicon.svg',512,512,'public/icon-512.png');
for (const s of [16,32,48]) await shot('public/favicon.svg',s,s,'/tmp/fav'+s+'.png');
await shot('brand/og.svg',1200,630,'public/og.png');
await shot('brand/khedar-mark.svg',512,512,'brand/khedar-mark-512.png');
await shot('brand/khedar-lockup-horizontal.svg',880,256,'brand/khedar-lockup-horizontal.png','#000');
await shot('brand/khedar-lockup-stacked.svg',512,520,'brand/khedar-lockup-stacked.png','#000');
await b.close();
