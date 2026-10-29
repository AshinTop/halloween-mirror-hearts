[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 👻 Moonlit Mirrors — 两只小幽灵的万圣节爱情解谜

**两只小幽灵，同一个方向，一起回家的办法。** Moonlit Mirrors 是为 [Love Game](https://love-game.org/) 创作的原创万圣节双角色解谜游戏。蓝色的 Luna 和粉色的 Rose 分别困在镜像房间里，一次操作会同时影响两人。借助墙壁、钥匙和镜像切换，把他们一起送到爱心门口，迎接一个温柔的拥抱。

**[在线试玩](https://halloween-mirror-hearts.crazy3d.org/)** · [万圣节游戏总合集](https://github.com/AshinTop/halloween-games) · [嵌入说明](EMBEDDING.md) · [设计说明](DESIGN.md)

**文档语言：** English、简体中文、Español、Português (Brasil)、日本語。**游戏界面目前仅支持英语和简体中文**；西班牙语、葡萄牙语和日语版本为完整说明文档，并非已实现的界面翻译。

![Moonlit Mirrors 万圣节爱情解谜，Luna 与 Rose 位于成对房间和爱心出口旁](docs/images/gameplay.jpg)

## 给两颗小心脏的谜题 🎃

- **12 组 5×5 双房间**，每组都有已验证解法和准确的最少步数目标。
- 镜像移动、共享钥匙门，以及后半章改变水平移动关系的相位切换。
- 无限撤销、重开、选关，以及根据当前双人位置求解的提示。
- 原创 SVG 幽灵、可关闭音效、本地记录和通关后的拥抱亲吻动画。

## 房间的规则

每次输入方向，两只幽灵都会尝试移动。镜像模式中，上下同向、左右反向。如果其中一只被墙挡住，它会停在原地，另一只仍可移动。利用这种差异，才能把两人的路线对齐。

**两只幽灵必须同时站在各自的爱心门上**才能完成。有钥匙的房间还需要先拿到钥匙。第 4 关开始，拾取钥匙会在这一回合移动结束后打开两边的钥匙门；不能在拿钥匙的同一次移动中提前穿过尚未开启的门。

第 7 关开始可以使用**相位切换**，在水平镜像移动与水平同向移动之间切换。切换会消耗一步。后半章的最优路线会用到这一动作，它是解谜规则的一部分。

用准确的最少步数完成可得三星；不超过目标的 1.5 倍并向上取整可得两星；其余完成得一星。没有倒计时或强制失败限制，使用提示也不会扣星。

## 操作

| 操作 | 鼠标或触屏 | 键盘 |
|---|---|---|
| 移动两只幽灵 | 方向按钮，或点击幽灵旁的相邻格 | 方向键 / W A S D |
| 撤销 | 撤销按钮 | Z |
| 查看下一步解法 | 提示按钮 | H |
| 切换相位 | 解锁后的相位按钮 | 焦点不在按钮上时按空格 |
| 重开或选关 | 可见按钮与菜单 | Tab 和 Enter |

点击 Rose 身旁的格子时，游戏会按她在画面中的实际方向转换输入。很小的嵌入窗口中，优先使用方向按钮会更清楚。

提示会根据**当前两人的位置、钥匙状态和相位**搜索最短的剩余路线，只显示下一步。如果当前状态已经没有可行路线，就需要撤销或重开。

## 值得到达的小团聚

通关后，Luna 保留星星饰物，Rose 戴着蝴蝶结，两人轻轻飘近、伸手拥抱，再亲一下，冒出一颗小爱心。约 2.8 秒的动画结束后停留在依偎姿势。下一关和关闭按钮立即可用；开启减少动态效果时，会直接展示静态拥抱。团聚动画不改变规则、步数和星级。

最佳通关步数与偏好保存在本浏览器。刷新会重新开始所选房间，不恢复未完成的位置。[第 9 关链接](https://halloween-mirror-hearts.crazy3d.org/#room=9) 分享的是起始关卡，而不是操作录像。

## 常见问题

**能在线双人联机吗？** 这是单设备解谜游戏。可以独自玩，也可以和身边的人讨论下一步。

**为什么只有一只幽灵动了？** 两边的墙壁分别判定，这正是调整两人相对位置的方法。

**试错会影响星级吗？** 可以无限撤销，提示不扣星；最终星级由完成时的步数决定。

## 图文与视频

![Moonlit Mirrors 紧凑窗口，展示双房间、方向按钮与解谜控制](docs/images/mobile.jpg)

截图来自真实浏览器中的紧凑 iframe，用于说明布局，不代表实体手机性能测试。

[观看 24 秒介绍视频](https://halloween-mirror-hearts.crazy3d.org/intro.html) · [下载带字幕 MP4](docs/media/intro.mp4)。视频无声，由实际游戏截图编排而成，并非连续操作录像。截图和视频记录的是拍摄时的界面，可能早于后续视觉细节更新。

## 嵌入你的站点

```html
<iframe src="https://halloween-mirror-hearts.crazy3d.org/"
  title="Moonlit Mirrors"
  style="display:block;width:100%;height:521px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

对应的主站窗口包括 833×521 桌面、356×280 与 326×280 Love Game 紧凑窗口、390×650 竖屏及 844×340 横屏。最小尺寸下建议使用方向按钮，有空间时可增加高度。紧凑弹窗保留可操作按钮，需要时可在内部滚动。

在线版本通过 GitHub 关联部署到 Cloudflare。请为 iframe 设置实际高度，并给主站工具栏留出空间；全屏入口可由主站提供。详细约定见 [EMBEDDING.md](EMBEDDING.md)。

## 本地运行与规则验证

```sh
python3 -m http.server 4173
```

在仓库根目录启动静态服务，再打开 [http://localhost:4173/](http://localhost:4173/)。游戏无需构建或安装依赖。请使用 HTTP(S)，直接双击 `file://` 页面可能阻止 ES 模块加载。运行测试需要 Node.js。

```sh
npm test
```

**12 项测试**覆盖准确搜索距离、全关卡解法、镜像方向、独立墙壁阻挡、钥匙开启时机、相位步数、改变状态后的提示、撤销、星级和状态校验。

游戏源码不依赖账号、远程 API、广告 SDK 或外部素材 CDN。记录保存在当前浏览器，不提供云端同步；Cloudflare 可能另外加入托管脚本与请求日志。可选合成音效遵循浏览器的声音权限。

## 下一段月光小冒险 🍬

- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-love-game) — 双幽灵、压力门与共享灯笼.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-3d) — 带灵魂联动的 3D 熄灯谜题.
- [Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-pumpkin-shift) — 带月光滑行的数字滑块谜题.
- [Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-potion-match) — 原料三消、配方收集与烛火目标.

## 制作说明与支持

为 **AshinTop 的 Midnight Candy Club** 创作，设计、编程、文案、测试与审查由人类指导的 AI 协作完成。原创插画和浏览器合成声音为本项目制作，创作意图可见 [设计说明](DESIGN.md)。

喜欢这段小冒险？欢迎 **[给 Moonlit Mirrors 点一颗 GitHub Star](https://github.com/AshinTop/halloween-mirror-hearts)**，方便收藏并关注更新。反馈问题时，请附关卡或模式、浏览器、窗口大小和复现步骤。还可以逛逛 [完整万圣节合集](https://github.com/AshinTop/halloween-games)。
