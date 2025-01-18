import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const options = [
  {
    value: 'Web',
    label: 'Web',
    icon: '/src/assets/ic_web.svg',
    active_icon: '/src/assets/active_ic_web.svg',
  },
  {
    value: 'Android',
    label: 'Android',
    icon: '/src/assets/ic_android.svg',
    active_icon: '/src/assets/active_ic_android.svg',
  },
  {
    value: 'iOS',
    label: 'iOS',
    icon: '/src/assets/ic_ios.svg',
    active_icon: '/src/assets/active_ic_ios.svg',
  },
  {
    value: 'Server',
    label: 'Server',
    icon: '/src/assets/ic_server.svg',
    active_icon: '/src/assets/active_ic_server.svg',
  },
  {
    value: 'PM',
    label: 'PM',
    icon: '/src/assets/ic_pm.svg',
    active_icon: '/src/assets/active_ic_pm.svg',
  },
  {
    value: 'Design',
    label: 'Design',
    icon: '/src/assets/ic_design.svg',
    active_icon: '/src/assets/active_ic_design.svg',
  },
];

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.grey[500],
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

const LabelContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
  '&.selected': {
    color: theme.palette.primary.main,
  },
}));

const PositionRadioButton: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('Design');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" fullWidth sx={{ padding: '24px' }}>
      <RadioGroup
        value={selectedValue}
        onChange={handleChange}
        aria-label="Options"
        name="options"
        style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#fff' }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<CustomRadio />}
            label={
              <LabelContainer className={selectedValue === option.value ? 'selected' : ''}>
                <img
                  src={selectedValue === option.value ? option.active_icon : option.icon}
                  alt={option.icon}
                />
                <Typography
                  variant="body1"
                  color={selectedValue === option.value ? 'primary' : '#FFFFFF'}
                >
                  {option.label}
                </Typography>
              </LabelContainer>
            }
            labelPlacement="start"
            style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default PositionRadioButton;
