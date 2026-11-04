import { chromium } from 'playwright';
const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'});
const p = await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
await p.goto('http://localhost:4329/'); await p.waitForTimeout(1500);
const el = await p.$('.kx-spin');
for (let i=0;i<90;i++){ await p.evaluate(t=>document.getAnimations().forEach(a=>{a.pause();a.currentTime=t}), i*100); await el.screenshot({path:`/tmp/f${String(i).padStart(3,'0')}.png`}); }
await b.close();
