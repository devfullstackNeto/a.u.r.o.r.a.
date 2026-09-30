import {test,expect,type Page} from '@playwright/test';

test('conceito do dispositivo preserva aviso, diagramas e demonstrador',async({page})=>{
  await page.goto('/device');
  await expect(page.getByText('O hardware físico não foi produzido nesta etapa.').first()).toBeVisible();
  for(const name of ['front','side','components','flow','architecture','states']){
    const image=page.locator(`img[src="/aurora-device/svg/${name}.svg"]`).first();
    await expect(image).toBeVisible();
    expect(await image.evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
  }
  await expect(page.getByRole('heading',{name:'Experimente a lógica em software.'})).toBeVisible();
  await expect(page.getByRole('button',{name:/Digitar/})).toBeVisible();
});

test('materiais conceituais abrem e mantêm aviso',async({page})=>{
  for(const path of ['/device-report','/device-presentation','/device-poster']){
    await page.goto(path);
    await expect(page.locator('main')).toContainText('A.U.R.O.R.A.');
    await expect(page.locator('main')).toContainText('O hardware físico não foi produzido nesta etapa.');
    const imgs=page.locator('main img');
    for(let i=0;i<await imgs.count();i++)expect(await imgs.nth(i).evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);
  }
});

test('footer tem primeiros nomes em ordem e créditos mantêm nomes completos',async({page})=>{
  await page.goto('/');
  const team=page.locator('.footer-team');
  await expect(team).toContainText('Emanuelli · Jenniffer · Juliana · Maria Isabel · Nathalia · Thayanne');
  await expect(team).not.toContainText('Prado Sales');
  await page.goto('/creditos');
  const names=await page.locator('.credits-grid h3').allTextContents();
  expect(names).toEqual(['Emanuelli Prado Sales','Jenniffer Karla da Silva Araujo','Juliana Silva de Jesus','Maria Isabel Borba Dranka','Nathalia de Souza Leite','Thayanne Melgueiro da Silva Bezerra Pinheiro']);
});

test('páginas do dispositivo e footer não transbordam em mobile',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  for(const path of ['/device','/device-report','/device-presentation','/device-poster','/creditos']){
    await page.goto(path);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),path).toBe(false);
  }
});

const shot=(page:Page,name:string)=>page.screenshot({path:`evidence/sprint-04/${name}.png`,fullPage:true});
test('capturas conceituais da sprint 4',async({page,isMobile})=>{
  test.skip(isMobile,'O roteiro desktop inclui uma captura em viewport móvel.');
  test.setTimeout(120000);
  await page.goto('/device');await shot(page,'01-device-concept');
  await page.locator('#componentes').screenshot({path:'evidence/sprint-04/02-device-components.png'});
  await page.locator('#fluxo').screenshot({path:'evidence/sprint-04/03-device-flow.png'});
  await page.locator('#estados').screenshot({path:'evidence/sprint-04/04-device-states.png'});
  await page.goto('/device-report');await shot(page,'05-device-report');
  await page.goto('/device-presentation');await shot(page,'06-device-presentation');
  await page.goto('/device-poster');await shot(page,'07-device-poster');
  await page.setViewportSize({width:390,height:844});await page.goto('/device');await shot(page,'08-device-mobile');
});
