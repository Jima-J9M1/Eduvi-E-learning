import { Box, Theme, useMediaQuery } from "@mui/material";
import { BreadCrumb } from "./BreadCrumbs";

interface HeaderContainerProps {
    children: React.ReactNode;
  }

const HeaderContainer:React.FC<HeaderContainerProps> = ({children}) => 
{
    const isSmallerScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));


   return (
    <Box component="div" sx={{
       margin:isSmallerScreen? '0':'30px',
       backgroundColor:'rgba(239, 235, 245, 1)',
        borderRadius : '20px',
    }}>
      <BreadCrumb />
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
