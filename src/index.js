import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import { messages, appLang } from './translations';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={appLang} messages={messages[appLang]}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
