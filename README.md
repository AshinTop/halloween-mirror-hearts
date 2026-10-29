[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 👻 Moonlit Mirrors — Halloween Love Puzzle with Two Ghosts

**Two little ghosts. One move. A way home together.** Moonlit Mirrors is an original Halloween love puzzle created for [Love Game](https://love-game.org/). Guide blue Luna and pink Rose through paired rooms: one direction controls both, walls change their rhythm, and a mirror can turn a simple step into a lovely puzzle. Their reward is a small, animated reunion.

**[Play online](https://halloween-mirror-hearts.crazy3d.org/)** · [All Halloween games](https://github.com/AshinTop/halloween-games) · [Embedding guide](EMBEDDING.md) · [Design notes](DESIGN.md)

**Document languages:** English, 简体中文, Español, Português (Brasil), 日本語. **Game interface:** English and Simplified Chinese only; the other README languages do not add in-game translations.

![Moonlit Mirrors Halloween love puzzle with Luna and Rose in paired rooms and heart-shaped exits](docs/images/gameplay.jpg)

## A gentle puzzle for two hearts 🎃

- **12 pairs of 5×5 rooms**, with verified solutions and exact move targets.
- Mirrored movement, shared key gates, and a later phase switch that changes horizontal movement.
- Unlimited undo, restart, room selection, and a hint that solves the current combined position.
- Original SVG ghosts, optional sound, local records, and a cozy hug-and-kiss celebration.

## How the rooms work

Every direction moves both ghosts. In mirror mode, they move vertically together but horizontally in opposite directions. If a wall blocks one ghost, that ghost waits while the other can move. Use these differences to line up their routes.

Finish with **both ghosts on their own heart doors at the same time**. Rooms with a key require it before completion. From room 4, collecting a key opens the key gates in both rooms after that move finishes; a gate cannot be crossed early within the same move.

From room 7, the **phase switch** alternates between mirrored and aligned horizontal movement. Switching costs one move. The second chapter’s optimal routes use this new action, so it is part of the puzzle rather than a free shortcut.

Three stars mean the exact minimum number of moves. Two stars allow up to 1.5 times that target, rounded up; other completions receive one. There is no countdown or forced failure. Hints do not subtract stars.

## Controls

| Action | Mouse or touch | Keyboard |
|---|---|---|
| Move both ghosts | Direction pad, or a neighboring square beside a ghost | Arrows or W / A / S / D |
| Undo | Undo button | Z |
| Show the next solution step | Hint button | H |
| Change phase | Phase button, once unlocked | Space outside a button |
| Restart / select room | Visible controls | Tab and Enter |

Tapping beside Rose translates the chosen direction into her own visible movement. The direction pad is the clearest control in a very small embedded window.

The hint searches the **current positions, key state, and phase** for a shortest remaining route. It shows the next action. If your current state has no route, undo or restart instead.

## A reunion worth reaching

On completion, Luna keeps her star and Rose her bow as they float together, lean into an embrace, and share a tiny kiss with a heart bubble. The roughly 2.8-second sequence settles into a quiet held pose. Next-room and close controls work immediately. Reduced-motion settings show the embrace without the approach animation. The celebration does not change the puzzle rules, moves, or stars.

Best completed move counts and preferences stay in the browser. Reloading restarts the selected room; it does not restore an unfinished position. A link such as [room 9](https://halloween-mirror-hearts.crazy3d.org/#room=9) shares the starting room, not a replay.

## FAQ

**Is this online multiplayer?** It is a single-device puzzle. Play alone or talk through the next move with someone beside you.

**Why did only one ghost move?** Walls act independently, which helps separate the pair’s positions.

**Can I explore without losing my rating?** Undo is unlimited, and hints have no star penalty. Stars reflect the completed move count.

## See the game

![Moonlit Mirrors compact player with two ghost rooms, direction pad and puzzle controls](docs/images/mobile.jpg)

Actual game interface in a compact browser iframe. This illustrates the layout; it is not a physical-phone performance test.

[Watch the 24-second introduction](https://halloween-mirror-hearts.crazy3d.org/intro.html) · [Download the captioned MP4](docs/media/intro.mp4). This silent visual tour is assembled from actual game screenshots, not a continuous gameplay recording. The screenshots and video show captured interface states and may predate later visual refinements.

## Embed it on your site

```html
<iframe src="https://halloween-mirror-hearts.crazy3d.org/"
  title="Moonlit Mirrors"
  style="display:block;width:100%;height:521px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

The host layouts include 833×521 desktop, 356×280 and 326×280 compact Love Game windows, 390×650 portrait, and 844×340 landscape. Direction buttons remain important at the smallest sizes; use more height when available. Compact dialogs keep their actions usable and allow internal scrolling when needed.

The live site uses Cloudflare and is deployed from this GitHub repository. Give the iframe a real height and leave space for the host toolbar. Fullscreen may be provided by the host. See [EMBEDDING.md](EMBEDDING.md) for the integration contract.

## Run locally and check the rules

```sh
python3 -m http.server 4173
```

Serve the repository root, then open [http://localhost:4173/](http://localhost:4173/). The game is static: no build or dependency installation is needed. Use HTTP(S), because direct `file://` access can block ES modules. Node.js is required for the tests.

```sh
npm test
```

The **12 tests** cover exact search distances, all room solutions, mirrored directions, independent wall blocking, key timing, phase cost, hints after changed positions, undo, stars, and state validation.

The game source does not require an account, remote API, advertising SDK, or external asset CDN. Records stay in browser storage; there is no cloud sync. Cloudflare may add its own hosting scripts and request logs. Optional synthesized audio follows browser sound permissions.

## More moonlit adventures 🍬

- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-love-game) — Two ghosts, pressure gates, and a shared lantern.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-3d) — Spatial Lights Out with linked lanterns.
- [Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-pumpkin-shift) — Number-sliding rooms with Moon Glides.
- [Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-potion-match) — Match ingredients and light recipe candles.

## Credits and a little support

Created for **AshinTop’s Midnight Candy Club** through human-directed AI collaboration in design, programming, writing, testing, and review. The original artwork and synthesized sounds were made for this project. [Design notes](DESIGN.md) explain its intent.

Enjoyed this little adventure? **[Star Moonlit Mirrors on GitHub](https://github.com/AshinTop/halloween-mirror-hearts)** to save it for later and follow updates. Useful issue reports include the game mode or level, browser, window size, and steps that reproduce the problem. Explore the [complete Halloween collection](https://github.com/AshinTop/halloween-games).
