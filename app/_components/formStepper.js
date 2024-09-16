'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { coworkTheme } from '@/app/_ui/theme';
import {
  Box, Stepper, Step, StepLabel,
  Stack, StepConnector, stepConnectorClasses, CircleRoundedIcon,
  CheckRoundedIcon, stepClasses, stepLabelClasses, stepButtonClasses
} from '@/app/_ui/mui';

export const StepStyled = styled(Step)(({ theme }) => ({
  [`&.${stepClasses.root}`]: {
    [`& .${stepButtonClasses.root} svg`]: {
      width: '20px',
      height: '20px',
      ['& text']: {
        display: 'unset',
        fill: coworkTheme.palette.common.white,
        fontSize: '0.9rem'
      },
    },
    [`& .${stepButtonClasses.root}:disabled svg`]: {
      fill: coworkTheme.palette.grey[400],
      fontSize: '0.9rem'
    }
  }
}));

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: coworkTheme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: coworkTheme.palette.success.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTop: 0,
    borderRadius: 1,
  },
}));
