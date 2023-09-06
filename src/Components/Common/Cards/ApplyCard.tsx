import {Typography, CardContent, Card, CardActions, useMediaQuery } from '@mui/material';
import ApplyButton from '../../Buttons/ApplyButton';
import { Theme } from '@mui/material/styles';





const ApplyCard = () =>{
    
    const isSmallerScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('md'));
    const isMediumScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('lg'));
    const isLargeScreen = useMediaQuery((theme:Theme) => theme.breakpoints.up('lg'));
    const isExtraLargeScreen = useMediaQuery((theme:Theme) => theme.breakpoints.up('xl'));

  return(
    <div className='p-3 m-auto'>
    <Card 
    className="m-auto lg:flex md:flex lg:flex-row md:flex-row lg:justify-around md:justify-around p-3 shadow-lg lg:w-Apply-width md:w-Apply-width shadow-slate-300" 
    sx={{
      backgroundColor:"rgba(183, 241, 214, 0.39)", 
      boxShadow:"0 5px 7px 12px rgba(0,0,0,0.25)", 
      borderRadius:"20px", height:'218px',
      width:(isSmallerScreen || isSmallScreen) ? "100%": isMediumScreen  ? "90%": "1131px",
      }}>
        
        <CardContent >
          
            <Typography component="div"  
            sx={{
            width: (isSmallerScreen || isSmallScreen || isMediumScreen) ? "100%":"828px",
            fontSize: (isSmallerScreen || isSmallScreen) ? "20px": isMediumScreen ? "25px": "32px",
            marginBottom:'0',
            }}>
              
              Current internship is availiable in front-end, 
              Back-end mobile and Graphics Designer.
              If you are interseted, hit the green button now!
            </Typography>
        </CardContent>

        <CardActions sx={{
          marginTop:(isLargeScreen || isExtraLargeScreen  ) ? "80px": "0",
          }}>
            <ApplyButton text='Apply' />
        </CardActions>

    </Card>
    </div>
  )
  
}




export default  ApplyCard;