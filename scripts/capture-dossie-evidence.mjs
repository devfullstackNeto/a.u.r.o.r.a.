import {chromium} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const arg=process.argv.find(value=>value.startsWith('--base-url='));
const base=new URL(arg?.slice('--base-url='.length)||process.env.AURORA_BASE_URL||'http://127.0.0.1:4173');
if(!['127.0.0.1','localhost'].includes(base.hostname))throw Error('A captura só aceita uma instância local para proteger registros reais.');
const target=(meta,name)=>path.join(root,'evidence','dossie',meta,name);
const browser=await chromium.launch();
const context=await browser.newContext({viewport:{width:1280,height:800},locale:'pt-BR'});
const page=await context.newPage();
const errors=[];
page.on('pageerror',error=>errors.push(error.message));
const visit=route=>page.goto(new URL(route,base).toString(),{waitUntil:'networkidle'});
const save=async(meta,name,locator)=>{const file=target(meta,name);await mkdir(path.dirname(file),{recursive:true});if(locator)await locator.screenshot({path:file});else await page.screenshot({path:file,fullPage:true});console.log(path.relative(root,file).replaceAll('\\','/'))};

try{
  // Fresh browser context: no cookies, IndexedDB or localStorage from a participant.
  await visit('/device');
  await save('meta-01','M1-EV-05-arquitetura.png',page.locator('#arquitetura'));
  await visit('/mentora');
  await page.getByRole('tab',{name:'Vocabulário'}).click();
  await save('meta-01','M1-EV-06-vocabulario.png');

  await visit('/dashboard');
  await page.getByRole('button',{name:/Gerar dados demonstrativos/}).click();
  await page.getByRole('button',{name:'SINTÉTICOS'}).click();
  await page.getByText('DADOS SINTÉTICOS').first().waitFor();
  await save('meta-03','M3-EV-09-exportacao.png');

  await visit('/mentora');
  await page.getByRole('tab',{name:'Formação'}).click();
  await save('meta-04','M4-EV-03-modulos.png');
  await page.getByRole('tab',{name:'Visão geral'}).click();
  await save('meta-04','M4-EV-04-checklist.png',page.locator('.mentor-grid'));
  await visit('/participar');
  await page.getByRole('button',{name:'Continuar',exact:true}).focus();
  await save('meta-04','M4-EV-06-acessibilidade.png');
  if(errors.length)throw Error(`Erros de página: ${errors.join('; ')}`);
  console.log('Captura concluída. Apenas dados sintéticos foram gerados em um contexto isolado.');
}finally{await browser.close()}
