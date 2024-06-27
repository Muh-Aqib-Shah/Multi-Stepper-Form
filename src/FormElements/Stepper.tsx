import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper/Stepper';
import Step from '@mui/material/Step/Step';
import StepLabel from '@mui/material/StepLabel/StepLabel';

const steps = [
  'Sign up',
  'Add payment option',
  'Review',
];

interface Props {
  activeStep: number
}

export const StepperSlide: React.FC<Props> = ({activeStep}) => {
  return (
    <Box sx={{ width: '100%'}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}