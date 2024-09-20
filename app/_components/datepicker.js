'use client';

import React from 'react';
import dayjs from 'dayjs';

import {
  Button,
  CalendarTodayRoundedIcon
} from '@/app/_ui/mui';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      size="small"
      onClick={() => setOpen?.((prev) => !prev)}
      startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
      sx={{ justifyContent: 'start', minWidth: 'fit-content' }}
    >
      {label ? `${label}` : 'Pick a date'}
    </Button>
  );
}

export function CustomDatePicker({ value, setValue }) {
  const [open, setOpen] = React.useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        label={value == null ? null : value.format('MMM DD, YYYY')}
        onChange={(newValue) => setValue(newValue)}
        slots={{ field: ButtonField }}
        maxDate={dayjs()}
        slotProps={{
          field: { setOpen },
          nextIconButton: { size: 'small' },
          previousIconButton: { size: 'small' },
        }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        views={['day', 'month', 'year']}
      />
    </LocalizationProvider>
  );
}

function TimeField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      size="small"
      onClick={() => setOpen?.((prev) => !prev)}
      startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
      sx={{ justifyContent: 'start', minWidth: 'fit-content' }}
    >
      {label ? `${label}` : 'Pick a time'}
    </Button>
  );
}

export default function CustomTimePicker({ value, setValue }) {
  const [open, setOpen] = React.useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker variant="outlined"
        slots={{ field: TimeField }}
        value={value}
        slotProps={{
          field: { setOpen },
          nextIconButton: { size: 'small' },
          previousIconButton: { size: 'small' },
        }}
        label={value == null ? null : value.format('HH:mm')}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}