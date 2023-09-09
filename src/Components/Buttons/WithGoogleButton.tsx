import React from 'react'
import { SvgIcon } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";


const WithGoogleButton: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    
         <Button
        variant="contained"
        startIcon={
          <SvgIcon
            component={GoogleIcon}
            viewBox="0 0 24 24"
            fontSize="small"
            style={{ color: '#fff' ,background:'#FF0000',padding:'4px',height:'24px',width:'24px',marginLeft:"10px"}}
          />
        }
        sx={{
          justifyContent: 'flex-start',
          borderRadius: "1px",
          border:"1px solid #DEDDE4",
          backgroundColor: "#FFFFFF", // Equivalent to bg-purple-600 in Tailwind CSS
          "&:hover": {
            backgroundColor: "#DEDDE4", // Equivalent to hover:bg-purple-700 in Tailwind CSS
          },
          color: "#5D5A6F",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          paddingLeft: 1, // Equivalent to px-3 in Tailwind CSS
          paddingRight: 0, // Equivalent to px-3 in Tailwind CSS
          paddingTop: 2, // Equivalent to py-3 in Tailwind CSS
          paddingBottom: 2, // Equivalent to py-3 in Tailwind CSS
          fontFamily: "Open Sans",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "30px",
          letterSpacing: "0em",
          textAlign: "center",
          width: "340px",
          height: "50px",
          // top: '632px',
          // left: '140px',
        }}
        onClick={onClick}
      >
        {text}
        Sign in with Google
      </Button>
    
  )
}

export default WithGoogleButton
