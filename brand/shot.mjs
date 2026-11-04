import { chromium } from 'playwright';
const b = await chromium.launch({executablePath:'/usr/bin/google-chrome'});
for (const [w,h,n] of [[390,844,'real-home-390x844'],[1440,900,'real-home-1440x900']]) {
  const p = await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:w<500?2:1});
  await p.goto('http://localhost:4329/'); await p.waitForTimeout(2500);
  await p.screenshot({path:`screens/${n}.png`}); await p.close();
}
await b.close();
