const KEY='jeebyjnr_state_v1';
const defaults={user:null,theme:'light',route:'dashboard',streak:7,questionsSolved:524,testsAttempted:18,accuracy:78,studyMinutes:1240,bookmarks:[],progress:{physics:72,chemistry:68,mathematics:61},testHistory:[82,74,88,79,91]};
export function loadState(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...defaults}}}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function updateState(patch){const s=loadState();const next={...s,...patch};saveState(next);return next}
