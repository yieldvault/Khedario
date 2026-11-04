import { chromium } from 'playwright'; import fs from 'fs';
const f=fs.readFileSync('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2').toString('base64');
const m=fs.readFileSync('brand/khedar-mark-real.png').toString('base64');
const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'}); const p=await b.newPage({viewport:{width:1200,height:630}});
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${f})}body{margin:0;width:1200px;height:630px;background:radial-gradient(circle at 30% 50%,#1c1710,#050505 70%);display:flex;align-items:center;gap:56px;padding:0 90px;box-sizing:border-box;font-family:M}h1{margin:0;font-size:120px;font-weight:600;color:#EDE3CF;letter-spacing:-3px}i{display:block;width:180px;height:2px;background:#D4A548;margin:18px 0 26px}p{margin:0;color:#bfb39a;font-size:30px}</style><img src="data:image/png;base64,${m}" width="400" height="400"><div><h1>Khedar</h1><i></i><p>Blockchain · AI · SaaS · Digital Commerce</p></div>`);
await p.evaluate(()=>document.fonts.ready); await p.screenshot({path:'public/og.png'}); await b.close();
