export const root = new URL('../',import.meta.url);
export const asset = p => new URL(p,root).href;
export function el(tag, attrs={}, text='') {const n=document.createElement(tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);n.textContent=text;return n;}
export async function json(file){const r=await fetch(asset(file));if(!r.ok)throw new Error('Não foi possível carregar os dados.');return r.json();}
export function error(node,e){node.replaceChildren(el('p',{class:'error',role:'alert'},e.message+' Atualiza a página para tentar novamente.'));}
