import {Breadcrumbs,Typography, Box} from '@mui/material';
import {Link} from 'react-router-dom';

const BreadCrumbs = () =>(
<Box component="div" className='ml-16'>
  <Breadcrumbs maxItems={4} aria-label="breadcrumb">
    <Link color="inherit" to="#">
      Home
    </Link>
    <Link color="inherit" to="#">
      Catalog
    </Link>
    <Link color="inherit" to="#">
      Accessories
    </Link>
    <Link color="inherit" to="#">
      New Collection
    </Link>
    <Typography color="textPrimary">Belts</Typography>
  </Breadcrumbs>
  </Box>
)





export default BreadCrumbs;