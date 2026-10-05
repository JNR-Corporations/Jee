import {loadState,saveState} from './storage.js';
let renderFn=()=>{};
export function initRouter(renderer){renderFn=renderer;window.addEventListener('popstate',render);}
export function go(route){const s=loadState();s.route=route;saveState(s);history.pushState({},'',`#${route}`);render()}
export function render(){renderFn(loadState().route||'dashboard')}
