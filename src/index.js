import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from 'styles/theme';
import App from './components/app/App';
import { messages, appLang } from './translations';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <IntlProvider locale={appLang} messages={messages[appLang]}>
                <App />
            </IntlProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
