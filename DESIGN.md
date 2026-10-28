# Moonlit Mirrors — design notes

## Intent

A small, contemplative Halloween puzzle about moving together when two paths are different. A single input controls both ghosts. The paired rooms and center reflection indicator make the relationship visible immediately, and walls become alignment tools rather than merely obstacles.

## Rules

Both rooms are 5×5. Up/down use the same direction in both rooms. In phase 0, horizontal input is reversed for Rose; in phase 1, it is aligned. Walls, boundaries and closed gates block a character independently. If neither position changes, a direction does not consume a move. Both ghosts must stand at their own exits together, and any required shared key must have been collected.

A key collected by either ghost opens every gate after that move ends. Gate legality is evaluated from the pre-move key state. Keys remain collected until undo or restart. Phase switching is available from room seven, costs one move, and changes no positions. There is no time or move limit. Undo restores a complete prior state, including positions, key, reflection phase and move count.

## Campaign and hints

Twelve room pairs use authored wall layouts and selected paired exits. A breadth-first search over `(Luna position, Rose position, key, phase)` verifies the shortest routes. Their lengths are 4, 8, 11, 12, 15, 17, 11, 12, 17, 16, 17, 16. Every optimal route in rooms 7–12 uses the switch. The authored witnesses are retained in `levels.js` and replayed in tests; the solver independently confirms each declared par.

Hints run the same exact state-space search from the current state. They show only the next direction or switch. If the search finds no route, the game explicitly asks for undo/restart. Stars: moves ≤ par gives three; ≤ par + ceil(par/2) gives two; otherwise one. Free hints do not alter star scoring.

## Presentation

Luna and Rose have original blue and pink ghost illustrations and separate moonlit rooms. Color is reinforced by names, character silhouettes and separate room positions. Heart doors, the moon key and arched gates use consistent vector shapes. A center glyph shows opposite or aligned arrows; its button becomes active when the mechanism is introduced. The interface prioritizes the two boards, movement pad and undo/hint tools.

## Accessibility and persistence

Keyboard, direction buttons, and tapping a tile adjacent to either ghost are supported. The shared direction pad describes Luna’s direction; tapping by Rose translates from her visible direction. All core play controls remain in short-frame layouts, with detailed explanations in a scrollable dialog. Reduced-motion preference removes animations. Sound is optional and created only after a user action.

Validated best-move records, language and sound preference are stored locally. Reloading a room starts it again; completed records persist where storage is available. Sharing copies only a starting-room link. There is no multiplayer backend, analytics, account service or remote runtime dependency.

## Verification

12 built-in Node tests cover geometry, all campaign paths and shortest lengths, mirror rules, blocking, key timing, phase costs, hints, snapshot restoration and input validation. Final browser and iframe acceptance is separate from those logic checks.
