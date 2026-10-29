# Embedding Moonlit Mirrors

## Static deployment

Deploy the game’s HTML, CSS, JavaScript modules, `levels.js`, and `icon.svg` together. All imports are relative and there are no dependencies, external assets, build tools, or server APIs.

```html
<iframe
  src="https://halloween-mirror-hearts.crazy3d.org/#room=1"
  title="Moonlit Mirrors"
  width="100%"
  height="521"
  style="display:block;width:100%;height:100%;border:0"
  allow="fullscreen"
  allowfullscreen
  sandbox="allow-scripts allow-same-origin"
></iframe>
```

Give the iframe’s parent an explicit height. The example uses the live Cloudflare game URL. ES modules require HTTP(S), not a direct `file://` opening.

## Host-sized layout

The Love Game stage has an approximately 833×521 desktop viewport. On phones the existing stage can be 356×280 or 326×280. Those frames, 390×650 portrait, and 844×340 landscape are the layout targets.

Moonlit Mirrors always uses a compact viewport-first layout. `?embed=1` is not required; including it is harmless. A `ResizeObserver` sizes each 5×5 board to the available window interior. Both boards remain side by side so the reflection relationship is visible. Short frames hide the decorative brand and bottom journey strip while retaining room selection, move counts, help, sound, language, undo, hint, restart, all four movement buttons, and the center mirror control.

At 326×280 the board cells are necessarily small. The direction buttons remain the primary touch controls. A 480 px or taller phone stage is recommended for more comfortable reading and illustration detail when the host can provide it. Avoid imposing that minimum on a shorter landscape viewport; retain compact mode or use the host’s fullscreen view instead. Help and win dialogs scroll within the frame when needed.

The win dialog contains a finite 2.8-second SVG reunion: the two ghosts approach, hug and share a gentle kiss, then hold their embrace. It is decoration only; next-room, share and close controls are usable immediately. Short viewports use a smaller scene and side-by-side action buttons; the dialog itself can scroll if translated text or a shared URL needs more space. `prefers-reduced-motion: reduce` shows a still embrace. No animation timers, network assets or parent-frame hooks are added for this scene.

The game does not inspect or mutate the parent DOM, request a different iframe height, or require parent messaging. Browser-size acceptance is distinct from testing on physical phones and should include the host’s actual toolbar and orientation changes.

## Inputs, data and permissions

- Arrows/WASD move both ghosts. Z undoes; H shows the next shortest-path action. Space turns the mirror when available and focus is not on another button. On-screen buttons and tapping adjacent to either ghost are supported.
- `#room=1` through `#room=12` chooses a starting room. Fractional, out-of-range and malformed room numbers safely select room one.
- Audio is optional and user initiated. No autoplay permission is needed.
- The game has no fullscreen button of its own; the host can provide one.
- Clipboard sharing falls back to a visible room link when copying is unavailable. Sharing contains no live state, personal information, or replay upload.
- Local storage saves validated best move records and preferences. Play continues if storage is blocked or malformed. Embedded origins may use separate storage from direct visits. Reload starts the room again rather than resuming unfinished moves.
- No login, analytics, ad SDK, networked multiplayer, remote API or third-party runtime asset is required. `allow-scripts` is required; `allow-same-origin` allows normal origin storage where the browser permits it.

## Logic acceptance

`node tests/engine.test.js` runs 12 meaningful tests, including every authored solution and exact shortest starting route, phase switching, independent blocking, key/gate timing, hints from changed positions, snapshot restoration and invalid input handling. Actual final-browser rendering and hosting evidence are recorded separately by the collection owner.
