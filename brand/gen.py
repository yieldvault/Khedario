import math
s=23; R=2*s*0.866*1.0; C=64
cream=('#FBF5E8','#EDE3CF','#CFC2A6'); gold=('#F2CF7A','#D4A548','#9C7124')
# hex vertices: top, upper-right, lower-right, bottom, lower-left, upper-left
kinds=[gold,cream,gold,cream,gold,cream]
cubes=[]
for k in range(6):
  a=math.radians(-90+60*k); cubes.append((C+R*math.cos(a)*1.0, C+R*math.sin(a), kinds[k]))
def P(pts): return ' '.join(f'{x:.2f},{y:.2f}' for x,y in pts)
def cube(cx,cy,c):
  h=s*.866
  top=[(cx,cy-s),(cx+h,cy-s/2),(cx,cy),(cx-h,cy-s/2)]
  L=[(cx-h,cy-s/2),(cx,cy),(cx,cy+s),(cx-h,cy+s/2)]
  Rr=[(cx+h,cy-s/2),(cx,cy),(cx,cy+s),(cx+h,cy+s/2)]
  g='g' if c is gold else 'c'
  return ''.join(f'<polygon points="{P(p)}" fill="url(#{g}{i})" stroke="#0a0a0a" stroke-width="1.6" stroke-linejoin="round"/>' for i,p in ((0,top),(1,L),(2,Rr)))
defs='<defs>'+''.join(f'<linearGradient id="{n}{i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{col[i]}"/><stop offset="1" stop-color="{["#FFFFFF","#000000","#000000"][i]}" stop-opacity="{[.0,.12,.25][i]}"/></linearGradient>' for n,col in (('g',gold),('c',cream)) for i in range(3))
# rebuild gradients as solid->shaded
defs='<defs>'+''.join(f'<linearGradient id="{n}{i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{col[i]}"/><stop offset="1" stop-color="{col[min(i+1,2)] if i<2 else "#7a5a1c" if n=="g" else "#B3A587"}"/></linearGradient>' for n,col in (('g',gold),('c',cream)) for i in range(3))+'</defs>'
order=sorted(cubes,key=lambda c:c[1])
body=''.join(cube(*c) for c in order)
mark=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">{defs}{body}</svg>'
open('brand/khedar-mark.svg','w').write(mark)
inner=defs+body
font="font-family=\"Manrope,Inter,Arial,sans-serif\""
open('brand/khedar-lockup-horizontal.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 128">{inner}<text x="140" y="84" {font} font-weight="600" font-size="64" fill="#EDE3CF" letter-spacing="-1">Khedar</text><rect x="142" y="98" width="120" height="1.5" fill="#D4A548"/></svg>')
open('brand/khedar-lockup-stacked.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 260"><g transform="translate(64,0)">{inner}</g><text x="128" y="210" text-anchor="middle" {font} font-weight="600" font-size="56" fill="#EDE3CF">Khedar</text><rect x="88" y="232" width="80" height="1.5" fill="#D4A548"/></svg>')
open('public/favicon.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="28" fill="#0a0a0a"/>{inner}</svg>')
open('brand/og.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><defs><radialGradient id="bg" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#1c1710"/><stop offset="1" stop-color="#050505"/></radialGradient></defs><rect width="1200" height="630" fill="url(#bg)"/><g transform="translate(470,60) scale(2.03)">{inner}</g><text x="600" y="400" text-anchor="middle" {font} font-weight="600" font-size="96" fill="#EDE3CF">Khedar</text><rect x="520" y="430" width="160" height="2" fill="#D4A548"/><text x="600" y="500" text-anchor="middle" {font} font-size="30" fill="#bfb39a" letter-spacing="2">Blockchain · AI · SaaS · Digital Commerce</text></svg>')
