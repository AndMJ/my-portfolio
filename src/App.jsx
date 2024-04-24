import {Box, Button, Container, IconButton, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "@fontsource/montserrat"
import "./App.css"
import {useState} from "react";

import ContrastIcon from '@mui/icons-material/Contrast';

function App() {

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
            <CssBaseline />
            <Container>
                <Box height={"100vh"} width={"100%"} alignContent={"center"} justifyContent={"center"} textAlign={"center"}>

                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default App
