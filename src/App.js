
import { Box, ThemeProvider } from '@mui/material';
import LeftSidebar from './Layout';
import AppRoutes from './Routes/AppRoutes';
import { theme } from './Theme';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={1}>
            <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
              <AppRoutes />
            </Box>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
