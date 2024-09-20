'use client';

import React, { useState, useEffect } from 'react';
import { coworkTheme } from '@/app/_ui/theme';
import {
  Stack, IconButton,
  KeyboardArrowRightRoundedIcon,
  Grid, Card, CardContent, Typography, Box, CircularProgress,
} from '@/app/_ui/mui';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { baseUrl, getToken } from '@/app/_ui/utils';
import NavbarBreadcrumbs from '@/app/_components/breadCrumb';



export default function AddListing() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [myWorkspaces, setMyWorkspaces] = useState([]);

  useEffect(() => {

    axios.get(`${baseUrl}space/get-workspaces/`, getToken())
      .then(res => {
        setMyWorkspaces(res.data);
        console.log(myWorkspaces);
        setLoading(false);
      })
      .catch(err => { console.log(err, err.response); setLoading(false); });
  }, []);



  return (
    <>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        View Your Workspaces
      </Typography>
      <Box sx={{ width: '100%', px: 8, pt: 5 }}>
        {
          loading && <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>
        }
        <Grid container spacing={4}>
          {
            (myWorkspaces.length === 0 && !loading) &&
            <Typography variant="h4" sx={{ padding: 2 }}>
              You haven't added any workspace yet.
            </Typography>
          }
          {
            myWorkspaces.map((workspace, ind) => (
              <Grid key={ind} item size={6}>
                <Card onClick={() => router.push(`/listing-detail/${workspace.id}`)} variant="outlined" sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: 'center',
                  width: '100%',
                  gap: coworkTheme.spacing(2),
                  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
                }} >

                  <CardContent sx={{ px: 2, pb: '16px !important', bgcolor: coworkTheme.palette.common.white }}>
                    <Stack direction='row' alignItems='center' spacing={2}>
                      <Box flex='1'>
                        <Typography gutterBottom variant="h5" component="div" fontSize='18px'>
                          {workspace.description.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <NavbarBreadcrumbs breadcrumbs={[workspace.location.country, workspace.location.city, workspace.location.area]} />
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton sx={{ border: 'none' }}>
                          <KeyboardArrowRightRoundedIcon />
                        </IconButton>
                      </Box>

                    </Stack>

                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box >
    </>
  );
}