import React from 'react';
import { Button } from '@mui/material';

const CoursesButton: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <div>
      <Button onClick={onClick} sx={{
      borderRadius: '10px',
      backgroundColor: '#fff', // Equivalent to bg-purple-600 in Tailwind CSS
      '&:hover': {
        backgroundColor: '#FF6652', // Equivalent to hover:bg-purple-700 in Tailwind CSS
        color: '#fff'
      },
      color: '#0A033C',
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
        width: 148,
        height: 60,
        // top: 3050,
        // left: 831,
    }}>
    {text}
  </Button>
    </div>
  )
}

export default CoursesButton
