import { Button, Checkbox, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const PrivacyCheckbox = styled(Checkbox)({
    color: '#ff6600', 
    '&.Mui-checked': {
        color: '#ff6600', 
    },
})

export const AisButton = styled(Button)({
    backgroundColor: '#ff6600',
    '&:hover': {
        backgroundColor: '#ff3300',
    },
})

export const CancleButton = styled(Button)({
    backgroundColor: '#C7C8CC',
    '&:hover': {
        backgroundColor: '#B4B4B8',
    },
})

export const OrangeTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'orange',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
      },
    },
  })