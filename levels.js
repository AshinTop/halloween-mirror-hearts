export const LEVELS = [
  {
    "id": 1,
    "name": [
      "初遇倒影",
      "A first reflection"
    ],
    "left": [
      ".....",
      ".E...",
      "..#..",
      ".....",
      "S...."
    ],
    "right": [
      ".....",
      "...E.",
      "..#..",
      ".....",
      "....S"
    ],
    "phase": false,
    "par": 4,
    "solution": [
      "up",
      "up",
      "up",
      "right"
    ]
  },
  {
    "id": 2,
    "name": [
      "等一等我",
      "Wait for me"
    ],
    "left": [
      ".E...",
      ".##..",
      "...#.",
      ".#...",
      "S...."
    ],
    "right": [
      ".....",
      "..#.E",
      ".#...",
      "...#.",
      "....S"
    ],
    "phase": false,
    "par": 8,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 3,
    "name": [
      "月下错步",
      "Out of step"
    ],
    "left": [
      "...E.",
      ".#.#.",
      "...#.",
      ".#...",
      "S...."
    ],
    "right": [
      "....E",
      ".#...",
      ".#.#.",
      "...#.",
      "....S"
    ],
    "phase": false,
    "par": 11,
    "solution": [
      "up",
      "up",
      "right",
      "right",
      "down",
      "right",
      "right",
      "up",
      "up",
      "up",
      "left"
    ]
  },
  {
    "id": 4,
    "name": [
      "一把钥匙",
      "One little key"
    ],
    "left": [
      ".EK..",
      ".###.",
      "..D..",
      ".#.#.",
      "S...."
    ],
    "right": [
      "E....",
      "..#..",
      ".D...",
      ".#.#.",
      "....S"
    ],
    "phase": false,
    "par": 12,
    "solution": [
      "up",
      "up",
      "up",
      "right",
      "up",
      "right",
      "right",
      "down",
      "left",
      "left",
      "up",
      "right"
    ]
  },
  {
    "id": 5,
    "name": [
      "为你开门",
      "A door for you"
    ],
    "left": [
      "E....",
      ".#D#.",
      "...#.",
      ".###.",
      "S...."
    ],
    "right": [
      "..K..",
      ".##..",
      "E..D.",
      ".#.#.",
      "....S"
    ],
    "phase": false,
    "par": 15,
    "solution": [
      "up",
      "up",
      "up",
      "right",
      "up",
      "right",
      "right",
      "right",
      "down",
      "down",
      "down",
      "left",
      "left",
      "left",
      "up"
    ]
  },
  {
    "id": 6,
    "name": [
      "迷失的庭院",
      "The lost courtyard"
    ],
    "left": [
      "E..#.",
      ".D.#.",
      ".###.",
      ".....",
      "S...."
    ],
    "right": [
      "...K.",
      ".#.#.",
      ".#D..",
      "...#.",
      "..E.S"
    ],
    "phase": false,
    "par": 17,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "right",
      "down",
      "down",
      "down",
      "down",
      "left",
      "up",
      "right",
      "right",
      "right",
      "left",
      "left"
    ]
  },
  {
    "id": 7,
    "name": [
      "转动月镜",
      "Turn the moon"
    ],
    "left": [
      ".....",
      ".#.#.",
      "...#E",
      ".#...",
      "S...."
    ],
    "right": [
      ".....",
      ".#...",
      ".#.#.",
      "...#.",
      "E...S"
    ],
    "phase": true,
    "par": 11,
    "solution": [
      "right",
      "right",
      "up",
      "right",
      "right",
      "phase",
      "right",
      "up",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 8,
    "name": [
      "同一个方向",
      "The same direction"
    ],
    "left": [
      "....E",
      ".##..",
      "...#.",
      ".#.#.",
      "S...."
    ],
    "right": [
      ".....",
      ".E##.",
      ".#...",
      ".#.#.",
      "....S"
    ],
    "phase": true,
    "par": 12,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "right",
      "right",
      "phase",
      "left",
      "down",
      "right",
      "right"
    ]
  },
  {
    "id": 9,
    "name": [
      "秘密回廊",
      "A secret passage"
    ],
    "left": [
      "...K.",
      ".##..",
      "...D.",
      ".#.#.",
      "SE..."
    ],
    "right": [
      ".E...",
      ".#D#.",
      ".#...",
      "...#.",
      "....S"
    ],
    "phase": true,
    "par": 17,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "phase",
      "right",
      "right",
      "left",
      "left",
      "left",
      "down",
      "down",
      "down",
      "down",
      "left",
      "right"
    ]
  },
  {
    "id": 10,
    "name": [
      "穿过钟楼",
      "Through the belfry"
    ],
    "left": [
      "....E",
      ".D.#.",
      ".###.",
      "...#.",
      "S...."
    ],
    "right": [
      "..K..",
      ".#.#.",
      "...D.",
      ".#.#.",
      "..E.S"
    ],
    "phase": true,
    "par": 16,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "right",
      "right",
      "right",
      "phase",
      "left",
      "down",
      "down",
      "down",
      "down",
      "right",
      "right"
    ]
  },
  {
    "id": 11,
    "name": [
      "心跳的距离",
      "A heartbeat apart"
    ],
    "left": [
      "..K..",
      ".###.",
      "...D.",
      ".#.#.",
      "S.E.."
    ],
    "right": [
      "..E..",
      ".#D#.",
      "...#.",
      ".##..",
      "....S"
    ],
    "phase": true,
    "par": 17,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "right",
      "right",
      "phase",
      "right",
      "right",
      "down",
      "down",
      "down",
      "down",
      "right",
      "left",
      "left"
    ]
  },
  {
    "id": 12,
    "name": [
      "月光下重逢",
      "Together at midnight"
    ],
    "left": [
      ".E...",
      ".##D.",
      "...#.",
      ".#.#.",
      "S...."
    ],
    "right": [
      "..K..",
      ".#.#.",
      ".D...",
      ".###.",
      "..E.S"
    ],
    "phase": true,
    "par": 16,
    "solution": [
      "up",
      "up",
      "up",
      "up",
      "right",
      "right",
      "down",
      "down",
      "left",
      "phase",
      "right",
      "down",
      "down",
      "right",
      "left",
      "left"
    ]
  }
];
