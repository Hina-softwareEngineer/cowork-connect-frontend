'use client';

import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Divider, } from '@/app/_ui/mui';
import { coworkTheme } from '@/app/_ui/theme';
import { useRouter } from 'next/navigation';


export const WorkspaceCard = ({ workspace }) => {
  const router = useRouter();
  let fallbackImage = "https://hubble.imgix.net/listings/uploads/spaces/4592/1714482568937-offic20000.jpg?auto=format%2Ccompress&ar=4%3A3&fit=crop&q=30&w=3840" // Replace with your image UR
  let deskPrice = workspace.price_desks.filter(pd => pd.duration === 'day');
  let deskDuration = 'day'
  if (deskPrice.length === 0) { deskPrice = workspace.price_desks[0]?.price; deskDuration = workspace.price_desks[0]?.duration; }
  else { deskPrice = deskPrice[0]?.price; }


  return (
    <Card onClick={() => router.push(`/listing-detail/${workspace.id}`)} variant="outlined" sx={{
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      width: '100%',
      maxWidth: 390, p: 0,
      gap: coworkTheme.spacing(2),
      boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    }} >
      <CardMedia
        component="img"
        alt={workspace.description.name}
        height="230"
        image={workspace.description.image || fallbackImage}
      />
      <CardContent sx={{ px: 2, pb: '16px !important', bgcolor: coworkTheme.palette.common.white }}>
        <Typography gutterBottom variant="h5" component="div" fontSize='18px'>
          {workspace.description.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {workspace.location.city || workspace.location.area}
        </Typography>
        <Divider sx={{ mt: 2, mb: 1 }} />
        {
          deskPrice && (<Grid container spacing={2} justifyContent='space-between' mt={2}>
            <Grid item xs={6} >
              <Typography variant="body2" color="text.primary" fontSize='15px'>
                Coworking Space
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary" fontWeight='bold' fontSize='15px'>
                {parseInt(deskPrice) === 0 ? 'Contact to Enquire' : `$${deskPrice} / ${deskDuration}`}
              </Typography>
            </Grid>
          </Grid>)
        }
        {
          workspace.price_private_offices.length > 0 && (
            <Grid container spacing={2} justifyContent='space-between' mt={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary" fontSize='15px'>
                  Private Day Office
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="text.primary" fontWeight='bold' fontSize='15px'>
                  {parseInt(workspace.price_private_offices[0].price) === 0 ? 'Contact to Enquire' : `$${workspace.price_private_offices[0].price} / month`}
                </Typography>
              </Grid>
            </Grid>
          )
        }
        {
          workspace.price_floors.length > 0 && (
            <Grid container spacing={2} justifyContent='space-between' mt={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary" fontSize='15px'>
                  Floors
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="text.primary" fontWeight='bold' fontSize='15px'>
                  {parseInt(workspace.price_floors[0].price) === 0 ? 'Contact to Enquire' : `$${workspace.price_floors[0].price} / month`}
                </Typography>
              </Grid>
            </Grid>
          )
        }
        {
          workspace.meeting_rooms.length > 0 && (
            <Grid container spacing={2} justifyContent='space-between' mt={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary" fontSize='15px'>
                  Meeting Rooms
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="text.primary" fontWeight='bold' fontSize='15px'>
                  Available to book
                </Typography>
              </Grid>
            </Grid>
          )
        }



      </CardContent>
    </Card>
  )
};
