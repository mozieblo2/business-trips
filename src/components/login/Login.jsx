import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Typography, Button, TextField, Grid, Box } from '@mui/material';

function Login({ isWidthLowerThanMd }) {
    const intl = useIntl();

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '40px 50px',
                borderRadius: 1,
                bgcolor: '#fff',
                boxShadow: '0 4px 24px 0 rgb(181 181 181 / 25%)'
            }}
        >
            <Typography
                component="h6"
                variant="h6"
                sx={{
                    fontSize: 26,
                    fontWeight: 'bold'
                }}
            >
                {intl.formatMessage({ id: 'login.btn.login' })}
                <Typography
                    component="span"
                    variant="h6"
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: 26,
                        fontWeight: 'bold',
                        color: 'primary.grey'
                    }}
                >
                    {intl.formatMessage({ id: 'login.inputs.title' })}
                </Typography>
            </Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3, width: isWidthLowerThanMd ? 'unset' : 272 }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Login"
                            name="email"
                            autoComplete="email"
                            // error={false}
                            // helperText={intl.formatMessage({ id: 'login.login.required' })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            // error={false}
                            // helperText={intl.formatMessage({ id: 'login.password.required' })}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2, hover: 'dark' }}>
                    {intl.formatMessage({ id: 'login.btn.login' })}
                </Button>
            </Box>
        </Box>
    );
}

Login.propTypes = {
    isWidthLowerThanMd: PropTypes.bool
};

export default Login;
