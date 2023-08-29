import React from 'react';
import { Button } from '@mui/material';



const SignUp2Button: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <div>
      <Button onClick={onClick} sx={{
      borderRadius: '5px',
      backgroundColor: '#FCD980', // Equivalent to bg-purple-600 in Tailwind CSS
      '&:hover': {
        backgroundColor: '#fcd34d', // Equivalent to hover:bg-purple-700 in Tailwind CSS
      },
      color: '#282938',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      paddingLeft: 2, // Equivalent to px-3 in Tailwind CSS
      paddingRight: 2, // Equivalent to px-3 in Tailwind CSS
      paddingTop: 2, // Equivalent to py-3 in Tailwind CSS
      paddingBottom: 2, // Equivalent to py-3 in Tailwind CSS
      fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'center',
        width: 432,
        height: 64,
        // top: 3050,
        // left: 831,
    }}>
    {text}
  </Button>
    </div>
  )
}

export default SignUp2Button
