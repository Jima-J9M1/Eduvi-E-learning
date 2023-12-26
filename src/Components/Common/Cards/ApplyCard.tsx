import { Card, CardActions, CardContent, Typography, useMediaQuery } from '@mui/material';
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
    className=" m-auto lg:flex md:flex lg:flex-row md:flex-row lg:justify-around md:justify-around p-3 shadow-lg  shadow-slate-2 sm:w-3/4" 
    sx={{
      backgroundColor:"rgba(183, 241, 214, 0.19)", 
      boxShadow:"0 5px 12px 5px rgba(0,0,0,0.15)", 
      borderRadius:"20px", height:'218px',
      // width:(isSmallerScreen || isSmallScreen) ? "100%": isMediumScreen  ? "90%": "1131px",
      }}>
        
        <CardContent >
          
            <Typography component="div"  
            sx={{
            width: (isSmallerScreen || isSmallScreen || isMediumScreen) ? "100%":"828px",
            fontSize: (isSmallerScreen || isSmallScreen) ? "20px": isMediumScreen ? "20px": "25px",
            marginBottom:'0',
            }}>
              Welcome to our e-learning platform, where learning is not just a solitary journey 
             but a collaborative and supportive experience. 
              We are dedicated to providing the resources and
               assistance you need to thrive in your educational endeavors.
            </Typography>
        </CardContent>

        <CardActions sx={{
          marginTop:(isLargeScreen || isExtraLargeScreen  ) ? "80px": "0",
          }}>
        </CardActions>

    </Card>
    </div>
  )
  
}




export default  ApplyCard;