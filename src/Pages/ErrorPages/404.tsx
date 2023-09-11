import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center h-screen">
      <Typography variant="h1" component="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Link to="/" className="mt-4">
        <Button variant="contained" color="primary">
          Go to Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;