'use client';

import React from 'react';
import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  IconButton,
  Menu,
  MuiMenuItem,
  listClasses,
  paperClasses,
  listItemIconClasses,
  Divider, dividerClasses,
  ListItemText, ListItemIcon,
  MoreVertRoundedIcon,
  LogoutRoundedIcon
} from '@/app/_ui/mui';
import { removeToken } from '../_ui/utils';
import { useRouter } from 'next/navigation';


const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0',
});

export default function OptionsMenu() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: 'transparent' }}
      >
        <MoreVertRoundedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px',
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px',
          },
        }}
      >
        <MenuItem onClick={() => { router.push("/dashboard/add-listing"); handleClose(); }}>Profile</MenuItem>
        <MenuItem onClick={() => { router.push("/dashboard/add-listing"); handleClose(); }}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem
          onClick={() => { removeToken(); router.push("/listings"); handleClose(); }}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0,
            },
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}