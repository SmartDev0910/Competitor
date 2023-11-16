import {
  CertificateOutlinedIcon,
  ClockOutlinedIcon,
  DepartmentShopOutlinedIcon,
  JourneyOutlinedIcon,
  LocationOutlinedIcon,
  TearOffCalendarOutlinedIcon,
  TwoTicketsOutlinedIcon,
} from '../icons';

export default [
  {
    title: 'Hunter Jumper, Grand Prix',
    statusText: 'Licensed Competition',
    image: CertificateOutlinedIcon,
  },
  {
    title: 'December 14-17th, 2022',
    statusText: 'Registrations close: December 2nd, 2022',
    image: TearOffCalendarOutlinedIcon,
  },
  {
    title: 'Palm Beach Equestrian Center',
    statusText: 'Wellington, FL',
    image: LocationOutlinedIcon,
  },
  {
    title: 'Course Map',
    statusText: 'Draft',
    image: JourneyOutlinedIcon,
  },
  {
    title: 'Accepting Partners',
    statusText: 'Sponsors, Vendors, Nearbye Businesses',
    image: DepartmentShopOutlinedIcon,
    route: 'SponsorsScreen',
  },
  {
    title: '236 tickets remaining',
    statusText: 'Spectator tickets',
    image: TwoTicketsOutlinedIcon,
    route: 'SpectatorTicketsScreen',
  },
  {
    title: 'Event schedule',
    statusText: 'Starts Friday, 8am',
    image: ClockOutlinedIcon,
    route: 'ScheduleScreen',
  },
];
