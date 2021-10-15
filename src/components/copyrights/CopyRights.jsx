import React from 'react';
import { useIntl } from 'react-intl';
import { Typography } from '@mui/material';

function CopyRights() {
    const intl = useIntl();
    return (
        <Typography component="p" textAlign="center" p={2} sx={{ color: 'primary.grey' }}>
            {intl.formatMessage({ id: 'copyrights.text' })}
        </Typography>
    );
}

export default CopyRights;
