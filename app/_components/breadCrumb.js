'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Breadcrumbs,
  breadcrumbsClasses,
  NavigateNextRoundedIcon
} from '@/app/_ui/mui';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs({ breadcrumbs }) {
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {
        breadcrumbs.map((bc, ind) => <Typography
          key={ind}
          variant="body1"
          sx={ind + 1 === breadcrumbs.length ? { color: 'text.primary', fontWeight: 600 } : {}}
        >{bc}</Typography>)
      }

    </StyledBreadcrumbs >
  );
}