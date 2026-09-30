import {test,type Page} from '@playwright/test';
test.skip(({isMobile})=>isMobile,'Capturas principais em desktop; a última captura usa viewport móvel.');
const shot=(page:Page,name:string)=>page.screenshot({path:`evidence/sprint-02-1/${name}.png`,fullPage:true});
test('capturas da sprint 2.1',async({page})=>{
  test.setTimeout(90000);
  await page.goto('/participar');await shot(page,'01-participar');
  await page.getByRole('button',{name:'Continuar',exact:true}).click();await page.getByRole('button',{name:/Ver consentimento/}).click();await shot(page,'02-consentimento');
  await page.getByRole('checkbox',{name:/Li e concordo/}).check();await page.getByRole('button',{name:/Concordar e gerar/}).click();await shot(page,'03-codigo-participante');
  await page.getByRole('button',{name:/Continuar ao tutorial/}).click();await page.getByRole('button',{name:/Começar/}).click();await shot(page,'04-experiencia');
  await page.getByRole('button',{name:/Concluir sessão/}).click();await shot(page,'05-feedback');
  for(const name of ['overall','ease','clarity','usefulness'])await page.locator(`input[name="feedback-${name}"]`).nth(3).check();await page.getByRole('button',{name:/Salvar feedback/}).click();await page.getByRole('checkbox',{name:/Quero responder ao SUS/}).check();await shot(page,'06-sus');
  await page.goto('/dashboard');await page.getByRole('button',{name:/Gerar dados demonstrativos/}).click();await page.getByRole('button',{name:'SINTÉTICOS'}).click();await shot(page,'07-dashboard-sintetico');
  await page.goto('/privacidade');page.once('dialog',dialog=>dialog.accept());await page.getByRole('button',{name:/Excluir registros locais não sintéticos/}).click();await page.goto('/dashboard');await page.getByRole('button',{name:'REAIS'}).click();await shot(page,'08-dashboard-real-vazio');
  await page.goto('/mentora');await shot(page,'09-mentora');await page.getByRole('tab',{name:'Formação'}).click();await shot(page,'10-formacao-mentora');
  await page.goto('/privacidade');await shot(page,'11-privacidade');
  await page.setViewportSize({width:390,height:844});await page.goto('/participar');await shot(page,'12-mobile-participacao');
});
