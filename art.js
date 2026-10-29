export function ghost(side=0){const color=side?'#efc2cd':'#b9d8e6',shade=side?'#d49aaf':'#84b6d0';return `<svg viewBox="0 0 60 65" aria-hidden="true"><ellipse cx="30" cy="59" rx="20" ry="4" fill="#101b2b" opacity=".3"/><path d="M10 30C8 2 52 2 50 30l3 26-11-6-12 7-12-7-11 6Z" fill="${color}"/><path d="M14 37q1 14-4 17l8-4 12 7 12-7 11 6-2-14q-6 10-14 6-13 5-23-11Z" fill="${shade}" opacity=".3"/><ellipse cx="23" cy="29" rx="2.7" ry="4" fill="#344051"/><ellipse cx="37" cy="29" rx="2.7" ry="4" fill="#344051"/><path d="M26 40q4 4 8 0" fill="none" stroke="#344051" stroke-width="2" stroke-linecap="round"/><ellipse cx="17" cy="37" rx="4" ry="2" fill="#e99da8" opacity=".5"/><ellipse cx="43" cy="37" rx="4" ry="2" fill="#e99da8" opacity=".5"/>${side?'<path d="m38 12 8-5 3 10-8 1Z" fill="#d391ab"/><circle cx="40" cy="14" r="3" fill="#f3daaf"/>':'<path d="m22 13 3-7 3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5Z" fill="#e5ca9b" transform="translate(4 -3) scale(.7)"/>'}</svg>`;}
export function keyArt(){return '<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="24" cy="19" r="11" fill="none" stroke="#f3cf89" stroke-width="6"/><path d="M24 30v23m0-10h10m-10 10h7" stroke="#f3cf89" stroke-width="6" stroke-linecap="round"/></svg>';}
export function gate(open=false){return `<svg viewBox="0 0 60 60" aria-hidden="true"><path d="M8 53V22a22 22 0 0 1 44 0v31" fill="none" stroke="${open?'#90bba4':'#a69a82'}" stroke-width="4"/><path d="M17 53V18m13 35V8m13 45V18M10 29h40M10 43h40" stroke="${open?'#83a896':'#d6ba80'}" stroke-width="3" opacity="${open?'.17':'1'}"/>${open?'<path d="m22 31 7 7 12-15" fill="none" stroke="#a6ccb4" stroke-width="3"/>':''}</svg>`;}
export function door(side=0,filled=false){const c=side?'#dfabc0':'#9ecbdf';return `<svg viewBox="0 0 60 60" aria-hidden="true"><path d="M11 55V23a19 19 0 0 1 38 0v32Z" fill="${c}" fill-opacity="${filled?'.22':'.08'}" stroke="${c}" stroke-width="2"/><path d="M17 51V24a13 13 0 0 1 26 0v27" fill="none" stroke="${c}" stroke-opacity=".4"/><path d="M30 24c-10-12-21 5 0 16 21-11 10-28 0-16Z" fill="${c}" fill-opacity="${filled?'.9':'.4'}"/></svg>`;}
export function heart(){return '<svg viewBox="0 0 90 70" aria-hidden="true"><path d="M45 17C13-23-31 29 45 65c76-36 32-88 0-48Z" fill="#e6b8c9"/><path d="m47 5-8 21 14 13-8 26" stroke="#f3d4b0" stroke-width="3" fill="none"/></svg>';}

// A separate victory illustration keeps board sprites and their movement untouched.
export function reunion(){return `<svg class="reunion-scene" viewBox="24 8 192 108" aria-hidden="true" focusable="false">
  <ellipse cx="120" cy="106" rx="57" ry="5" fill="#101827" opacity=".25"/>
  <circle cx="120" cy="61" r="45" fill="#e4c89c" opacity=".055"/>
  <path d="M74 62a46 46 0 0 1 92 0" fill="none" stroke="#e4c89c" stroke-width="1" opacity=".18"/>
  <g fill="#e7cea2" opacity=".65"><path d="m60 35 1.6 4.4L66 41l-4.4 1.6L60 47l-1.6-4.4L54 41l4.4-1.6Z"/><path d="m184 56 1.2 3.8L189 61l-3.8 1.2L184 66l-1.2-3.8L179 61l3.8-1.2Z"/><circle cx="174" cy="29" r="1.5"/><circle cx="70" cy="79" r="1.2"/></g>
  <g class="reunion-luna"><g transform="translate(70 37)">
    <path d="M10 30C8 2 52 2 50 30l3 26-11-6-12 7-12-7-11 6Z" fill="#b9d8e6"/>
    <path d="M14 37q1 14-4 17l8-4 12 7 12-7 11 6-2-14q-6 10-14 6-13 5-23-11Z" fill="#84b6d0" opacity=".3"/>
    <path d="m22 13 3-7 3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5Z" fill="#e5ca9b" transform="translate(4 -3) scale(.7)"/>
    <path d="M21 29q3-4 6 0m6 0q3-4 6 0" fill="none" stroke="#344051" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="17" cy="37" rx="4" ry="2.2" fill="#e99da8" opacity=".6"/><ellipse cx="41" cy="37" rx="4" ry="2.2" fill="#e99da8" opacity=".6"/>
    <path class="reunion-smile" d="M27 40q4 4 8 0" fill="none" stroke="#344051" stroke-width="1.8" stroke-linecap="round"/>
    <path class="reunion-kiss-mouth" d="M42 35q7-4 6 0-1 2-5 2 5 0 5 3-2 3-7 0" fill="none" stroke="#9f586c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g></g>
  <g class="reunion-rose"><g transform="translate(108 37)">
    <path d="M10 30C8 2 52 2 50 30l3 26-11-6-12 7-12-7-11 6Z" fill="#efc2cd"/>
    <path d="M14 37q1 14-4 17l8-4 12 7 12-7 11 6-2-14q-6 10-14 6-13 5-23-11Z" fill="#d49aaf" opacity=".3"/>
    <path d="m38 12 8-5 3 10-8 1Z" fill="#d391ab"/><circle cx="40" cy="14" r="3" fill="#f3daaf"/>
    <path d="M19 29q3-4 6 0m6 0q3-4 6 0" fill="none" stroke="#344051" stroke-width="2" stroke-linecap="round"/>
    <ellipse class="reunion-blush" cx="13" cy="37" rx="5" ry="3" fill="#d47d98"/><ellipse cx="41" cy="37" rx="4" ry="2.2" fill="#d47d98" opacity=".5"/>
    <path d="M24 40q4 4 8 0" fill="none" stroke="#344051" stroke-width="1.8" stroke-linecap="round"/>
  </g></g>
  <g class="reunion-embrace" fill="none" stroke-linecap="round">
    <path d="M94 80q13 17 49 4" stroke="#344051" stroke-opacity=".13" stroke-width="11"/>
    <path d="M94 80q13 17 49 4" stroke="#a9cedf" stroke-width="8"/>
    <ellipse cx="144" cy="83" rx="5.5" ry="4" fill="#b9d8e6" transform="rotate(-15 144 83)"/>
    <path d="M148 76q-17 18-42 7" stroke="#344051" stroke-opacity=".13" stroke-width="11"/>
    <path d="M148 76q-17 18-42 7" stroke="#e9b5c6" stroke-width="8"/>
    <ellipse cx="105" cy="82" rx="5.5" ry="4" fill="#efc2cd" transform="rotate(14 105 82)"/>
  </g>
  <path class="reunion-kiss-mark" d="M117 72q3-3 5 0 2-3 5 0-5 7-10 0Z" fill="#ac657d"/>
  <g transform="translate(124 42)"><g class="reunion-kiss-bubble"><path d="M0 1C-6-7-14 2 0 10 14 2 6-7 0 1Z" fill="#eab4c7"/><path d="m-12 3-4-1m29 1 4-1" fill="none" stroke="#edcea4" stroke-width="1.5" stroke-linecap="round"/></g></g>
  <path class="reunion-heart" d="M120 24c-6-8-15 1 0 10 15-9 6-18 0-10Z" fill="#e8bbce"/>
</svg>`;}
