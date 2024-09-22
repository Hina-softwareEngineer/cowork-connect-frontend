'use client';

import React from 'react';
import { coworkTheme } from '@/app/_ui/theme';
import {
  Box, Stepper, Step, StepLabel, Typography, StepButton,
  Stack,
  Divider,
  Button,
  KeyboardArrowLeftRoundedIcon,
  KeyboardArrowRightRoundedIcon
} from '@/app/_ui/mui';

import { QontoConnector, QontoStepIcon, StepStyled } from '@/app/_components/formStepper';
import {
  Description,
  Location, // merge upload photos
  Amenities,
  MeetingRooms,
  OperationalTimings,
  Capacity,
  PriceDesks,
  PricePrivateOffice,
  PriceFloors,
  FinishPublish,
  Mentorship
} from '@/app/_components/formSteps';
import { initialFormData } from '../constants';
import { convertJsToPython, convertToFormData } from '../utils';
import axios from 'axios';
import { baseUrl, getToken } from '@/app/_ui/utils';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';



export default function AddListing() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ ...initialFormData });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const goToStep = (id) => {
    setCurrentStep(id);
  }

  const getCleanData = (data) => {
    let convertedData = convertJsToPython(data);
    convertedData['meeting_rooms'] = [...convertedData.meetingRooms.room_data];
    convertedData['price_desks'] = Object.entries(convertedData.price_desks).map(([key, value]) => (value.map(v => ({ ...v, type: key }))));
    convertedData['price_desks'] = convertedData['price_desks'][0].concat(convertedData['price_desks'][1]);

    delete convertedData['meetingRooms'];

    // desks
    let desks = convertedData['price_desks'];
    if (desks) {
      let updatedDesks = desks.filter(d => (d.available && d.price !== ''));
      convertedData['price_desks'] = updatedDesks;
    }

    // privateOffice
    let privateOffices = convertedData['price_private_offices'];
    if (privateOffices.length == 1 && privateOffices[0].desks === '' && privateOffices[0].price === '') {
      convertedData['price_private_offices'] = [];
    }

    // priceFloorss
    let priceFloors = convertedData['price_floors'];
    if (priceFloors.length == 1 && priceFloors[0].exec_rooms === '' && priceFloors[0].desks === '' && priceFloors[0].price === '') {
      convertedData['price_floors'] = [];
    }

    // mentorship
    let mentorship = convertedData['mentorship'];
    if (mentorship.length == 1 && mentorship[0].domain === 0 && mentorship[0].mentors === '') {
      convertedData['mentorship'] = [];
    }


    return convertedData;
  }

  const handleSubmit = () => {
    let updatedFormData = {
      ...formData,
      description: { ...formData.description },
      operationalTimings: { ...formData.operationalTimings }
    };
    updatedFormData.description.openingDate = dayjs(updatedFormData.description.openingDate).format('YYYY-MM-DD');
    updatedFormData.operationalTimings.openingTime = dayjs(updatedFormData.operationalTimings.openingTime).format('HH:mm');
    updatedFormData.operationalTimings.closingTime = dayjs(updatedFormData.operationalTimings.closingTimeopeningTime).format('HH:mm');

    let finalData = getCleanData(updatedFormData);
    console.log('final->', finalData);

    let formImageData = new FormData();
    formImageData.append('data', JSON.stringify(finalData));
    formImageData.append('image', formData.description.image);

    axios.post(`${baseUrl}space/add-workspaces/`, formImageData, getToken())
      .then(res => {
        if (res.status == 201) {
          setFormData({ ...formData });
          router.push('/listings');
        }
      })
      .catch(err => console.log(err, err.response))
  }

  const steps = [
    { name: 'description', label: 'Space Description', component: <Description data={formData} setData={setFormData} /> },
    { name: 'location', label: 'Location', component: <Location data={formData} setData={setFormData} /> },
    { name: 'amenities', label: 'Amenities Offered', component: <Amenities data={formData} setData={setFormData} /> },
    { name: 'meetingRooms', label: 'Meeting Rooms', component: <MeetingRooms data={formData} setData={setFormData} /> },
    { name: 'operationalTimings', label: 'Operating Hours', component: <OperationalTimings data={formData} setData={setFormData} /> },
    { name: 'capacity', label: 'Space Capacity', component: <Capacity data={formData} setData={setFormData} /> },
    { name: 'pricesDesks', label: 'Desk Pricing', component: <PriceDesks data={formData} setData={setFormData} /> },
    { name: 'pricesPrivateOffices', label: 'Private Office Pricing', component: <PricePrivateOffice data={formData} setData={setFormData} /> },
    { name: 'pricesFloors', label: 'Floor Pricing', component: <PriceFloors data={formData} setData={setFormData} /> },
    { name: 'mentorship', label: 'Mentorship', component: <Mentorship data={formData} setData={setFormData} /> },
    { name: 'finishPublish', label: 'Finish & Publish', component: <FinishPublish onSubmit={handleSubmit} /> }
  ];

  return (
    <>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Add Workspace
      </Typography>
      <Box sx={{ width: '100%', px: 8 }}>
        <Stack direction='row' spacing={10}>

          <Box py={2}>
            <Stepper activeStep={currentStep} orientation='vertical' connector={<QontoConnector />}>
              {steps.map((step, index) => (
                <StepStyled key={step.label}>
                  <StepButton onClick={() => goToStep(index)}>{step.label}</StepButton>
                </StepStyled>
              ))}
            </Stepper>
          </Box>

          <Box flex="1" display='flex' flexDirection='column'>
            <Typography
              component="h2" variant="h6" fontSize={24}>{steps[currentStep].label}</Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Box flex="1">
              {steps[currentStep].component}
            </Box>
            <Divider sx={{ my: 3 }} />
            <Stack direction='row' justifyContent="space-between">
              <Button variant='outlined' disabled={currentStep === 0} startIcon={<KeyboardArrowLeftRoundedIcon />} onClick={handlePrevious}>Previous</Button>
              <Button variant='outlined' disabled={currentStep === steps.length - 1} endIcon={<KeyboardArrowRightRoundedIcon />} onClick={handleNext}>Next</Button>
            </Stack>
          </Box>

        </Stack>

      </Box >
    </>
  );
}