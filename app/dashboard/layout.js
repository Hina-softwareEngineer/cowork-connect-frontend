'use client';

import { ThemeProvider } from '@mui/material/styles';
import { coworkTheme } from '@/app/_ui/theme';
import { DashboardStyle } from './styles';
import {
  Box, Stack, IconButton, AppBar, Toolbar, Typography,
  ArrowBackRoundedIcon,
} from '@/app/_ui/mui';
import { Logo } from '@/app/_images';
import SideMenu from '../_components/sidebar';
import DashboardHeader from '../_components/dashboardHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider theme={coworkTheme}>
      <ToastContainer />
      <DashboardStyle>
        <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
          <AppBar position="static" sx={{ zIndex: 1201 }}>
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
              <Box display='flex' alignItems='center'>
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
                <Box sx={{ ml: 2, transform: 'scale(1.5) translateX(10px) translateY(3px)' }}><Logo width={50} height={35} /></Box>
              </Box>
            </Toolbar>
          </AppBar>

          <Box display="flex" sx={{ flex: '1 1' }}>
            <SideMenu />
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
              <Box className="dashboard-wrapper">
                <Stack
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    mx: 3,
                    pb: 10,
                    mt: { xs: 8, md: 0 },
                  }}
                >
                  <DashboardHeader />
                  <Box sx={{ width: '100%' }}>

                    {children}
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

      </DashboardStyle>
    </ThemeProvider>
  );
}