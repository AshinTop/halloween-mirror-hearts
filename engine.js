import { LEVELS } from './levels.js';
export { LEVELS };
export const DIRECTIONS=['up','right','down','left'];
const DELTAS={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]};
export function boardInfo(rows){const width=rows[0].length;const cells=rows.join('');return {width,height:rows.length,cells,start:cells.indexOf('S'),goal:cells.indexOf('E')};}
export function boards(level){return [boardInfo(level.left),boardInfo(level.right)];}
export function initial(index=0){if(!Number.isInteger(index)||index<0||index>=LEVELS.length)index=0;const level=LEVELS[index],[a,b]=boards(level);return {level:index,a:a.start,b:b.start,key:false,phase:0,moves:0};}
export function won(state){const level=LEVELS[state.level],[a,b]=boards(level);return state.a===a.goal&&state.b===b.goal&&(!a.cells.includes('K')&&!b.cells.includes('K')||state.key);}
function step(info,position,dx,dy,key){const x=position%info.width+dx,y=Math.floor(position/info.width)+dy;if(x<0||y<0||x>=info.width||y>=info.height)return position;const target=y*info.width+x,tile=info.cells[target];return tile==='#'||tile==='D'&&!key?position:target;}
export function move(state,direction){
  const level=LEVELS[state.level];
  if(direction==='phase')return level.phase?{...state,phase:1-state.phase,moves:state.moves+1}:null;
  if(!DELTAS[direction])return null;
  const [a,b]=boards(level),[dx,dy]=DELTAS[direction];
  const pa=step(a,state.a,dx,dy,state.key),pb=step(b,state.b,state.phase?dx:-dx,dy,state.key);
  if(pa===state.a&&pb===state.b)return null;
  return {...state,a:pa,b:pb,key:state.key||a.cells[pa]==='K'||b.cells[pb]==='K',moves:state.moves+1};
}
export function keyOf(state){return `${state.a},${state.b},${state.key?1:0},${state.phase}`;}
export function solve(start){
  if(won(start))return [];
  const level=LEVELS[start.level],actions=level.phase?[...DIRECTIONS,'phase']:DIRECTIONS;
  const queue=[start],seen=new Map([[keyOf(start),null]]),steps=new Map();let head=0,target;
  while(head<queue.length){const state=queue[head++];for(const direction of actions){const next=move(state,direction);if(!next)continue;const k=keyOf(next);if(seen.has(k))continue;seen.set(k,keyOf(state));steps.set(k,direction);queue.push(next);if(won(next)){target=k;break;}}if(target)break;}
  if(!target)return null;
  const answer=[];for(let k=target;seen.get(k)!==null;k=seen.get(k))answer.push(steps.get(k));return answer.reverse();
}
export function parseLevel(value){if(typeof value!=='string'||!/^\d+$/.test(value))return 0;const n=Number(value);return Number.isSafeInteger(n)&&n>=1&&n<=LEVELS.length?n-1:0;}
export function stars(moves,par){return moves<=par?3:moves<=par+Math.ceil(par*.5)?2:1;}
export function readProfile(raw){let value;try{value=JSON.parse(raw);}catch{value={};}if(!value||typeof value!=='object'||Array.isArray(value))value={};const best={};if(value.best&&typeof value.best==='object'&&!Array.isArray(value.best))for(const [k,n]of Object.entries(value.best))if(/^\d+$/.test(k)&&Number(k)<LEVELS.length&&Number(k)>=0&&Number.isInteger(n)&&n>0&&n<100000)best[k]=n;return {language:value.language==='zh'?'zh':'en',sound:value.sound===true,best};}
