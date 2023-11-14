import {setNativeProps} from 'react-native-reanimated';
import {
  BillIcon,
  DoorbellIcon,
  HelpIcon,
  HomeIcon,
  MessagingIcon,
  PeopleIcon,
  QuillPenIcon,
  SettingsIcon,
  TodayIcon,
  UserIcon,
} from '../icons';

export default [
  {
    icon: HomeIcon,
    text: 'Home',
    route: 'HomeScreen',
  },
  {
    icon: PeopleIcon,
    text: 'Following',
    route: 'FollowingScreen',
  },
  {
    icon: TodayIcon,
    text: 'My Events',
    route: 'MyEventsScreen',
  },
  {
    icon: UserIcon,
    text: 'Profile',
    route: 'ProfileScreen',
  },
  {
    icon: MessagingIcon,
    text: 'Messages',
    route: 'FollowingScreen',
  },
  {
    icon: DoorbellIcon,
    text: 'Notifications',
    route: 'FollowingScreen',
  },
  {
    icon: QuillPenIcon,
    text: 'Paperwork',
    route: 'FollowingScreen',
  },
  {
    icon: BillIcon,
    text: 'Bills',
    route: 'FollowingScreen',
  },
  {
    icon: SettingsIcon,
    text: 'Settings',
    route: 'FollowingScreen',
  },
  {
    icon: HelpIcon,
    text: 'Help',
    route: 'FollowingScreen',
  },
];
