import {
  JaylinWilliamsImage,
  JenniferTrotterImage,
  TammyWilliamsImage,
} from '../images';

export default [
  {
    title: 'General entry - Friday',
    available: '230',
    price: '80',
    members: [],
  },
  {
    title: 'General entry - Saturday',
    available: '87',
    price: '80',
    members: [],
  },
  {
    title: 'General entry - Sunday',
    available: '156',
    price: '80',
    members: [],
  },
  {
    title: 'General entry - 3 day pass',
    available: '200',
    price: '200',
    members: [
      {
        avatar: TammyWilliamsImage,
        fullName: 'Tammy Williams',
        status: 'Authorized',
      },
      {
        avatar: JaylinWilliamsImage,
        fullName: 'Jaylin Williams',
        status: 'Authorized',
      },
      {
        avatar: JenniferTrotterImage,
        fullName: 'Jennifer Trotter',
        status: 'Authorized',
      },
    ],
  },
];
