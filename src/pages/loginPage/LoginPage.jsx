import React from 'react';
import { useIntl } from 'react-intl';

function HomePage() {
    const intl = useIntl();

    return <div>{intl.formatMessage({ id: 'login.test' })}</div>;
}

export default HomePage;
