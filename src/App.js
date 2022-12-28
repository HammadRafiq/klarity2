
import { Box, ThemeProvider } from '@mui/material';
import LeftSidebar from './Layout';
import AppRoutes from './Routes/AppRoutes';
import { theme } from './Theme';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
