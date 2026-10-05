export const icons={home:'⌂',learn:'▣',subjects:'◈',tests:'☷',pyq:'◌',formula:'ƒx',analytics:'↗',saved:'🔖',settings:'⚙',profile:'◉',sun:'☀',moon:'◐'};
export function toast(message){const root=document.querySelector('#toast-root');root.innerHTML=`<div class="toast">${escapeHtml(message)}</div>`;setTimeout(()=>root.innerHTML='',2200)}
export function escapeHtml(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
export function statCard(icon,label,value){return `<div class="card stat"><div class="stat-icon">${icon}</div><div><h4>${label}</h4><strong>${value}</strong></div></div>`}
export function progressBar(value){return `<div class="progress"><span style="width:${value}%"></span></div>`}
