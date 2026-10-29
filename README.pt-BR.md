[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 👻 Moonlit Mirrors — Quebra-cabeça de amor de Halloween

**Dois fantasminhas. Um movimento. Um caminho para casa juntos.** Moonlit Mirrors é um quebra-cabeça original de Halloween criado para o [Love Game](https://love-game.org/). Guie Luna, azul, e Rose, rosa, por salas em pares. Uma direção controla os dois, paredes mudam o ritmo e espelhos transformam passos simples em desafios. No final, espera um reencontro carinhoso.

**[Jogar agora](https://halloween-mirror-hearts.crazy3d.org/)** · [Coleção de Halloween](https://github.com/AshinTop/halloween-games) · [Guia de incorporação](EMBEDDING.md) · [Notas de design](DESIGN.md)

**Idiomas da documentação:** English, 简体中文, Español, Português (Brasil), 日本語. **Interface do jogo:** apenas inglês e chinês simplificado. Os demais idiomas do README não significam que os menus do jogo já foram traduzidos.

![Moonlit Mirrors com Luna e Rose em salas espelhadas e saídas em formato de coração](docs/images/gameplay.jpg)

## Um desafio para dois corações 🎃

- **12 pares de salas de 5×5**, com soluções verificadas e metas mínimas exatas.
- Movimento espelhado, portas com chave compartilhada e troca de fase horizontal.
- Desfazer sem limite, reiniciar, escolher sala e pedir dicas a partir da posição atual.
- Fantasmas SVG originais, som opcional, recordes locais e uma comemoração com abraço e beijo.

## Como as salas funcionam

Cada direção move os dois fantasmas. No modo espelho, eles seguem juntos na vertical e em sentidos opostos na horizontal. Se uma parede bloquear um deles, ele espera enquanto o outro pode continuar. Use essa diferença para alinhar os caminhos.

Termine com **os dois sobre suas próprias portas de coração ao mesmo tempo**. Nas salas com chave, é preciso pegá-la. A partir da sala 4, a chave abre as portas correspondentes dos dois lados depois que aquele movimento termina; não é possível atravessar antes da abertura.

A partir da sala 7, a **troca de fase** alterna o movimento horizontal entre espelhado e alinhado. Trocar custa um movimento. As soluções ótimas do segundo capítulo usam essa ação.

Três estrelas exigem o número mínimo exato de movimentos. Duas permitem até 1,5 vez a meta, arredondada para cima; as outras conclusões recebem uma. Não há contagem regressiva nem derrota obrigatória. Dicas não descontam estrelas.

## Controles

| Ação | Mouse ou toque | Teclado |
|---|---|---|
| Mover os dois | Direcionais ou casa vizinha a um fantasma | Setas ou W / A / S / D |
| Desfazer | Botão | Z |
| Mostrar o próximo passo | Dica | H |
| Trocar fase | Botão, quando liberado | Espaço fora de botão |
| Reiniciar / escolher sala | Controles visíveis | Tab e Enter |

Tocar ao lado de Rose traduz a direção para o movimento que você vê nela. Em janelas pequenas, os direcionais são a opção mais clara.

A dica procura o caminho restante mais curto considerando **posições, chave e fase atuais**. Ela mostra a próxima ação. Se não houver mais saída daquele estado, desfaça ou reinicie.

## Um reencontro que vale a caminhada

Luna mantém sua estrela e Rose seu laço enquanto flutuam uma até a outra, se abraçam e trocam um beijinho com um coração. A sequência de cerca de 2,8 segundos termina em uma pose de aconchego. Os botões de próxima sala e fechar funcionam imediatamente. Com movimento reduzido, aparece o abraço estático. A celebração não muda regras, movimentos ou estrelas.

Recordes de conclusão e preferências ficam no navegador. Recarregar reinicia a sala escolhida, sem restaurar posições incompletas. Um link como [sala 9](https://halloween-mirror-hearts.crazy3d.org/#room=9) compartilha o começo, não uma gravação.

## Perguntas frequentes

**Tem multiplayer online?** É um quebra-cabeça em um dispositivo. Jogue sozinho ou converse sobre os movimentos com alguém ao lado.

**Por que só um fantasma se moveu?** As paredes bloqueiam cada lado separadamente.

**Posso experimentar e usar dicas?** Desfazer é ilimitado e dicas não têm penalidade de estrelas. A avaliação usa a contagem final de movimentos.

## Imagens e vídeo

![Moonlit Mirrors compacto com duas salas, botões de direção e controles do quebra-cabeça](docs/images/mobile.jpg)

Interface real capturada em um iframe compacto no navegador. A imagem mostra a organização dos controles; não representa um teste de desempenho em um celular físico.

[Assista à apresentação de 24 segundos](https://halloween-mirror-hearts.crazy3d.org/intro.html) · [Baixe o MP4 com legendas](docs/media/intro.mp4). O vídeo é silencioso e foi montado com capturas reais do jogo, não com uma partida gravada continuamente. As imagens registram a interface na data da captura e podem ser anteriores a melhorias visuais posteriores.

## Coloque o jogo no seu site

```html
<iframe src="https://halloween-mirror-hearts.crazy3d.org/"
  title="Moonlit Mirrors"
  style="display:block;width:100%;height:521px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

Os tamanhos previstos incluem 833×521 no desktop, 356×280 e 326×280 nas janelas compactas do Love Game, 390×650 em retrato e 844×340 em paisagem. Prefira os direcionais nos menores tamanhos e mais altura quando houver espaço. Diálogos compactos mantêm os botões utilizáveis e permitem rolagem interna.

A versão on-line é publicada no Cloudflare a partir deste repositório do GitHub. Defina uma altura real para o iframe e reserve espaço para a barra do site principal. O site pode oferecer tela cheia. Consulte [EMBEDDING.md](EMBEDDING.md) para os detalhes.

## Executar e verificar localmente

```sh
python3 -m http.server 4173
```

Sirva a pasta raiz do repositório e abra [http://localhost:4173/](http://localhost:4173/). O jogo é estático, sem compilação ou instalação de dependências. Use HTTP(S), pois abrir por `file://` pode bloquear os módulos JavaScript. Os testes exigem Node.js.

```sh
npm test
```

Os **12 testes** cobrem distâncias exatas, soluções de todas as salas, direções espelhadas, paredes independentes, momento de abrir portas, custo de fase, dicas após mudanças, desfazer, estrelas e validação do estado.

O código do jogo não exige conta, API remota, SDK de anúncios nem CDN de arquivos externos. Os registros ficam no navegador, sem sincronização na nuvem. O Cloudflare pode adicionar scripts de hospedagem e registros de requisições. O áudio sintetizado opcional segue as permissões do navegador.

## Outras aventuras ao luar 🍬

- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-love-game) — Dois fantasmas, portões e uma lanterna compartilhada.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-3d) — Lights Out espacial com lanternas conectadas.
- [Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-pumpkin-shift) — Quebra-cabeças deslizantes com Moon Glides.
- [Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/) · [Código](https://github.com/AshinTop/halloween-potion-match) — Combine ingredientes e acenda velas.

## Créditos e apoio

Criado para o **Midnight Candy Club de AshinTop**, com colaboração de IA orientada por pessoas em design, programação, documentação, testes e revisão. As ilustrações originais e os sons sintetizados foram feitos para este projeto. Veja as [notas de design](DESIGN.md).

Gostou desta pequena aventura? **[Deixe uma estrela para Moonlit Mirrors no GitHub](https://github.com/AshinTop/halloween-mirror-hearts)** para guardar o projeto e acompanhar novidades. Ao relatar um problema, informe fase ou modo, navegador, tamanho da janela e passos para reproduzi-lo. Conheça a [coleção completa de Halloween](https://github.com/AshinTop/halloween-games).
