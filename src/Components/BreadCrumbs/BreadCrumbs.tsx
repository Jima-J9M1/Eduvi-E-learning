import { Breadcrumbs, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => (
  <Box component="div" className="mb-4" >
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



export const BreadCrumb = () => {
  // const { state } = useLocation()
  let match = window.location.pathname 
  match = match.replaceAll("%20", " ")
  const pathnames = match.split('/').filter((x:string) => x);

  return (
    <Breadcrumbs maxItems={4} aria-label="breadcrumb" className="p-3">
      {pathnames.length > 0 ? (
        <Link to="/" color="inherit">
          Home
        </Link>
      ) : (
        <Typography color="textPrimary">Home</Typography>
      )}

      {pathnames.map((name: string, index: number) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography color="textPrimary" key={name}>
            {name}
          </Typography>
        ) : (
          <Link to={routeTo} color="inherit" key={name}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;