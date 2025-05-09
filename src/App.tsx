import { ThemeProvider, CssBaseline, Typography, IconButton } from '@mui/material';
import { Provider } from 'react-redux';
import { store, useAppDispatch, useAppSelector } from './store';
import { createAppTheme } from './theme/theme';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { toggleTheme } from './store/slices/themeSlice';

const AppContent = () => {
  const { mode } = useAppSelector(state => state.theme);
  const theme = createAppTheme(mode);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>
        Test
      </Typography>
      <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;