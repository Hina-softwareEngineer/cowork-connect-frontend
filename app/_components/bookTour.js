'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  CloseRoundedIcon,
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField
} from '@/app/_ui/mui';
import { CustomDatePicker } from './datepicker';
import { useState } from 'react';
import dayjs from 'dayjs';


export function BookTourForm({ open, handleClose }) {
  const [openingDate, setOpeningDate] = useState(dayjs());
  const handleChange = (field, val) => setOpeningDate(val);
  const [isBook, setIsBook] = useState(false);


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
      }}
    >
      <DialogTitle sx={{ mt: '4px', fontSize: '24px' }} textAlign='center'>
        {isBook ? "Tour Booking Confirmed" : "Book a Tour"}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
          border: 'none'
        })}
      >
        <CloseRoundedIcon />
      </IconButton>
      {
        isBook ? (<><DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mb: '24px' }}
        >
          <DialogContentText fontSize='15px' textAlign='center'>Your tour has been booked for {openingDate.format('DD-MM-YYYY')}. We look forward to your visit!</DialogContentText>
        </DialogContent>
          <DialogActions sx={{ pb: 3, px: 3 }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions></>) :

          (<><DialogContent
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mb: '24px' }}
          >
            <DialogContentText fontSize='15px' textAlign='center'>Please enter your visiting date to have a smooth experience.</DialogContentText>
            <FormControl>
              <FormLabel htmlFor="">Opening Date</FormLabel>
              <CustomDatePicker value={openingDate} setValue={value => handleChange('openingDate', value)} />
            </FormControl>
          </DialogContent>
            <DialogActions sx={{ pb: 3, px: 3 }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color='secondary' type="submit" onClick={() => setIsBook(true)}>
                Book
              </Button>
            </DialogActions></>)
      }
    </Dialog>
  );
}


export function BookNowForm({ open, handleClose }) {
  const [isBook, setIsBook] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
      }}
    >
      <DialogTitle sx={{ mt: '4px', fontSize: '24px' }} textAlign='center'>
        {isBook ? "Booking Confirmed" : "Book the space"}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
          border: 'none'
        })}
      >
        <CloseRoundedIcon />
      </IconButton>
      {
        isBook ? (<><DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mb: '24px' }}
        >
          <DialogContentText fontSize='15px' textAlign='center'>Your booking has been confirmed. Thanks for booking with us!</DialogContentText>
        </DialogContent>
          <DialogActions sx={{ pb: 3, px: 3 }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions></>) :

          (<><DialogContent
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mb: '24px' }}
          >
            <DialogContentText fontSize='15px' textAlign='center'>Please enter your visiting date to have a smooth experience.</DialogContentText>
            <FormControl>
              <FormLabel htmlFor="">Card</FormLabel>
              <TextField

                type="text"

                placeholder="Card Number"
                autoFocus
                fullWidth
                variant="outlined"

              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="">CVV</FormLabel>
              <TextField

                type="text"

                placeholder="CVV"
                autoFocus
                fullWidth
                variant="outlined"

              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="">Expiry</FormLabel>
              <TextField
                type="text"
                placeholder="Expiry"
                autoFocus
                fullWidth
                variant="outlined"
              />
            </FormControl>
          </DialogContent>
            <DialogActions sx={{ pb: 3, px: 3 }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color='secondary' type="submit" onClick={() => setIsBook(true)}>
                Pay Now
              </Button>
            </DialogActions></>)
      }
    </Dialog>
  );
}

