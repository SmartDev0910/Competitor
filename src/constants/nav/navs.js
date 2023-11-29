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
    route: 'MessageScreen',
  },
  {
    icon: DoorbellIcon,
    text: 'Notifications',
    route: 'NotificationScreen',
  },
  {
    icon: QuillPenIcon,
    text: 'Paperwork',
    route: 'PaperworkScreen',
  },
  {
    icon: BillIcon,
    text: 'Bills',
    route: 'BillsScreen',
  },
  {
    icon: SettingsIcon,
    text: 'Settings',
    route: 'EditProfileScreen',
  },
  {
    icon: HelpIcon,
    text: 'Help',
    route: 'HelpScreen',
  },
];
