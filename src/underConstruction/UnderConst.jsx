import {useState} from "react";
import {Box, Container, IconButton, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import ContrastIcon from '@mui/icons-material/Contrast';

function UnderConst() {

    const [mode, setMode] = useState('dark');

    const Theme = createTheme({
        palette: {
            mode,
        },
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif',
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={Theme}>
            {/*Needed for Themes*/}
            <CssBaseline />

            <Container>
                <Box height={"100vh"} width={"100%"} alignContent={"center"} justifyContent={"center"} textAlign={"center"}>
                    <Typography>André João · Portfolio under construction.</Typography>
                    <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))}>
                        <ContrastIcon></ContrastIcon>
                    </IconButton>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default UnderConst