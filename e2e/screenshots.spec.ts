import {test,type Page} from '@playwright/test';
test.skip(({isMobile})=>isMobile,'Capturas principais usam viewport desktop; 14-mobile cobre viewport móvel.');
async function shot(page:Page,name:string){await page.screenshot({path:`evidence/screenshots/${name}.png`,fullPage:true})}
test('captura roteiro visual completo',async({page,context})=>{
  await page.goto('/');await shot(page,'01-home');
  await page.goto('/projeto');await shot(page,'02-projeto');
  await page.goto('/experiencia');await shot(page,'03-experiencia');
  await page.goto('/device');await shot(page,'04-dispositivo');
  await page.getByRole('button',{name:'Letras',exact:true}).click();await shot(page,'05-interacao');
  await page.getByRole('button',{name:/Digitar/}).click();await shot(page,'06-atividade');
  await page.getByLabel('Sua resposta').fill('A');await page.getByRole('button',{name:'Enviar'}).click();await shot(page,'07-feedback');
  await context.setOffline(true);await shot(page,'08-offline');await context.setOffline(false);
  await page.goto('/mentora');await shot(page,'09-mentora');
  await page.getByRole('button',{name:'Formação'}).click();await shot(page,'10-formacao');
  await page.goto('/dashboard');await page.getByRole('button',{name:/Gerar novamente/}).click();await shot(page,'11-dashboard');
  await page.goto('/participar');await page.getByRole('button',{name:/Continuar/}).click();await page.getByRole('checkbox',{name:/Li e concordo/}).check();await page.getByRole('button',{name:/Concordar/}).click();await page.getByRole('button',{name:/Começar/}).click();await page.getByRole('button',{name:/Concluir sessão/}).click();await page.getByRole('checkbox',{name:/questionário opcional/}).check();await shot(page,'12-sus');
  await page.goto('/diagnostics');await shot(page,'13-diagnostico');
  await page.setViewportSize({width:390,height:844});await page.goto('/');await shot(page,'14-mobile');
});

