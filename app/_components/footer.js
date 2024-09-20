'use client';

import React from 'react';
import {
  Box, Typography, Stack, IconButton, InstagramIcon, LinkedInIcon, ChatIcon, Divider,
  Button
} from '@/app/_ui/mui';
import { coworkTheme } from '../_ui/theme';


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: coworkTheme.palette.background.default,
        px: '20px',
        py: '20px',
        textAlign: 'center',
        borderTop: '1px solid hsla(220, 20%, 80%, 0.4)',
        mt: 3,
      }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center' mt={3}>
        <Stack direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}>
          <Button href='/terms-and-conditions'>Terms and Conditions</Button>
          <Button href='/privacy-policy'>Privacy Policy</Button>
          <Button href='/cookie'>Cookie Preferences</Button>
          <Button href='/security'>Security</Button>
          <Button href='/sitemap'>Sitemap</Button>
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, }}>
          <IconButton sx={{ color: coworkTheme.palette.secondary.main }} aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: coworkTheme.palette.secondary.main }} aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: coworkTheme.palette.secondary.main }} aria-label="Chat">
            <ChatIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" mt={1} mb={2}>
        Copyright Cowork-Connect &copy;2024
      </Typography>
    </Box>
  );
};

export default Footer;