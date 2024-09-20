'use client';

import { ThemeProvider } from '@mui/material/styles';
import { coworkTheme } from '@/app/_ui/theme';
import { ListingsStyle } from './style';
import {
  Box, Button, AppBar, Toolbar, Typography, Avatar,
} from '@/app/_ui/mui';
import { Logo } from '@/app/_images';
import OptionsMenu from '../_components/optionsMenu';
import Footer from '../_components/footer';
import { getUser } from '../_ui/utils';
import { useRouter } from 'next/navigation';


export default function DashboardLayout({ children }) {
  const user = getUser();
  const router = useRouter();


  return (
    <ThemeProvider theme={coworkTheme}>
      <ListingsStyle>
        <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'auto', }}>
          <AppBar position="static" sx={{ zIndex: 1201 }}>
            <Toolbar
              variant="dense"
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                p: '8px 50px',
                maxWidth: 1550,
                mx: 'auto'
              }}
            >
              <Box sx={{ transform: 'scale(1.5) translateX(10px) translateY(3px)' }}><Logo width={50} height={35} /></Box>
              <Box display='flex'>
                <Box display='flex' alignItems='center' >

                  {
                    user.first_name ? (<><Avatar
                      sizes="small"
                      alt={user.first_name}
                      src="/static/images/avatar/7.jpg"
                      sx={{ width: 36, height: 36 }}
                    />
                      <Box sx={{ mx: 1 }}>
                        <Typography color={coworkTheme.palette.text.primary} variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                          {user.first_name} {user.last_name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {user.email}
                        </Typography>
                      </Box></>) : (
                      <>
                        <Button onClick={() => router.push("/register")} variant='outlined' color='secondary'>Register</Button>
                        <Button sx={{ ml: 2 }} onClick={() => router.push("/login")} variant='contained' color='secondary' >Login</Button>
                      </>
                    )
                  }

                </Box>
                {user.first_name && <OptionsMenu />}

              </Box>

            </Toolbar>
          </AppBar>

          <Box display="flex" sx={{ flex: '1 1' }}>
            <Box sx={{ flexGrow: 1, maxWidth: 1500, px: '50px', mx: 'auto' }}>
              <Box className="listing-wrapper">
                <Box sx={{ width: '100%' }}>
                  {children}
                </Box>
              </Box>
            </Box>
          </Box>

          <Footer />
        </Box>
      </ListingsStyle>
    </ThemeProvider >
  );
}