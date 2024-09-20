'use client';

import React, { useState } from 'react';
import { coworkTheme } from '@/app/_ui/theme';
import {
  Box, Stack, FormControlLabel, Checkbox, FormControl, FormLabel, TextField, Typography, Grid,
  Select, MuiMenuItem,
  Divider,
  Button
} from '@/app/_ui/mui';
import CustomTimePicker, { CustomDatePicker } from './datepicker';
import {
  privateOffices, mentorship_fields, floorData, mentorship, amenities
} from '@/app/dashboard/constants';
import { InputFileUpload } from './uploadFileBtn';


export const Description = ({ data, setData }) => {
  const { name,
    openingDate,
    description,
    email,
    phone,
    websiteUrl, image } = data.description;

  const handleChange = (fieldName, value) => {
    const updatedData = { ...data.description };
    updatedData[fieldName] = value;
    setData({ ...data, description: updatedData });
  };

  const handleFile = (file) => {
    setData({ ...data, description: { ...data.description, image: file[0] } })
  };

  return (
    <Box>
      <Box
        maxWidth='500px'
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <TextField
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'name' }}
            value={name}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="">Opening Date</FormLabel>
          <CustomDatePicker value={openingDate} setValue={value => handleChange('openingDate', value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <TextField
            id="description"
            type="text"
            name="description"
            placeholder="Tell coworkers what you love about the space. You can include details about the decor, your amenities, the types of people in your community and the neighbourhood."
            autoFocus
            required
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            sx={{ ariaLabel: 'description' }}
            value={description}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Contact Email</FormLabel>
          <TextField
            id="email"
            type="email"
            name="email"
            placeholder="office@official.com"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'email' }}
            value={email}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <TextField
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'phone' }}
            value={phone}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="website_url">Website URL</FormLabel>
          <TextField
            id="website_url"
            type="url"
            name="websiteUrl"
            placeholder="https://office.com"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'website_url' }}
            value={websiteUrl}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="image">Upload Image</FormLabel>
          <InputFileUpload file={image} setFile={handleFile} />
        </FormControl>

      </Box>
    </Box>);
}

export const Location = ({ data, setData }) => {
  const {
    locationName,
    unitNumber,
    addressLine1,
    addressLine2,
    area,
    zipCode,
    city,
    country, } = data.location;

  const handleChange = (fieldName, value) => {
    const updatedData = { ...data.location };
    updatedData[fieldName] = value;
    setData({ ...data, location: updatedData });
  };

  return (
    <Box>
      <Box
        maxWidth='500px'
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <FormLabel htmlFor="location">Location Name</FormLabel>
            <TextField
              id="location"
              type="text"
              name="locationName"
              placeholder="Location"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'locations' }}
              value={locationName}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel htmlFor="unit">Unit / Floor Number</FormLabel>
            <TextField
              id="unit"
              type="text"
              name="unitNumber"
              placeholder="Unit"
              autoFocus
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'unit' }}
              value={unitNumber}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <FormLabel htmlFor="address_1">Address Line 1</FormLabel>
            <TextField
              id="address_1"
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'address_1' }}
              value={addressLine1}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel htmlFor="address_2">Address Line 2</FormLabel>
            <TextField
              id="address_2"
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              autoFocus
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'address_2' }}
              value={addressLine2}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <FormLabel htmlFor="area">Area</FormLabel>
            <TextField
              id="area"
              type="text"
              name="area"
              placeholder="Area"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'area' }}
              value={area}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel htmlFor="zip_code">Zip Code</FormLabel>
            <TextField
              id="zip_code"
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              autoFocus
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'zip_code' }}
              value={zipCode}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
        </Stack>

        <FormControl fullWidth>
          <FormLabel htmlFor="city">City</FormLabel>
          <TextField
            id="city"
            type="text"
            name="city"
            placeholder="City"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'city' }}
            value={city}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel htmlFor="country">Country</FormLabel>
          <TextField
            id="country"
            type="text"
            name="country"
            placeholder="Country"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'country' }}
            value={country}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>


      </Box>
    </Box>);
}

export const Amenities = ({ data, setData }) => {

  let selectedAmenities = data.amenities;
  selectedAmenities = new Set(selectedAmenities.map(d => d.amenity));

  const handleChange = (key, fieldName, value) => {
    let updatedData = [...data.amenities];

    if (!value) {
      updatedData = updatedData.filter(d => d.amenity !== fieldName);
    }
    else {
      updatedData.push({ amenity: fieldName, category: key });
    }
    setData({ ...data, amenities: updatedData });
  };

  return (<Box>
    <Box
      maxWidth='700px'
      component="form"
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 1 }}
    >

      {
        Object.entries(amenities).map(([key, amenity], index1) => (
          <Box key={index1} my={4}><Typography
            component="h5"
            variant="h5" fontSize={16}>
            {amenity.label}</Typography>
            <Grid container >
              {
                amenity.facilities.map((facility, index2) =>
                  <Grid key={index2} size={4}><FormControlLabel
                    control={<Checkbox checked={selectedAmenities.has(facility.name)} onChange={e => handleChange(key, e.target.value, e.target.checked)} value={facility.name} color="primary" />}
                    label={facility.label}
                  /></Grid>)
              }</Grid>

          </Box>
        ))

      }
    </Box>
  </Box>);
}

export const MeetingRooms = ({ data, setData }) => {
  const { numberOfMeetingRooms, roomData } = data.meetingRooms;

  const selectMeetingRooms = (e) => {
    const updatedMeetingRoomsData = { numberOfMeetingRooms: e.target.value, roomData: Array(e.target.value).fill({}) };
    setData({ ...data, meetingRooms: updatedMeetingRoomsData });
  };

  const handleRoomInputChange = (event, index) => {
    const updatedRoomData = [...roomData];
    updatedRoomData[index] = {
      ...updatedRoomData[index],
      [event.target.name]: event.target.value,
    };
    setData({ ...data, meetingRooms: { numberOfMeetingRooms, roomData: updatedRoomData } });
  };

  const handleAvailabilityChange = (event, index) => {
    const updatedRoomData = [...roomData];
    updatedRoomData[index] = {
      ...updatedRoomData[index],
      available: event.target.checked,
    };
    setData({ ...data, meetingRooms: { ...data.meetingRooms, roomData: updatedRoomData } });
  };

  return (
    <Box>
      <Box
        maxWidth='700px'
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <Typography>Some people look for a coworking space with a specific capacity for meeting rooms. Help them find you when they filter</Typography>

        <FormControl fullWidth>
          <FormLabel htmlFor="meeting_rooms">Number of Meeting Rooms</FormLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numberOfMeetingRooms}
            label="Meeting rooms"
            onChange={selectMeetingRooms}
          >
            <MuiMenuItem value={0} disabled>Select meeting rooms</MuiMenuItem>
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map((room) => <MuiMenuItem key={room} value={room}>{room}</MuiMenuItem>)
            }
          </Select>
        </FormControl>

        <Grid container spacing={2} mt={5} fontSize='16px' fontWeight='500'>
          <Grid size={4}>Meeting Room Name</Grid>
          <Grid size={2}>Capacity</Grid>
          <Grid size={3}>Price</Grid>
          <Grid size={3}>Availablity</Grid>
          {numberOfMeetingRooms > 0 && (
            <>
              {roomData.map((room, index) => (
                <React.Fragment key={index}>
                  <Grid size={4}>
                    <TextField
                      id="name"
                      type="text"
                      name="room_name"
                      placeholder={`Room Name ${index + 1}`}
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      value={room.room_name || ''}
                      onChange={(event) => handleRoomInputChange(event, index)}
                    />
                  </Grid>
                  <Grid size={2}>
                    <TextField
                      id="capacity"
                      type="number"
                      name="capacity"
                      placeholder="Capacity"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      value={room.capacity || ''}
                      onChange={(event) => handleRoomInputChange(event, index)}
                    />
                  </Grid>
                  <Grid size={3}>
                    <TextField
                      id="price"
                      type="number"
                      name="price"
                      placeholder="Price"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      value={room.price || ''}
                      onChange={(event) => handleRoomInputChange(event, index)}
                    />
                  </Grid>
                  <Grid size={3}>
                    <FormControlLabel
                      control={<Checkbox value={index} checked={room.available || false}
                        onChange={(event) => handleAvailabilityChange(event, index)}
                        inputProps={{ 'aria-label': 'available' }} color="primary" />}
                      label={'Available'}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Box>);
}

export const OperationalTimings = ({ data, setData }) => {
  const { openingTime, closingTime, isSaturdayOpen, isSundayOpen } = data.operationalTimings;

  const handleChange = (fieldName, value) => {
    const updatedData = { ...data.operationalTimings };
    updatedData[fieldName] = value;
    setData({ ...data, operationalTimings: updatedData });
  };

  return (
    <Box>
      <Typography
        component="h5"
        variant="h5" fontSize={16}>
        Available Hours (Mon to Fri)</Typography>
      <Box
        maxWidth='500px'
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <Stack direction="row" alignItems={'center'} mt={2} spacing={2}>
          <FormControl fullWidth>
            <FormLabel htmlFor="opening_time">Opening Time</FormLabel>
            <CustomTimePicker value={openingTime} setValue={value => handleChange('openingTime', value)} />
          </FormControl>
          <Divider sx={{ width: '25px', mt: '20px !important' }} />
          <FormControl fullWidth>
            <FormLabel htmlFor="closing_time">Closing Time</FormLabel>
            <CustomTimePicker value={closingTime} setValue={value => handleChange('closingTime', value)} />
          </FormControl>
        </Stack>

        <FormControlLabel
          sx={{ mt: 2 }}
          control={<Checkbox checked={isSaturdayOpen} onChange={e => handleChange(e.target.value, e.target.checked)} value={'isSaturdayOpen'} color="primary" />}
          label={'Is Saturday open?'}
        />
        <FormControlLabel
          control={<Checkbox checked={isSundayOpen} onChange={e => handleChange(e.target.value, e.target.checked)} value={'isSundayOpen'} color="primary" />}
          label={'Is Sunday open?'}
        />
      </Box>
    </Box>);
}

export const Capacity = ({ data, setData }) => {
  const { desks,
    size,
    privateOffices,
    floors, } = data.capacity;

  const handleChange = (fieldName, value) => {
    const updatedData = { ...data.capacity };
    updatedData[fieldName] = value;
    setData({ ...data, capacity: updatedData });
  };

  return (
    <Box>
      <Box
        maxWidth='500px'
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="desks">Open Space</FormLabel>
          <TextField
            id="desks"
            type="number"
            name="desks"
            placeholder="Total Desks"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'desks' }}
            value={desks}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="size">Size (sq ft)</FormLabel>
          <TextField
            id="size"
            type="number"
            name="size"
            placeholder="Area Size"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'size' }}
            value={size}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="private_offices">Number of Private Offices</FormLabel>
          <TextField
            id="private_offices"
            type="number"
            name="privateOffices"
            placeholder="Total Offices"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'private_offices' }}
            value={privateOffices}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="floors">Number of Floors</FormLabel>
          <TextField
            id="floors"
            type="number"
            name="floors"
            placeholder="Total Floors"
            autoFocus
            required
            fullWidth
            variant="outlined"
            sx={{ ariaLabel: 'floors' }}
            value={floors}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
      </Box> </Box>);
}

export const PriceDesks = ({ data, setData }) => {
  const { hotDeskPrices, dedicatedDeskPrices } = data.priceDesks;

  const handleChange = (index, type, value) => {
    const updatedData = { ...data.priceDesks };
    updatedData[type][index]['price'] = value;
    setData({ ...data, priceDesks: updatedData });
  };

  const handleCheckbox = (index, type, value) => {
    const updatedData = { ...data.priceDesks };
    updatedData[type][index]['available'] = value;
    console.log(index, type, value, updatedData);
    setData({ ...data, priceDesks: updatedData });
  };

  return (
    <Box>
      <Typography
        component="h5"
        variant="h5" fontSize={16}>
        Hot Desks</Typography>
      <Grid container spacing={2} mt={2} fontSize='14px' fontWeight='500'>
        <Grid size={4}>Duration</Grid>
        <Grid size={3}>Price</Grid>
        <Grid size={3}>Availablity</Grid>

        {
          hotDeskPrices.map((desk, ind) => (<React.Fragment key={ind}>
            <Grid size={4}>
              <TextField
                id={`1_${desk.duration}`}
                type="text"
                name={`1_${desk.duration}`}
                fullWidth
                value={`1 ${desk.duration}`}
                variant="outlined"
              />
            </Grid>
            <Grid size={3}>
              <TextField
                id="price"
                type="number"
                name="price"
                placeholder="Price"
                autoFocus
                required
                fullWidth
                variant="outlined"
                value={desk.price}
                onChange={e => handleChange(ind, 'hotDeskPrices', Number(e.target.value))}
              />
            </Grid>
            <Grid size={3}>
              <FormControlLabel
                control={<Checkbox checked={desk.available} onChange={e => handleCheckbox(ind, 'hotDeskPrices', e.target.checked)} value={'Available'}
                  inputProps={{ 'aria-label': 'available' }} color="primary" />}
                label={'Available'}
              />
            </Grid>
          </React.Fragment>))
        }
      </Grid>

      <Typography
        mt={8}
        component="h5"
        variant="h5" fontSize={16}>
        Dedicated Desks
      </Typography>
      <Grid container spacing={2} mt={2} fontSize='14px' fontWeight='500'>
        <Grid size={4}>Duration</Grid>
        <Grid size={3}>Price</Grid>
        <Grid size={3}>Availablity</Grid>

        {
          dedicatedDeskPrices.map((desk, ind) => (
            <React.Fragment key={ind}>
              <Grid size={4}>
                <TextField
                  id={`1_Month`}
                  type="text"
                  name={`Month`}
                  fullWidth
                  value={`1 ${desk.duration}`}
                  variant="outlined"
                />
              </Grid>
              <Grid size={3}>
                <TextField
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Price"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  value={desk.price}
                  onChange={e => handleChange(ind, 'dedicatedDeskPrices', Number(e.target.value))}
                />
              </Grid>
              <Grid size={3}>
                <FormControlLabel
                  control={<Checkbox checked={desk.available} onChange={e => handleCheckbox(ind, 'dedicatedDeskPrices', e.target.checked)} value={'Available'}
                    inputProps={{ 'aria-label': 'available' }} color="primary" />}
                  label={'Available'}
                />
              </Grid>
            </React.Fragment>
          ))
        }
      </Grid>

    </Box>);
}

export const PricePrivateOffice = ({ data, setData }) => {
  const pricePrivateOffices = data.pricePrivateOffices;

  const handleChange = (index, field, value) => {
    const updatedData = [...data.pricePrivateOffices];
    updatedData[index][field] = value;
    setData({ ...data, pricePrivateOffices: updatedData });
  };

  const addOtherOffice = () => {
    const updatedOffices = [...data.pricePrivateOffices];
    updatedOffices.push({ ...privateOffices });
    setData({ ...data, pricePrivateOffices: updatedOffices })
  }

  return (
    <Box>
      {
        pricePrivateOffices.map((office, ind) => (
          <Box
            key={ind}
            mb={8}
            maxWidth='500px'
            component="form"
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >

            <Typography
              mb={2}
              component="h5"
              variant="h5" fontSize={16}>
              Private Office Type {ind + 1}</Typography>
            <FormLabel htmlFor="capacity">Capacity (Number of Desks)</FormLabel>
            <TextField
              id="capacity"
              type="number"
              name="desks"
              placeholder="Capacity"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'capacity' }}
              value={office.desks}
              onChange={e => handleChange(ind, e.target.name, Number(e.target.value))}
            />

            <Grid container mb={2} spacing={2} mt={2} fontSize='14px' fontWeight='500'>
              <Grid size={6}>Duration</Grid>
              <Grid size={6}>Price</Grid>

              <Grid size={6}>
                <TextField
                  id={`1_Month`}
                  type="text"
                  name={`1_Month`}
                  fullWidth
                  value={`1 Month`}
                  variant="outlined"
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Price"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  value={office.price}
                  onChange={e => handleChange(ind, e.target.name, Number(e.target.value))}
                />
              </Grid>
            </Grid>

            <FormLabel htmlFor="quantity">Quantity of this office type</FormLabel>
            <TextField
              id="quantity"
              type="number"
              name="similar"
              placeholder="Number of offices having same quantity"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'quantity' }}
              value={office.similar}
              onChange={e => handleChange(ind, e.target.name, e.target.value)}
            />
          </Box>
        ))
      }

      <Box maxWidth='500px'
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 3 }}>
        <Button onClick={addOtherOffice} variant='contained' fullWidth color='secondary'>Add another Private Office</Button>
      </Box>

    </Box>);
}

export const Mentorship = ({ data, setData }) => {

  const mentorshipData = data.mentorship;

  const addOtherField = () => {
    setData({ ...data, mentorship: [...data.mentorship, { ...mentorship }] });
  }

  const handleDomainChange = (e, index) => {
    const updatedData = [...data.mentorship];
    updatedData[index] = {
      ...updatedData[index],
      domain: e.target.value
    };
    setData({ ...data, mentorship: updatedData });
  };

  const handleMentorChange = (e, index) => {
    const updatedData = [...data.mentorship];
    updatedData[index] = {
      ...updatedData[index],
      mentors: e.target.value
    };
    setData({ ...data, mentorship: updatedData });
  };


  const mentorshipSet = new Set(mentorshipData.map(d => d.domain));

  return (
    <Box>
      <Box
        mb={8}
        maxWidth='500px'
        component="form"
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <Grid container mb={2} spacing={2} mt={2} fontSize='14px' fontWeight='500'>
          <Grid size={6}>Domain</Grid>
          <Grid size={6}>Number of Mentors available</Grid>

          {
            mentorshipData.map((d, ind) =>
              <React.Fragment key={ind}>
                <Grid size={6}>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={d.domain || 0}
                    onChange={e => handleDomainChange(e, ind)}
                  >
                    <MuiMenuItem value={0} disabled>Select domain</MuiMenuItem>
                    {
                      mentorship_fields.map((field) => <MuiMenuItem key={field} disabled={mentorshipSet.has(field)} value={field}>{field}</MuiMenuItem>)
                    }
                  </Select>
                </Grid>
                <Grid size={6}>
                  <TextField
                    id="number_of_mentors"
                    type="number"
                    name="number_of_mentors"
                    placeholder="Total Mentors"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    value={d.mentors}
                    onChange={e => handleMentorChange(e, ind)}
                  />
                </Grid></React.Fragment>)
          }
        </Grid>
        <Button onClick={addOtherField} variant='contained' fullWidth color='secondary'>Add another domain</Button>
      </Box>
    </Box>);
}

export const PriceFloors = ({ data, setData }) => {
  const floorPricing = data.priceFloors;

  const handleChange = (index, field, value) => {
    const updatedData = [...data.priceFloors];
    updatedData[index][field] = value;
    setData({ ...data, priceFloors: updatedData });
  };

  const addOtherFloor = () => {
    const updatedFloors = [...data.priceFloors];
    updatedFloors.push({ ...floorData });
    setData({ ...data, priceFloors: updatedFloors })
  }

  return (
    <Box>
      {
        floorPricing.map((floor, ind) => (
          <Box
            key={ind}
            mb={8}
            maxWidth='500px'
            component="form"
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >

            <Typography
              mb={2}
              component="h5"
              variant="h5" fontSize={16}>
              Floor Type {ind + 1}</Typography>
            <FormLabel htmlFor="capacity_rooms">Capacity (Number of Exec Rooms)</FormLabel>
            <TextField
              id="capacity_rooms"
              type="number"
              name="exec_rooms"
              placeholder="Total Rooms"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'capacity_rooms' }}
              value={floor.exec_rooms}
              onChange={e => handleChange(ind, e.target.name, Number(e.target.value))}
            />
            <FormLabel sx={{ mt: 2 }} htmlFor="capacity_rooms">Capacity (Number of Meeting Rooms)</FormLabel>
            <TextField
              id="capacity_rooms"
              type="number"
              name="meeting_rooms"
              placeholder="Total Meeting Rooms on floor"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'capacity_rooms' }}
              value={floor.meeting_rooms}
              onChange={e => handleChange(ind, e.target.name, Number(e.target.value))}
            />
            <FormLabel sx={{ mt: 2 }} htmlFor="capacity_desks">Capacity (Number of desks)</FormLabel>
            <TextField
              id="capacity_desks"
              type="number"
              name="desks"
              placeholder="Total Desks"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'capacity_desks' }}
              value={floor.desks}
              onChange={e => handleChange(ind, e.target.name, Number(e.target.value))}
            />

            <Grid container mb={2} spacing={2} mt={2} fontSize='14px' fontWeight='500'>
              <Grid size={6}>Duration</Grid>
              <Grid size={6}>Price</Grid>

              <Grid size={6}>
                <TextField
                  id={`1_Month`}
                  type="text"
                  name={`1_Month`}
                  fullWidth
                  value={`1 Month`}
                  variant="outlined"
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Price"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  value={floor.price}
                  onChange={e => handleChange(ind, e.target.name, Number(e.target.value))}
                />
              </Grid>
            </Grid>

            <FormLabel htmlFor="quantity">Quantity of this floor type</FormLabel>
            <TextField
              id="quantity"
              type="number"
              name="similar"
              placeholder="Number of offices having same quantity"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'quantity' }}
              value={floor.similar}
              onChange={e => handleChange(ind, e.target.name, e.target.value)}
            />
          </Box>
        ))
      }

      <Box maxWidth='500px'
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 3 }}>
        <Button onClick={addOtherFloor} variant='contained' fullWidth color='secondary'>Add another Floor</Button>
      </Box>

    </Box>);
}

export const FinishPublish = ({ onSubmit }) => {
  return (<Box maxWidth='1000px' textAlign="center">
    <Typography
      my={3}
      component="h1"
      variant="h4"
      sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>Thank You!</Typography>
    <Typography fontSize="16px" my={1}>Your co-working space details have been successfully submitted. Our team will review your listing shortly to ensure it meets our guidelines. Once approved, your space will be published and made available on the Cowork Connect platform.
    </Typography>
    <Typography fontSize='16px' my={1}>Thank you for joining the Cowork Connect community!</Typography>

    <Button onClick={onSubmit} sx={{ width: '300px', mt: 3 }} variant='contained' color='secondary'>Finish</Button>

  </Box>);
}
