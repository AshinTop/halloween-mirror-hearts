[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 👻 Moonlit Mirrors — Puzle de amor de Halloween con dos fantasmas

**Dos pequeños fantasmas. Un movimiento. Un camino a casa juntos.** Moonlit Mirrors es un puzle original de Halloween creado para [Love Game](https://love-game.org/). Guía a Luna, azul, y a Rose, rosa, por habitaciones emparejadas. Una dirección controla a ambos, los muros cambian su ritmo y los espejos convierten un paso sencillo en un reto. Al final les espera un tierno reencuentro.

**[Jugar ahora](https://halloween-mirror-hearts.crazy3d.org/)** · [Colección de Halloween](https://github.com/AshinTop/halloween-games) · [Guía de integración](EMBEDDING.md) · [Notas de diseño](DESIGN.md)

**Idiomas de la documentación:** English, 简体中文, Español, Português (Brasil), 日本語. **Interfaz del juego:** solo inglés y chino simplificado. Los otros idiomas del README no implican una traducción de los menús del juego.

![Puzle de Halloween Moonlit Mirrors con Luna y Rose en habitaciones dobles y salidas de corazón](docs/images/gameplay.jpg)

## Un puzle para dos corazones 🎃

- **12 pares de habitaciones de 5×5**, con soluciones verificadas y objetivos mínimos exactos.
- Movimiento reflejado, puertas con llave compartida y un cambio de fase para el movimiento horizontal.
- Deshacer sin límite, reinicio, selección de habitación y pistas desde la posición actual.
- Fantasmas SVG originales, sonido opcional, marcas locales y una celebración con abrazo y beso.

## Cómo funcionan las habitaciones

Cada dirección mueve a los dos fantasmas. En modo espejo avanzan juntos en vertical y en sentidos opuestos en horizontal. Si un muro bloquea a uno, ese fantasma espera mientras el otro puede avanzar. Aprovecha esa diferencia para coordinar sus rutas.

Debes dejar a **ambos sobre sus propias puertas de corazón al mismo tiempo**. Las habitaciones con llave requieren recogerla. Desde la habitación 4, la llave abre las puertas correspondientes de ambos lados después de terminar ese movimiento; no permite atravesar una puerta antes de que se abra.

Desde la habitación 7, el **cambio de fase** alterna entre movimiento horizontal reflejado y alineado. Cambiar cuesta un movimiento. Las rutas óptimas del segundo capítulo utilizan esta acción.

Tres estrellas exigen el mínimo exacto de movimientos. Dos permiten hasta 1,5 veces ese objetivo, redondeado hacia arriba; las demás soluciones reciben una. No hay cuenta atrás ni derrota forzada. Las pistas no restan estrellas.

## Controles

| Acción | Ratón o toque | Teclado |
|---|---|---|
| Mover a ambos | Botones de dirección o casilla contigua a un fantasma | Flechas o W / A / S / D |
| Deshacer | Botón | Z |
| Mostrar el siguiente paso | Pista | H |
| Cambiar fase | Botón, al desbloquearse | Espacio fuera de un botón |
| Reiniciar / elegir habitación | Controles visibles | Tab y Enter |

Tocar junto a Rose traduce la dirección a su movimiento visible. Los botones de dirección son la opción más clara en ventanas pequeñas.

La pista busca la ruta restante más corta considerando **posiciones, llave y fase actuales**. Muestra la siguiente acción. Si ya no existe una ruta desde ese estado, deshaz o reinicia.

## Un reencuentro que merece la pena

Luna conserva su estrella y Rose su lazo mientras se acercan flotando, se abrazan y comparten un pequeño beso con un corazón. La secuencia de unos 2,8 segundos termina en una postura acogedora. Puedes cerrar el diálogo o avanzar de inmediato. Con movimiento reducido se muestra un abrazo estático. La animación no cambia reglas, movimientos ni estrellas.

Las mejores marcas y preferencias se guardan en el navegador. Recargar reinicia la habitación elegida, sin recuperar posiciones incompletas. Un enlace como [habitación 9](https://halloween-mirror-hearts.crazy3d.org/#room=9) comparte el inicio, no una repetición.

## Preguntas frecuentes

**¿Es multijugador en línea?** Se juega en un dispositivo, a solas o pensando los movimientos con otra persona.

**¿Por qué solo se movió uno?** Los muros bloquean cada lado de forma independiente.

**¿Puedo experimentar sin penalización por pistas?** Puedes deshacer sin límite. Las estrellas dependen del número final de movimientos, no de las pistas.

## Imágenes y vídeo

![Moonlit Mirrors en ventana compacta con dos habitaciones, controles de dirección y botones del puzle](docs/images/mobile.jpg)

Interfaz real capturada en un iframe compacto del navegador. Ilustra la distribución de los controles; no es una prueba de rendimiento en un teléfono físico.

[Ver la introducción de 24 segundos](https://halloween-mirror-hearts.crazy3d.org/intro.html) · [Descargar el MP4 con subtítulos](docs/media/intro.mp4). Este vídeo silencioso está montado con capturas reales del juego, no con una partida grabada de forma continua. Las imágenes reflejan la interfaz del momento de la captura y pueden ser anteriores a mejoras visuales posteriores.

## Añádelo a tu sitio

```html
<iframe src="https://halloween-mirror-hearts.crazy3d.org/"
  title="Moonlit Mirrors"
  style="display:block;width:100%;height:521px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

Los tamaños previstos incluyen 833×521 en escritorio, 356×280 y 326×280 en los reproductores compactos de Love Game, 390×650 en vertical y 844×340 en horizontal. Usa los botones de dirección en ventanas pequeñas y más altura cuando sea posible. Los diálogos compactos mantienen acciones accesibles y permiten desplazamiento interno.

La versión en línea se publica en Cloudflare desde este repositorio de GitHub. Asigna una altura real al iframe y deja espacio para la barra del sitio anfitrión. El sitio puede ofrecer pantalla completa. Consulta [EMBEDDING.md](EMBEDDING.md) para los detalles.

## Ejecutar y comprobar en local

```sh
python3 -m http.server 4173
```

Sirve la raíz del repositorio y abre [http://localhost:4173/](http://localhost:4173/). Es un juego estático, sin compilación ni instalación de dependencias. Usa HTTP(S): abrirlo mediante `file://` puede bloquear los módulos JavaScript. Las pruebas requieren Node.js.

```sh
npm test
```

Las **12 pruebas** cubren distancias de búsqueda exactas, todas las soluciones, direcciones reflejadas, bloqueos independientes, apertura de puertas, coste de fase, pistas tras cambios, deshacer, estrellas y validación del estado.

El código del juego no necesita cuentas, API remotas, SDK publicitarios ni una CDN de recursos externos. Los registros se guardan en el navegador, sin sincronización en la nube. Cloudflare puede añadir scripts de alojamiento y registros de solicitudes. El sonido sintetizado opcional respeta los permisos del navegador.

## Más aventuras a la luz de la luna 🍬

- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-love-game) — Dos fantasmas, compuertas y una linterna compartida.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-3d) — Lights Out espacial con faroles enlazados.
- [Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-pumpkin-shift) — Puzles deslizantes con Moon Glides.
- [Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-potion-match) — Combina ingredientes y enciende velas.

## Créditos y apoyo

Creado para **Midnight Candy Club de AshinTop** mediante colaboración con IA dirigida por personas en diseño, programación, documentación, pruebas y revisión. Las ilustraciones originales y los sonidos sintetizados se hicieron para este proyecto. Consulta las [notas de diseño](DESIGN.md).

¿Te gustó esta pequeña aventura? **[Dale una estrella a Moonlit Mirrors en GitHub](https://github.com/AshinTop/halloween-mirror-hearts)** para encontrarlo después y seguir las novedades. Al informar de un problema, incluye nivel o modo, navegador, tamaño de ventana y pasos para reproducirlo. Descubre la [colección completa de Halloween](https://github.com/AshinTop/halloween-games).
