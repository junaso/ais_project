import { Button, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PrivacyCheckbox = styled(Checkbox)({
    color: '#ff6600', 
    '&.Mui-checked': {
        color: '#ff6600', 
    },
})

export const AgreementButton = styled(Button)({
    backgroundColor: '#ff6600',
    '&:hover': {
        backgroundColor: '#ff3300',
    },
});