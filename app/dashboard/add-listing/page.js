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


export default function AddListing() {
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

  const handleSubmit = () => {
    // setCurrentStep(0);
    console.log("----form data----", formData);
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
  );
}