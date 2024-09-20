'use client';

import React, { useEffect, useState } from 'react';
import {
  Grid, Typography, Box, Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Radio,
  RadioGroup,
  CircularProgress,
  ListItem
} from '@/app/_ui/mui';
import { coworkTheme } from '@/app/_ui/theme';
import NavbarBreadcrumbs from '@/app/_components/breadCrumb';
import { TableContainerStyled } from '../../style';
import { BookMentorForm } from '@/app/_components/bookMentor';
import axios from 'axios';
import { baseUrl } from '@/app/_ui/utils';
import { amenities } from '@/app/dashboard/constants';
import { BookTourForm } from '@/app/_components/bookTour';


let fallbackImage = "https://hubble.imgix.net/listings/uploads/spaces/4592/1714482568937-offic20000.jpg?auto=format%2Ccompress&ar=4%3A3" // Replace with your image UR

const ListingDetailPage = ({ params }) => {
  const [workspace, setWorkspace] = useState(null);
  const [openMentorBookingForm, setOpenMentorBookingForm] = useState(false);
  const [openTourBookingForm, setOpenTourBookingForm] = useState(false);
  const [booking, setBooking] = useState({
    team_size: '',
    type: '',
    duration: '',
  });

  useEffect(() => {
    axios.get(`${baseUrl}space/get-workspaces/${params.workspace_id}/`)
      .then(res => {
        console.log(res.data, '---------->>');
        setWorkspace(res.data);
      })
      .catch(err => console.log(err, err.response))
  }, []);

  const handleChange = (field, value) => {
    setBooking({ ...booking, [field]: value });
  }

  if (!workspace) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>;
  }


  const { country, city, area } = workspace.location;
  const updatedAmenties = workspace.amenities.map((amenity) => {
    let category = amenities[amenity.category];
    let facilities = category.facilities;
    let myAmenity = facilities.filter(fac => fac.name === amenity.name)[0];

    return { ...amenity, category: category.label, name: myAmenity.label }
  });


  function groupByCategory(items) {
    return items.reduce((result, item) => {
      const category = item.category;

      // If the category doesn't exist in the result, create an empty array for it
      if (!result[category]) {
        result[category] = [];
      }

      // Push the item into the appropriate category array
      result[category].push(item);

      return result;
    }, {});
  }
  let amenitiesToRender = groupByCategory(updatedAmenties);

  return (
    <Box my={3}>
      <Grid container spacing={4}>
        <Grid size={8}>
          <Box width='710px' height='450px' overflow='hidden' borderRadius='16px'>
            <img src={workspace.description.image || fallbackImage} width='100%' style={{ height: 'inherit', width: '-webkit-fill-available' }} alt='' />
          </Box>

          <Box my={5}>
            <NavbarBreadcrumbs breadcrumbs={[country, city, area]} />
            <Typography component="h2" variant="h6" fontSize={30}>{workspace.description.name}</Typography>


            <Typography
              mt={2}
              component="h5"
              variant="h5" fontSize={16}>Description</Typography>
            <Typography mt={1} textAlign='justify'>{workspace.description.description}</Typography>

            <Typography
              mt={4}
              component="h5"
              variant="h5" fontSize={16}>Address</Typography>
            <Typography mt={1}>{workspace.location.address_line1}</Typography>

            <Typography
              mt={4}
              component="h5"
              variant="h5" fontSize={16}>Opening Time</Typography>
            <Typography mt={1}>{workspace.operational_timings.opening_time} to {workspace.operational_timings.closing_time}</Typography>

            <Typography
              mt={4}
              component="h5"
              variant="h5" fontSize={16}>Amenities</Typography>

            <Grid my={2} container rowSpacing={6} columnSpacing={5}>
              {
                Object.entries(amenitiesToRender).map(([key, value]) => (
                  <Grid size={4} key={key}>
                    <ListItem sx={{ fontWeight: 'bold', fontSize: '14px' }}>{key}</ListItem>
                    {
                      value.map((v) => <li style={{ paddingLeft: '16px', fontSize: '13px', marginBottom: '5px' }} key={v}>{v.name}</li>)
                    }

                  </Grid>
                ))
              }

            </Grid>


            <Typography
              mt={8}
              component="h5"
              variant="h5" fontSize={16}>Meeting Rooms</Typography>
            <TableContainerStyled sx={{ mb: 2, mt: 1 }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }}>Meeting Rooms</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Capacity</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Price/month</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                    workspace.meeting_rooms.map((mr) => (
                      <TableRow
                        key={mr.id + Math.random()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {mr.name}
                        </TableCell>
                        <TableCell align="right">{mr.capacity}</TableCell>
                        <TableCell align="right">{mr.price}</TableCell>

                      </TableRow>
                    ))
                  }

                </TableBody>
              </Table>
            </TableContainerStyled>




            <Typography
              mt={8}
              component="h5"
              variant="h5" fontSize={16}>Coworking Space</Typography>
            <Grid container spacing={2} mt={2} mb={2}>
              {workspace.price_desks.map((pd) => <Grid key={pd.id + Math.random()} size={3}>
                <Paper sx={{ boxShadow: coworkTheme.shadows[3], p: 4, textAlign: 'center' }}>
                  <Typography component="h5" variant="h6" sx={{ textTransform: 'capitalize' }} fontSize={16}>{pd.duration}</Typography>
                  <Typography component="h2" variant="h6" fontSize={25}><span>$</span>{pd.price}</Typography>
                  <Typography component="h6" fontSize={12}>price / person</Typography>
                  <Typography component="h6" fontSize={12}>{pd.type === 'hot_desks' ? 'Hot Desks' : 'Dedicated Desks'}</Typography>
                </Paper>
              </Grid>)}
            </Grid>



            <Typography
              mt={8}
              component="h5"
              variant="h5" fontSize={16}>Private Offices</Typography>
            <TableContainerStyled sx={{ my: 1 }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }}>Room Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Capacity</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Price/month</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Total Offices</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    workspace.price_private_offices.map((ppo, ind) => (
                      <TableRow
                        key={ppo.id + Math.random()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          Room {ind + 1}
                        </TableCell>
                        <TableCell align="right">{ppo.desks}</TableCell>
                        <TableCell align="right">${ppo.price}</TableCell>
                        <TableCell align="right">{ppo.similar}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainerStyled>



            <Typography
              mt={8}
              component="h5"
              variant="h5" fontSize={16}>Floors</Typography>
            <TableContainerStyled sx={{ my: 1 }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }}>Floor Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Exec Rooms</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Meeting Rooms</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Total Desks</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Price/month</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', borderBottom: `1px solid ${coworkTheme.palette.secondary.main}` }} align="right">Total Floors</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    workspace.price_floors.map((floor, ind) => (
                      <TableRow
                        key={floor.id + Math.random()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          Floor  {ind + 1}
                        </TableCell>
                        <TableCell align="right">{floor.exec_rooms}</TableCell>
                        <TableCell align="right">{floor.meeting_rooms}</TableCell>
                        <TableCell align="right">{floor.desks}</TableCell>
                        <TableCell align="right">${floor.price}</TableCell>
                        <TableCell align="right">{floor.similar}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainerStyled>


            <Typography
              mt={8}
              component="h5"
              variant="h5" fontSize={16}>Available Domain Expertise</Typography>
            <Grid container spacing={2} mt={2}>
              {
                workspace.mentorship.map(mentor => (
                  <Grid key={mentor.domain} size={4}><Typography>• {mentor.domain}</Typography></Grid>
                ))
              }
            </Grid>
            <BookMentorForm open={openMentorBookingForm} handleClose={() => setOpenMentorBookingForm(false)} />
            <Button sx={{ mt: 2 }} variant='contained' color='secondary' onClick={() => setOpenMentorBookingForm(true)}>Book a Mentor</Button>


          </Box>
        </Grid>
        <Grid size={4} >
          <Box >
            <Box >
              <Paper sx={{ boxShadow: coworkTheme.shadows[3], background: coworkTheme.palette.common.white, p: 4, textAlign: 'center' }}>
                <Box
                  maxWidth='500px'
                  component="form"
                  noValidate
                  sx={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'left', gap: 2 }}
                >
                  <FormControl>
                    <FormLabel htmlFor="name">How many people is the Office for?</FormLabel>
                    <TextField
                      id="name"
                      type="text"
                      name="team_size"
                      placeholder="Team Size"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      sx={{ ariaLabel: 'name' }}
                      value={booking.team_size}
                      onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="name">What are you looking for?</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={booking.type}
                      onChange={e => handleChange(e.target.name, e.target.value)}
                    >
                      <FormControlLabel name='type' label="Coworking Space" control={<Radio />} value="coworking-space" />
                      <FormControlLabel name='type' label="Private Office" control={<Radio />} value="private-office" />
                      <FormControlLabel name='type' label="Floor" control={<Radio />} value="floor" />
                    </RadioGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="name">How long do you need it for? (in days)</FormLabel>
                    <TextField
                      id="duration"
                      type="number"
                      name="duration"
                      placeholder="No. of days"
                      required
                      fullWidth
                      variant="outlined"
                      sx={{ ariaLabel: 'duration' }}
                      value={booking.duration}
                      onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                  </FormControl>
                  <Button sx={{ mt: 1 }} variant='contained' color='secondary' onClick={() => { console.log({ booking }); setOpenTourBookingForm(true); }}>Book a Tour</Button>
                </Box>
                <BookTourForm open={openTourBookingForm} handleClose={() => setOpenTourBookingForm(false)} />
              </Paper>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box >
  );
};

export default ListingDetailPage;
