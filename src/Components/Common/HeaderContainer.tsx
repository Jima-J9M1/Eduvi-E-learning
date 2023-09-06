import { Box, Theme, useMediaQuery } from "@mui/material"
import BreadCrumbs from "./Breadcrumbs";


interface HeaderContainerProps {
    children: React.ReactNode;
  }

const HeaderContainer:React.FC<HeaderContainerProps> = ({children}) => 
{
    const isSmallerScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('lg'));
    const isLargeScreen = useMediaQuery((theme:Theme) => theme.breakpoints.up('lg'));
    const isExtraLargeScreen = useMediaQuery((theme:Theme) => theme.breakpoints.up('xl'));


   return (
    <Box component="div" sx={{
       margin:isSmallerScreen? '0':'10px',
       backgroundColor:'rgba(239, 235, 245, 1)',
    }}>
      <BreadCrumbs/>
      <Box component="div" sx={{
    //    margin:isSmallerScreen? '0':'10px',
       marginLeft:isSmallerScreen? '0':'65px',
       display:isSmallerScreen ? 'block':'flex',
      }}>
     {children}
     </Box>
    </Box>
   )
}

export default HeaderContainer;