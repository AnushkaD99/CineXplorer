import { type ThemeOptions, createTheme } from '@mui/material/styles';

const themeSettings = (mode: 'light' | 'dark'): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#0F52BA',
                    light: '#4B7BE5',
                    dark: '#083080',
                    contrastText: '#FFFFFF',
                },
                secondary: {
                    main: '#E50914',
                    light: '#FF3D47',
                    dark: '#A00000',
                    contrastText: '#FFFFFF',
                },
                background: {
                    default: '#F5F7FA',
                    paper: '#FFFFFF',
                },
                text: {
                    primary: '#2A3139',
                    secondary: '#5D646F',
                },
                divider: 'rgba(0, 0, 0, 0.12)',
                error: { main: '#D32F2F' },
                warning: { main: '#FFA000' },
                info: { main: '#1976D2' },
                success: { main: '#388E3C' },
            }
            : {
                primary: {
                    main: '#4B7BE5',
                    light: '#7599FF',
                    dark: '#0F52BA',
                    contrastText: '#FFFFFF',
                },
                secondary: {
                    main: '#FF3D47',
                    light: '#FF7A80',
                    dark: '#E50914',
                    contrastText: '#FFFFFF',
                },
                background: {
                    default: '#121212',
                    paper: '#1E1E1E',
                },
                text: {
                    primary: '#E0E0E0',
                    secondary: '#AAAAAA',
                },
                divider: 'rgba(255, 255, 255, 0.12)',
                error: { main: '#F44336' },
                warning: { main: '#FFC107' },
                info: { main: '#29B6F6' },
                success: { main: '#66BB6A' },
            }),
    },
    typography: {
        fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
        h1: { fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.2 },
        h2: { fontWeight: 600, fontSize: '2rem', lineHeight: 1.3 },
        h3: { fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.3 },
        h4: { fontWeight: 600, fontSize: '1.5rem', lineHeight: 1.4 },
        h5: { fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.4 },
        h6: { fontWeight: 500, fontSize: '1rem', lineHeight: 1.4 },
        subtitle1: { fontWeight: 400, fontSize: '1rem', lineHeight: 1.5 },
        subtitle2: { fontWeight: 400, fontSize: '0.875rem', lineHeight: 1.57 },
        body1: { fontWeight: 400, fontSize: '1rem', lineHeight: 1.5 },
        body2: { fontWeight: 400, fontSize: '0.875rem', lineHeight: 1.5 },
        button: {
            fontWeight: 500,
            fontSize: '0.875rem',
            textTransform: 'none',
            lineHeight: 1.5,
        },
        caption: { fontWeight: 400, fontSize: '0.75rem', lineHeight: 1.5 },
        overline: {
            fontWeight: 500,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            lineHeight: 1.5,
        },
    },
    // Your component overrides & other settings...
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: 'none',
                    padding: '8px 16px',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: mode === 'light' ? '#4B7BE5' : '#7599FF',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow:
                        mode === 'light'
                            ? '0 2px 8px rgba(0, 0, 0, 0.1)'
                            : '0 2px 8px rgba(0, 0, 0, 0.4)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow:
                            mode === 'light'
                                ? '0 8px 16px rgba(0, 0, 0, 0.1)'
                                : '0 8px 16px rgba(0, 0, 0, 0.6)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { borderRadius: 8 },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: 16 },
            },
        },
    },
    shape: { borderRadius: 8 },
    spacing: 8,
});

export const createAppTheme = (mode: 'light' | 'dark') => {
    return createTheme(themeSettings(mode));
};
