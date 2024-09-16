'use client';

import { ThemeProvider } from '@mui/material/styles';
import { coworkTheme } from '@/app/_ui/theme';
import { LogistrationStyle } from './style';
import {
  Box, Stack, IconButton, AppBar, Toolbar, Typography,
  AutoFixHighRoundedIcon,
  ConstructionRoundedIcon,
  SettingsSuggestRoundedIcon,
  ThumbUpAltRoundedIcon,
  ArrowBackRoundedIcon
} from '@/app/_ui/mui';
import { Logo } from '@/app/_images';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
];



export default function LogistrationLayout({ children }) {
  return (
    <ThemeProvider theme={coworkTheme}>
      <LogistrationStyle>
        <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
          <AppBar position="static">
            <Toolbar
              variant="dense"
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                p: '8px 12px',
              }}
            >
              <IconButton
                title='Home'
                color="primary"
                size="small"
                aria-label="Back"
                component="a"
                href="/"
              >
                <ArrowBackRoundedIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box sx={{ flex: '1 1', overflow: 'auto' }}>
            <Box className="logistration-wrapper" sx={{ display: 'flex', direction: 'column', justifyContent: 'space-between', height: '100%', width: '100%', m: 'auto' }}>
              <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                sx={{
                  justifyContent: 'center',
                  gap: { xs: 6, sm: 12 },
                  p: 2,
                  m: 'auto',
                }}
              >
                <Stack
                  sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
                >
                  <Box><Logo /></Box>
                  {items.map((item, index) => (
                    <Stack key={index} direction="row" sx={{ gap: 2 }}>
                      {item.icon}
                      <div>
                        <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.description}
                        </Typography>
                      </div>
                    </Stack>
                  ))}
                </Stack>
                {children}
              </Stack>
            </Box>
          </Box>
        </Box>
      </LogistrationStyle>
    </ThemeProvider >
  );
}
