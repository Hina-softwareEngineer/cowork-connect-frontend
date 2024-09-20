'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SettingsRoundedIcon,
  Stack,
  EditNoteRoundedIcon,
  ListAltRoundedIcon
} from '@/app/_ui/mui';
import { usePathname, useRouter } from 'next/navigation';



const mainListItems = [
  { text: 'Add Listings', icon: <EditNoteRoundedIcon />, link: '/dashboard/add-listing' },
  { text: 'View Listings', icon: <ListAltRoundedIcon />, link: '/dashboard/view-listing' },
  // { text: 'Clients', icon: <HomeRoundedIcon /> },
  // { text: 'Tasks', icon: <HomeRoundedIcon /> },
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon /> },
  // { text: 'About', icon: <InfoRoundedIcon /> },
  // { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => router.push(item.link)} selected={pathname === item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
