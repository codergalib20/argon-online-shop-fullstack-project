import { Box, Container, Typography } from '@mui/material';
import React from 'react';
const NoPage = () => {
  return (
    <Box>
      <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection: 'column', minHeight: '105vh'}}>
          <Typography variant="h3">404</Typography>
          <Typography variant="h5">Page not found!</Typography>
      </Container>
    </Box>
  );
};

export default NoPage;