import {
  AlexLeeImage,
  HorseHappyFeetImage,
  HorseMrTobinsImage,
  HorseSocksImage,
  UserAvatarImage,
} from '../images';

export default [
  {
    avatar: AlexLeeImage,
    from: 'Alex Lee',
    datetime: '1:35pm, July 1',
    content:
      'Okay, i think that file should do. I checked with my IT guys and he addures me it’s an SVG file. ',
    attachFiles: [HorseMrTobinsImage],
  },
  {
    avatar: UserAvatarImage,
    from: 'You',
    datetime: '1:48pm, Friday',
    content: 'Okay great, thanks. Are there more files you wanted to send?',
    attachFiles: [],
  },
  {
    avatar: AlexLeeImage,
    from: 'Alex Lee',
    datetime: '1:35pm, July 1',
    content:
      'Yes sorry, had a meeting. Yeah find attached the rest of the files in svg format.',
    attachFiles: [HorseMrTobinsImage, HorseHappyFeetImage, HorseSocksImage],
  },
  {
    avatar: UserAvatarImage,
    from: 'You',
    datetime: '2:48pm, Today',
    content:
      'Awesome, I will let you know if we need anythgin else. Have a great weekend!',
    attachFiles: [],
  },
];
