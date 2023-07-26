import { Box, ThemeProvider } from '@mui/material';
import * as React from 'react';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <Box component="main" sx={{
        height: "100vh",
        backgroundColor: "#000",
      }}></Box>
    </ThemeProvider>
  );
}
