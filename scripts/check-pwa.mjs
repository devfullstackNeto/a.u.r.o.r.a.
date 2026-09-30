import {chromium} from '@playwright/test';
const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();
try{
  await page.goto('http://127.0.0.1:4174/');
  await page.waitForFunction(()=>navigator.serviceWorker.controller!==null,{timeout:10000});
  await page.goto('http://127.0.0.1:4174/projeto');
  await page.goto('http://127.0.0.1:4174/experiencia');
  await context.setOffline(true);
  await page.reload();
  await page.getByRole('heading',{name:'Vamos aprender juntas.'}).waitFor();
  await page.getByRole('button',{name:'Letras',exact:true}).click();
  await page.getByText(/primeira letra da palavra ÁGUA/).first().waitFor();
  console.log('PWA offline: experiência e conteúdo disponíveis após recarga.');
}finally{await browser.close()}
