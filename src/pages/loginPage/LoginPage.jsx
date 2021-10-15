import React from 'react';
import { Container, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { theme } from 'styles/theme';
import { useIntl } from 'react-intl';
import Login from 'components/login/Login';
import LoginImage from 'components/loginImage/LoginImage';
import CopyRights from 'components/copyrights/CopyRights';
import Logo from 'components/logo/Logo';

function LoginPage() {
    const intl = useIntl();
    const isWidthLowerThanMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Container
                component="div"
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    paddingTop: 7
                }}
            >
                <Box sx={{ width: '30%' }}>
                    <Grid container rowSpacing={1} sx={{ alignItems: 'center' }}>
                        <Grid item xs={6}>
                            <Logo />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                component="p"
                                textAlign="left"
                                sx={{
                                    fontSize: 38,
                                    fontWeight: 'bold',
                                    marginTop: '-5px'
                                }}
                            >
                                {intl.formatMessage({ id: 'page.login.title' })}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                component="p"
                                textAlign="left"
                                sx={{ color: 'primary.grey', fontSize: 18, fontWeight: 'bold' }}
                            >
                                {intl.formatMessage({ id: 'page.login.text' })}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: `${!isWidthLowerThanMd ? 'space-between' : 'center'}`,
                        height: 'inherit',
                        mb: 20
                    }}
                >
                    {!isWidthLowerThanMd ? <LoginImage /> : null}
                    <Login isWidthLowerThanMd={isWidthLowerThanMd} />
                </Box>
                <CopyRights />
            </Container>
        </>
    );
}

export default LoginPage;

//  TODO
// 1. RWD - to fix
// 2. Spaces next to Logo - to fix
// 2. Form - validation, handle submit
