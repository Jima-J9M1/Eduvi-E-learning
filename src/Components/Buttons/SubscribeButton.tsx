import React from 'react';
import { Button } from '@mui/material';

const SubscribeButton: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <div>
      <Button onClick={onClick} sx={{
      borderRadius: '0px 10px 10px 0px',
      backgroundColor: '#8b5cf6', // Equivalent to bg-purple-600 in Tailwind CSS
      '&:hover': {
        backgroundColor: '#7c3aed', // Equivalent to hover:bg-purple-700 in Tailwind CSS
      },
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      paddingLeft: 2, // Equivalent to px-3 in Tailwind CSS
      paddingRight: 2, // Equivalent to px-3 in Tailwind CSS
      paddingTop: 2, // Equivalent to py-3 in Tailwind CSS
      paddingBottom: 2, // Equivalent to py-3 in Tailwind CSS
      fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0em',
        textAlign: 'center',
        width: 142,
        height: 60,
        // top: 3050,
        // left: 831,
    }}>
    {text}
  </Button>
    </div>
  )
}

export default SubscribeButton
