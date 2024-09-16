'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  HomeRoundedIcon,
  InfoRoundedIcon,
  SettingsRoundedIcon,
  HelpRoundedIcon,
  Stack,
} from '@/app/_ui/mui';


const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon /> },
  { text: 'Analytics', icon: <HomeRoundedIcon /> },
  { text: 'Clients', icon: <HomeRoundedIcon /> },
  { text: 'Tasks', icon: <HomeRoundedIcon /> },
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon /> },
  { text: 'About', icon: <InfoRoundedIcon /> },
  { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
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
