import React from 'react';
import { Button } from '@mui/material';

const ApplyButton: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <div>
      <Button onClick={onClick} sx={{
      borderRadius: '16px',
      backgroundColor: '#50F44D', // Equivalent to bg-purple-600 in Tailwind CSS
      '&:hover': {
        backgroundColor: '#3db83a', // Equivalent to hover:bg-purple-700 in Tailwind CSS
      },
      color: 'white',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.25)',
      paddingLeft: 0, // Equivalent to px-3 in Tailwind CSS
      paddingRight: 0, // Equivalent to px-3 in Tailwind CSS
      paddingTop: 2, // Equivalent to py-3 in Tailwind CSS
      paddingBottom: 2, // Equivalent to py-3 in Tailwind CSS
      fontFamily: 'initial',
        fontSize: 24,
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0em',
        textAlign: 'center',
        width: 117,
        height: 52.97043228149414,
    }}>
    {text}
  </Button>
    </div>
  )
}

export default ApplyButton
