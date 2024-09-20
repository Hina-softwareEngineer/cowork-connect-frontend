'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Avatar, Box, Stack, drawerClasses, MuiDrawer, Typography,
} from '@/app/_ui/mui';
import MenuContent from './menuContent';
import OptionsMenu from './optionsMenu';
import { getUser } from '../_ui/utils';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function SideMenu() {
  const user = getUser();
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box mt="52px"></Box>
      <MenuContent />

      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes="small"
          alt={user.first_name}
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: 'auto' }} width='125px'>
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', }}>
            {user.email}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}