import {loadState,saveState} from '../core/storage.js';
import {toast} from '../core/ui.js';
export function currentUser(){return loadState().user}
export async function signInDemo(name='JNR Student'){const s=loadState();s.user={name,email:'student@example.com',photo:null,class:'12',target:'JEE Main + Advanced',stage:'Focused Revision'};saveState(s);toast('Welcome to JEE by JNR');return s.user}
export function signOut(){const s=loadState();s.user=null;saveState(s);location.reload()}
export async function googleSignIn(){return signInDemo('JNR Student')}
