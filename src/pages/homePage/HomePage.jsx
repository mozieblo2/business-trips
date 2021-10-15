import React from 'react';
import { useIntl } from 'react-intl';

function HomePage() {
    const intl = useIntl();

    return <div>{intl.formatMessage({ id: 'app.start' })}</div>;
}

export default HomePage;
