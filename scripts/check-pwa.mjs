import {chromium} from '@playwright/test';
const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();
try{
  await page.goto('http://127.0.0.1:4174/');
  await page.waitForFunction(()=>navigator.serviceWorker.controller!==null,{timeout:10000});
  await page.goto('http://127.0.0.1:4174/projeto');
  await page.goto('http://127.0.0.1:4174/experiencia');
  await page.goto('http://127.0.0.1:4174/privacidade');
  await page.goto('http://127.0.0.1:4174/creditos');
  await context.setOffline(true);
  await page.reload();
  await page.getByRole('heading',{name:'A.U.R.O.R.A.'}).waitFor();
  await page.goto('http://127.0.0.1:4174/privacidade');
  await page.reload();
  await page.getByRole('heading',{name:'Seus dados ficam aqui.'}).waitFor();
  await page.goto('http://127.0.0.1:4174/experiencia');
  await page.reload();
  await page.getByRole('heading',{name:'Vamos aprender juntas.'}).waitFor();
  await page.getByRole('button',{name:'Letras e sons'}).click();
  await page.getByText(/primeira letra da palavra ÁGUA/).first().waitFor();
  console.log('PWA offline: créditos, privacidade, experiência e conteúdo disponíveis após recarga.');
}finally{await browser.close()}
