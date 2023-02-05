
import { Box, ThemeProvider } from '@mui/material';
import LeftSidebar from './Layout';
import AppRoutes from './Routes/AppRoutes';
import { theme } from './Theme';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from './store';
import AuthProvider from './Context/AuthContext';
import "./_App.scss"

// This is the parent component of all components. The data passed from here using Context API will be available to all the components.

function App() {

  const queryClient = new QueryClient() 

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={1}>
            <AuthProvider>
              <Box sx={{ height: "100vh", backgroundColor: "background.paper" }}>
                <AppRoutes />
              </Box>
            </AuthProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
