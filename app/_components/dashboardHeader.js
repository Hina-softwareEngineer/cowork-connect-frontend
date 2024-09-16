'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Stack
} from '@/app/_ui/mui';
import HeaderBreadcrumbs from './breadCrumb';
import Search from './search';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <HeaderBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
      </Stack>
    </Stack>
  );
}