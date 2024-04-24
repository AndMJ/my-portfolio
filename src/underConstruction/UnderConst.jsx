import {useState} from "react";
import {Box, Container, IconButton, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import ContrastIcon from '@mui/icons-material/Contrast';

function UnderConst() {

    const [changeTheme, setChangeTheme] = useState(true) //true = light, false = dark

    const Theme = createTheme({
        palette: {
            mode: changeTheme ? "light" : "dark"
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
                    <IconButton onClick={() => setChangeTheme((current) => {return !current})}>
                        <ContrastIcon></ContrastIcon>
                    </IconButton>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default UnderConst