import {
  HorseHappyFeetImage,
  HorseMrTobinsImage,
  HorseSocksImage,
  JaylinWilliamsImage,
  JenniferTrotterImage,
  TammyWilliamsImage,
} from '../images';

export default [
  {
    title: 'General entry - Friday',
    horses: '3',
    riders: '3',
    members: [
      {
        avatar: TammyWilliamsImage,
        fullName: 'Tammy Williams',
        status: 'Authorized',
        horses: [],
      },
      {
        avatar: JaylinWilliamsImage,
        fullName: 'Jaylin Williams',
        status: 'Authorized',
        horses: [],
      },
      {
        avatar: JenniferTrotterImage,
        fullName: 'Jennifer Trotter',
        status: 'Authorized',
        horses: [],
      },
    ],
  },
  {
    title: 'General entry - Friday',
    horses: '3',
    riders: '3',
    members: [
      {
        avatar: TammyWilliamsImage,
        fullName: 'Tammy Williams',
        status: 'Authorized',
        horses: [
          {
            avatar: HorseMrTobinsImage,
            fullName: 'Mr Tobins',
            status: 'Jaylin Williams • Authorized',
          },
        ],
      },
      {
        avatar: JaylinWilliamsImage,
        fullName: 'Jaylin Williams',
        status: 'Authorized',
        horses: [
          {
            avatar: HorseHappyFeetImage,
            fullName: 'Happy Feet',
            status: 'Jaylin Williams • Authorized',
          },
        ],
      },
      {
        avatar: JenniferTrotterImage,
        fullName: 'Jennifer Trotter',
        status: 'Authorized',
        horses: [
          {
            avatar: HorseSocksImage,
            fullName: 'Socks',
            status: 'Jennifer Trooter • Authorized',
          },
        ],
      },
    ],
  },
];
